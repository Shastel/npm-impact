const NpmApi = require('npm-api');

const pcg = require('./package.json');

const npm = new NpmApi();

const results = {};
const pcgCache = {};

function getDependencies({ dependencies = {}, devDependencies = {} }) {
  return Object.keys(dependencies)
}

async function getPackage (name, version) {
  if (pcgCache[name+version]) {
    return pcgCache[name+version];
  }

  const repo = npm.repo(name);

  try {
    // console.log('load network', name)
    const pckg = await repo.package();

    pcgCache[name] = pckg;

    return pckg;
  } catch (e) {
    return console.log(e);
  }
}

function getIssues({ repository, bugs }) {
  if (!bugs && repository) {
    const { url } = repository;

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

async function addScore (list, parent, score) {
  // console.log('score', list, parent)
  return Promise.all(list.map(async (name) => {
    const pckg = await getPackage(name);

    if (!pckg) {
      console.log(name);
      return;
    }

    if (results[name]) {
      const a = results[name];

      if (a.parents.indexOf(parent) !== -1) {

        console.log(name);
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

    await addScore(
      dependencies,
      name,
      Math.max(
        Math.ceil(
          score/ (Math.max(t.parents.length, 2))
          ), 1),
    )
  })
);
}

addScore(
  getDependencies(pcg),
  pcg.name,
  100,
).then(() => {
  const t = Object.values(results).sort((a, b) => b.score - a.score);

  console.table(t, ['name', 'score', 'issues']);
});
