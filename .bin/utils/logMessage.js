const emoji = require('node-emoji')

exports.logSuccessMessage = (message, _emoji = 'white_check_mark') => {
  const successMessage = `${emoji.get(_emoji)}  ${message}`
  console.log(successMessage)
}
