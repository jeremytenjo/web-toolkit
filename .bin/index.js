#!/usr/bin/env node

const start = require('./actions/start/index')
const build = require('./actions/build')
const analyze = require('./actions/analyze')
const docs = require('./actions/docs/index')

const action = process.argv[2]

switch (action) {
  case 'start':
    start()
    break

  case 'build':
    build()
    break

  case 'analyze':
    analyze()
    break

  case 'docs':
    docs()
    break

  default:
    start()
    break
}
