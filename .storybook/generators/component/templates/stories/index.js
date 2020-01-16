const createFile = require('../../utils/createFile')
const createTitle = require('./utils/createTitle')
const createImportString = require('./utils/createImportString')

module.exports = ({ name, nameUppercase, outputPathBase }) => {
  const storybookLocation = createTitle(name)

  // generate MDX
  const importString = createImportString(name, nameUppercase)
  const outputPathMdx = outputPathBase(`stories/${name}.stories.mdx`)
  const contentMdx = `import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks'
import Variants from './variants'

<Meta title='${storybookLocation}' />

## Usage

${'```'}js
  ${importString}
${'```'}
## Props 
<Props of='${nameUppercase}' />

## Styles

<Preview>
<Story name='Styles'>
   <>
    <Variants />
  </>
</Story>
</Preview>  
`
  createFile(outputPathMdx, contentMdx, true)

  // generate variants
  const outputPathVariants = outputPathBase(`stories/variants.js`)
  const contentVariants = `
  import React from 'react'

  import B from '../../../../.storybook/customComponents/variationBlock/variationBlock.index'
  import { useVariants } from '../../../../.storybook/utils/useVariants'
  
  const Variants = ({ Component: ${nameUppercase} }) => { 
    return (
      <div>
        <B title='default'>
          <${nameUppercase} />
        </B>   
      </div>
    )
  }
  
  export default () => {
    const req = require.context('../styles', true, /index.js$/)
    const { Elements } = useVariants({
      req,
      Variants,
      dir: ${storybookLocation},
    })
  
    return Elements
  }
  
`
  createFile(outputPathVariants, contentVariants)
}
