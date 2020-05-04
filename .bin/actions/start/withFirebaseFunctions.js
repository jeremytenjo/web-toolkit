const start = require('./start')

module.exports = async () => {
  start('firebase serve --only functions')
}
