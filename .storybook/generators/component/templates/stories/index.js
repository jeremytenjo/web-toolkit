const createFile = require('../../utils/createFile')
const createTitle = require('./utils/createTitle')
const createImportString = require('./utils/createImportString')
const getRelativePath = require('./utils/getRelativePath')

module.exports = async ({ name, path, nameUppercase, outputPathBase }) => {
  const title = createTitle(path)

  // generate MDX
  const importString = createImportString(name, nameUppercase, undefined, path)
  const outputPathMdx = outputPathBase(`stories/sb.stories.mdx`)
  const contentMdx = `
import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks'
import ${nameUppercase} from '..'
import Variants from './variants'

<Meta title='${title}' />

#### Usage

${'```'}js
  ${importString}
${'```'}
#### Props 
<Props of='${nameUppercase}' />

#### Styles

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
  const variationBlockPath = await getRelativePath(
    `${process.cwd()}/src/${path}`,
    '.storybook/customComponents/variationBlock/index.js',
  )
  const useVariantsPath = await getRelativePath(
    `${process.cwd()}/src/${path}`,
    'useVariants',
  )
  const outputPathVariants = outputPathBase(`stories/variants.js`)
  const contentVariants = `
  import React from 'react'

  import B from '../${variationBlockPath}'
  import { useVariants } from '../${useVariantsPath}'
  
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
      dir: '${path}',
    })
  
    return Elements
  }
  
`
  createFile(outputPathVariants, contentVariants)
}
