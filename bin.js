#!/usr/bin/env node

const NpmApi = require('npm-api');
const fs = require('fs/promises');
const fetch = require('node-fetch');

const npm = new NpmApi();

const [,, ...paths] = process.argv;

if (paths.length === 0) {
  console.error('Paths lists must not be empty');

  return process.exit(1);
}

const results = {};

// TODO: Maintain size of the cache
const pcgCache = {};

async function readPackage (path) {
  try {
    // TODO: Replace with proper regexp to filter urls
    if (path.startsWith('http')) {
      const res = await fetch(path);
      const json = await res.json();

      return json;
    }
    
    const content = await fs.readFile(path);

    return JSON.parse(content);
  } catch (e) {
    console.log(path, 'ignored', e.message);
  }
}

// TODO: Define different presets for scorring
const BASE_SCORE = 100;

function getScore(base = BASE_SCORE, depth = 1) {
  return Math.max(
    Math.ceil(base / depth), 1
  );
}

// TODO: Add dev dependencies
function getDependencies({ dependencies = {} /*, devDependencies = {} */}) {
  return Object.keys(dependencies)
}

async function getPackage (name) {
  if (pcgCache[name]) {
    return pcgCache[name];
  }

  const repo = npm.repo(name);

  try {
    const pckg = await repo.package();

    pcgCache[name] = pckg;

    return pckg;
  } catch (e) {
    return console.log(name, 'ignored', e.message);
  }
}

function getIssues({ repository, bugs }) {
  if (!bugs && repository) {
    const { url } = repository;

    // TODO: gitlab, bitbucket etc
    if (!url || url.indexOf('https://github.com') === -1) {
      return;
    }

    return url.replace('.git', '/issues');
  }

  if (!bugs) {
    return;
  }

  if (typeof bugs === 'string') {
    return bugs;
  }

  return bugs.url;
}

async function _addScore (list, parent, score) {
  return Promise.all(list.map(async (name) => {
    const pckg = await getPackage(name);

    if (!pckg) {
      return;
    }

    if (results[name]) {
      const a = results[name];

      if (a.parents.indexOf(parent) !== -1) {
        return;
      }

      results[name] = {
        ...a,
        parents: [...a.parents, parent],
        score: a.score + score,
      }
    } else {
      results[name] = {
        name,
        score,
        parents: [parent],
        issues: getIssues(pckg),
      }
    }

    const dependencies = getDependencies(pckg);

    const t = results[name];

    await _addScore(
      dependencies,
      name,
      getScore(score, t.parents.length),
    )
  })
);
}

function score(package) {
  return _addScore(
    getDependencies(package),
    package.name,
    BASE_SCORE,
  )
}

(async function(){
  const uPaths = Array.from(new Set(paths));

  const packages = await Promise.all(uPaths.map(readPackage));
  const notNullPackages = packages.filter(a => a);

  if (notNullPackages.length === 0) {
    console.error('Failed to loadd all packages');
  
    return process.exit(1);
  }

  for (let package of notNullPackages) {
    await score(package);
  }

  // TODO: Output to CSV
  const sortedResults = Object.values(results).sort((a, b) => b.score - a.score);

  console.table(sortedResults, ['name', 'score', 'issues']);
})();
