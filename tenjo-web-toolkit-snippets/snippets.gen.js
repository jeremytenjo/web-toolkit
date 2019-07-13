const fs = require('fs')

const glob = require('glob')
var emoji = require('node-emoji')

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

// 1. Loop though files and create string with snippets
const frameworks = [{ name: 'React', shortName: 'r' }]

let fileString = '{ '
const packageName = '@tenjojeremy/web-toolkit'

glob(`build/**/*.index.js`, function(err, files) {
  if (err) throw err

  files.map((file) => {
    let fileSplit = file.split('/')

    //  Componets/funciton name
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

    let letters = firstLetter.concat(SecondLetter)

    if (itemNameSplit.length > 3) {
      let secondParam = itemNameSplit[1].split('.')[0]
      letters = letters.concat(secondParam)
      itemName = itemName.concat(` ${secondParam}`)
    }

    let importName = itemName.split(' ')[0]

    //  Framework shortname
    let framework = frameworks.map(({ name, shortName }) => {
      let isFramework = fileSplit.includes(name)
      return isFramework ? shortName : ''
    })
    const [inial] = framework

    const snippet = `
    "${itemName}": {
      "prefix": "wt${letters}${inial}",
      "body": ["import ${importName} from '${packageName}/${file}'"],
    },
    `

    fileString += snippet
  })

  fileString += ' }'

  const successEmogi = emoji.get('white_check_mark')

  // 2. create snipet file and attach created snippets
  fs.writeFile(
    'tenjo-web-toolkit-snippets/snippets/snippets.json',
    fileString,
    function(err) {
      if (err) throw err
      console.log(`${successEmogi}  snippet.json created`)
    },
  )

  // 3. Add snippets to README
  fs.writeFile('tenjo-web-toolkit-snippets/README.md', fileString, function(
    err,
  ) {
    if (err) throw err
    console.log(`${successEmogi}  README.md created`)
  })
})
