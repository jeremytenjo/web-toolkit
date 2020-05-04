#!/usr/bin/env node

const arg1 = process.argv[2]

require(`./scripts/${arg1}/index.js`)()
