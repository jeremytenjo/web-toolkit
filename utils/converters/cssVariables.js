const pluralize = require('pluralize')

module.exports = (title, content) => {
  const titleSingular = pluralize.singular(title)
  let variablesString = []
  let variable = ''
  let fileString = `
 /* ${title} */\n
  :root {
  `
  for (let [key, value] of Object.entries(content)) {
    variable = `--${titleSingular}-${key}: ${value};`
    variablesString.push(variable)
  }

  variablesString = variablesString.join('\n')
  fileString += `${variablesString}\n  }\n`

  return fileString
}
