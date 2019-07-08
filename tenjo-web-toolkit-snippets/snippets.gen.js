const fs = require('fs')

const glob = require('glob')

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

// 1. Loop though files and create string with snippets
const frameworks = [{ name: 'React', shortName: 'r' }]

let fileString = '{ '

glob(`build/**/*.index.js`, function(err, files) {
  if (err) throw err

  files.map((file) => {
    let fileSplit = file.split('/')

    //  Componets/funciton name
    let itemName = fileSplit[fileSplit.length - 1]
    itemName = itemName.split('.')[0]
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

    //  Framework shortname
    let framework = frameworks.map(({ name, shortName }) => {
      let isFramework = fileSplit.includes(name)
      return isFramework ? shortName : ''
    })
    const [inial] = framework

    const snippet = `
    "${itemName}": {
      "prefix": "wt${letters}${inial}",
      "body": ["import ${itemName} from '@tenjojeremy/web-toolkit/${file}'"],
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
