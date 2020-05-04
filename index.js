#!/usr/bin/env node

const arg1 = process.argv[2]
const arg2 = process.argv.splice(3, process.argv.length)

global.isTest = arg2.includes('test')

require(`./scripts/${arg1}/index.js`)()
