const start = require('./index')

module.exports = async () => {
  start('firebase serve --only functions')
}
