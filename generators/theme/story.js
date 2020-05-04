const { projectDir } = require('../../utils/getModulePath')
const createFile = require('../../utils/createFile')

module.exports = async (string) => {
  const outputFileStory = projectDir('src/theme/_theme.stories.mdx')
  const masterString = `import { Meta } from '@storybook/addon-docs/blocks'

<Meta title='Theme|Variables' />

## Theme Variables

${'```js'}
  ${string}
${'```'}

`
  await createFile(outputFileStory, masterString, 'nojs')
}
