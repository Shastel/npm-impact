# Npm impact

A tool that performs a naive estimation of which package is more important than other

## Motivation

Once you decided to contribute to the OS dependencies of your project it is easy to lose in a big project, and it is usually hard to start contributing to something really big. However there are a lot of packages that support the whole ecosystem, the tool allows you to estimate which packages are used in the depth of your dependency tree and make a maximal impact in your contribution. 

## Installation

You should get [nodejs](https://nodejs.org/en/) first.

Then you will be able to install 'npm-impact' globally or you will be able to run the tool with [npx](https://www.npmjs.com/package/npx)
```sh
npm i -g npm-impact
```

## Usage
```sh
npm npm-impact path-or-url-to-pckg.json [, path-or-url-to-pckg.json]
```

or
```sh
npx npm-impact path-or-url-to-pckg.json [, path-or-url-to-pckg.json]
```

### Available options
`--paths, -p` - List of paths to package.json(s) to skan  
`--json, -j` - Path to JSON output file
`--csv, -c` - Path to CSV output file

### Examples

Calling of the tool with its own package.json

```sh
npx github:Shastel/npm-impact ./package.json
```

Will result to

```sh
┌─────────┬────────────────────────┬───────┬─────────────────────────────────────────────────────────────────┐
│ (index) │          name          │ score │                             issues                              │
├─────────┼────────────────────────┼───────┼─────────────────────────────────────────────────────────────────┤
│    0    │       'kind-of'        │  300  │        'https://github.com/jonschlinkert/kind-of/issues'        │
│    1    │      'node-fetch'      │  200  │        'https://github.com/node-fetch/node-fetch/issues'        │
│    2    │      'fetch-blob'      │  200  │        'https://github.com/node-fetch/fetch-blob/issues'        │
│    3    │        'moment'        │  200  │            'https://github.com/moment/moment/issues'            │
│    4    │      'jsonparse'       │  200  │         'http://github.com/creationix/jsonparse/issues'         │
│    5    │      'JSONStream'      │  200  │       'https://github.com/dominictarr/JSONStream/issues'        │
│    6    │      'array-back'      │  200  │           'https://github.com/75lb/array-back/issues'           │
│    7    │       'json2csv'       │  100  │          'https://github.com/zemirco/json2csv/issues'           │
│    8    │       'npm-api'        │  100  │            'https://github.com/doowb/npm-api/issues'            │
│    9    │  'command-line-args'   │  100  │       'https://github.com/75lb/command-line-args/issues'        │
│   10    │  'formdata-polyfill'   │  100  │        'https://github.com/jimmywarting/FormData/issues'        │
│   11    │  'data-uri-to-buffer'  │  100  │ 'https://github.com/TooTallNate/node-data-uri-to-buffer/issues' │
│   12    │      'clone-deep'      │  100  │      'https://github.com/jonschlinkert/clone-deep/issues'       │
│   13    │      'commander'       │  100  │           'https://github.com/tj/commander.js/issues'           │
│   14    │   'is-plain-object'    │  100  │    'https://github.com/jonschlinkert/is-plain-object/issues'    │
│   15    │    'shallow-clone'     │  100  │     'https://github.com/jonschlinkert/shallow-clone/issues'     │
│   16    │ 'web-streams-polyfill' │  100  │ 'https://github.com/MattiasBuelens/web-streams-polyfill/issues' │
│   17    │    'paged-request'     │  100  │     'https://github.com/jonschlinkert/paged-request/issues'     │
│   18    │       'through'        │  100  │         'https://github.com/dominictarr/through/issues'         │
│   19    │        'axios'         │  100  │             'https://github.com/axios/axios/issues'             │
│   20    │      'form-data'       │  100  │         'https://github.com/form-data/form-data/issues'         │
│   21    │   'follow-redirects'   │  100  │  'https://github.com/follow-redirects/follow-redirects/issues'  │
│   22    │   'combined-stream'    │  100  │    'https://github.com/felixge/node-combined-stream/issues'     │
│   23    │       'asynckit'       │  100  │         'https://github.com/alexindigo/asynckit/issues'         │
│   24    │      'mime-types'      │  100  │          'https://github.com/jshttp/mime-types/issues'          │
│   25    │    'delayed-stream'    │  100  │     'https://github.com/felixge/node-delayed-stream/issues'     │
│   26    │       'mime-db'        │  100  │           'https://github.com/jshttp/mime-db/issues'            │
│   27    │      'lodash.get'      │  100  │            'https://github.com/lodash/lodash/issues'            │
│   28    │     'find-replace'     │  100  │          'https://github.com/75lb/find-replace/issues'          │
│   29    │   'lodash.camelcase'   │  100  │            'https://github.com/lodash/lodash/issues'            │
│   30    │       'typical'        │  100  │            'https://github.com/75lb/typical/issues'             │
│   31    │    'download-stats'    │  100  │        'https://github.com/doowb/download-stats/issues'         │
│   32    │      'lazy-cache'      │  100  │      'https://github.com/jonschlinkert/lazy-cache/issues'       │
│   33    │  'node-domexception'   │  100  │   'https://github.com/jimmywarting/node-domexception/issues'    │
│   34    │      'set-getter'      │  100  │          'https://github.com/doowb/set-getter/issues'           │
│   35    │    'to-object-path'    │  100  │    'https://github.com/jonschlinkert/to-object-path/issues'     │
└─────────┴────────────────────────┴───────┴─────────────────────────────────────────────────────────────────┘
```
