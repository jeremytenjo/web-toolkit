const emoji = require('node-emoji')

exports.logSuccessMessage = (message, _emoji = 'white_check_mark', endEmoji) => {
  const successMessage = `${emoji.get(_emoji)}  ${message} ${
    endEmoji ? emoji.get(endEmoji) : ''
  }`
  console.log(successMessage)
}
