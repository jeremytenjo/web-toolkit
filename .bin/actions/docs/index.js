const start = require('./start')
const build = require('./build')

const action = process.argv[3]

module.exports = () => {
  switch (action) {
    case 'start':
      start()
      break

    case 'build':
      build()
      break

    default:
      start()
      break
  }
}
