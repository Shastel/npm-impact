# Npm impact

A tool that performs a naive estimation which package is more important than other

## Motivation

Once you decided to contribute to the OS dependencies of your project it is easy to lose in big project, and it usually hard to start contibuting to something really big. Howewer there are a lot of packages that supports the whole ecosystem, the tool allows you to estimate which packages is used in the depth of your dependecy three and make a maximal impact in your contribution. 

## Installation

You should get [nodejs](https://nodejs.org/en/) first.
For now npm-impact is not awailable as npm module.

## Usage

```sh
npx github:Shastel/npm-impact path-or-url-to-pckg.json [, path-or-url-to-pckg.json]
```

### Examples

Calling of the tool with own package.json

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
│    2    │        'moment'        │  200  │            'https://github.com/moment/moment/issues'            │
│    3    │      'fetch-blob'      │  200  │        'https://github.com/node-fetch/fetch-blob/issues'        │
│    4    │      'JSONStream'      │  200  │       'https://github.com/dominictarr/JSONStream/issues'        │
│    5    │       'npm-api'        │  100  │            'https://github.com/doowb/npm-api/issues'            │
│    6    │    'paged-request'     │  100  │     'https://github.com/jonschlinkert/paged-request/issues'     │
│    7    │      'clone-deep'      │  100  │      'https://github.com/jonschlinkert/clone-deep/issues'       │
│    8    │  'data-uri-to-buffer'  │  100  │ 'https://github.com/TooTallNate/node-data-uri-to-buffer/issues' │
│    9    │  'formdata-polyfill'   │  100  │        'https://github.com/jimmywarting/FormData/issues'        │
│   10    │    'download-stats'    │  100  │        'https://github.com/doowb/download-stats/issues'         │
│   11    │    'shallow-clone'     │  100  │     'https://github.com/jonschlinkert/shallow-clone/issues'     │
│   12    │        'axios'         │  100  │             'https://github.com/axios/axios/issues'             │
│   13    │   'is-plain-object'    │  100  │    'https://github.com/jonschlinkert/is-plain-object/issues'    │
│   14    │ 'web-streams-polyfill' │  100  │ 'https://github.com/MattiasBuelens/web-streams-polyfill/issues' │
│   15    │       'through'        │  100  │         'https://github.com/dominictarr/through/issues'         │
│   16    │      'jsonparse'       │  100  │         'http://github.com/creationix/jsonparse/issues'         │
│   17    │      'lazy-cache'      │  100  │      'https://github.com/jonschlinkert/lazy-cache/issues'       │
│   18    │   'follow-redirects'   │  100  │  'https://github.com/follow-redirects/follow-redirects/issues'  │
│   19    │      'set-getter'      │  100  │          'https://github.com/doowb/set-getter/issues'           │
│   20    │    'to-object-path'    │  100  │    'https://github.com/jonschlinkert/to-object-path/issues'     │
│   21    │  'node-domexception'   │  50   │   'https://github.com/jimmywarting/node-domexception/issues'    │
└─────────┴────────────────────────┴───────┴─────────────────────────────────────────────────────────────────┘
```
