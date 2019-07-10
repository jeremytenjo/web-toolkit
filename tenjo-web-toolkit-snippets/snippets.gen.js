const fs = require('fs')

const glob = require('glob')

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

// 1. Loop though files and create string with snippets
const frameworks = [{ name: 'React', shortName: 'r' }]

let fileString = '{ '
const packageName = '@tenjo/web-features'

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

    //  Framework shortname
    let framework = frameworks.map(({ name, shortName }) => {
      let isFramework = fileSplit.includes(name)
      return isFramework ? shortName : ''
    })
    const [inial] = framework

    const snippet = `
    "${itemName}": {
      "prefix": "wt${letters}${inial}",
      "body": ["import ${itemName} from '${packageName}/${file}'"],
    },
    `

    fileString += snippet
  })

  fileString += ' }'

  // 2. create snipet file and attach created snippets
  fs.writeFile(
    'tenjo-web-toolkit-snippets/snippets/snippets.json',
    fileString,
    function(err) {
      if (err) throw err
      console.log('Snippet file created successfully :)')
    },
  )
})
