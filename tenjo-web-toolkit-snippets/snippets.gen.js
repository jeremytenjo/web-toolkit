const fs = require('fs')

const glob = require('glob')
var emoji = require('node-emoji')

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

let fileString = '{ '
const packageName = '@tenjojeremy/web-toolkit'

glob(`build/**/index.js`, function(err, files) {
  if (err) throw err

  files.map((file, index) => {
    let comma = index === files.length - 1 ? '' : ','
    let fileSplit = file.split('/')
    fileSplit.pop()
    fileSplit.shift()

    let isStyle = fileSplit.some((item) => item === 'styles')
    //  Componets/funciton name
    let longName = fileSplit.join(' ')
    let itemName = fileSplit[fileSplit.length - 1]
    let itemNameSplit = itemName.split('.')
    itemName = itemNameSplit[0]
    itemName = capitalizeFirstLetter(itemName)

    let firstLetter = itemName
      .split('.')[0]
      .charAt(0)
      .toLowerCase()
    let SecondLetter = itemName
      .split('.')[0]
      .charAt(1)
      .toLowerCase()

    let prefix = firstLetter.concat(SecondLetter)

    if (itemNameSplit.length > 3) {
      let secondParam = itemNameSplit[1].split('.')[0]
      prefix = prefix.concat(secondParam)
      itemName = itemName.concat(` ${secondParam}`)
    }

    if (isStyle) {
      fileSplit.shift()
      prefix = fileSplit.join('')
      let first = fileSplit.shift()
      let last = fileSplit.pop()
      itemName = `${first}${last}`
    }

    let importName = itemName.split(' ')[0]

    const snippet = `
"${longName}": {
  "prefix": "wt${prefix}",
  "body": [
    "import ${importName} from '${packageName}/${file}'"
  ]
}${comma}
    `

    fileString += snippet
  })

  console.log({ fileString })
  fileString += ' }'

  const successEmogi = emoji.get('white_check_mark')

  // 2. create snipet file and attach created snippets
  fs.writeFile('tenjo-web-toolkit-snippets/snippets/snippets.json', fileString, function(
    err,
  ) {
    if (err) throw err
    console.log(`${successEmogi}  snippet.json created`)
  })

  // 3. Add snippets to README
  fs.writeFile('tenjo-web-toolkit-snippets/README.md', fileString, function(err) {
    if (err) throw err
    console.log(`${successEmogi}  README.md created`)
  })
})
