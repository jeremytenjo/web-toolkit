import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Bar from './navBar.index'
import defaultData from './Data/data.defalt.mockdata'
import fileUplaodData from './Data/data.fileUpload.mockData'
import noLabelsdata from './Data/data.noLabels.mockdata'
import mainIconData from './Data/data.mainIcon.mockdata'

const testFileInput = (file) => {
  console.log(file)
}

const Variations = () => (
  <>
    <B title='Default' noBackground style={{ width: 'auto' }}>
      <Bar
        router={() => null}
        data={defaultData}
        activeColor='#24c3a9'
        defaultColor='#b0b0b0'
        backgroundColor='rgba(36, 195, 169, 0.2)'
      />
    </B>

    <B title='with center icon' noBackground style={{ width: 'auto' }}>
      <Bar
        router={() => null}
        data={mainIconData}
        activeColor='#24c3a9'
        defaultColor='#b0b0b0'
        backgroundColor='rgba(36, 195, 169, 0.2)'
      />
    </B>

    <B title='no labels' noBackground style={{ width: 'auto' }}>
      <Bar
        router={() => null}
        data={noLabelsdata}
        activeColor='#24c3a9'
        defaultColor='#b0b0b0'
        backgroundColor='rgba(36, 195, 169, 0.2)'
      />
    </B>

    <B title='File upload Icon' noBackground style={{ width: 'auto' }}>
      <Bar
        router={() => null}
        data={fileUplaodData}
        activeColor='#24c3a9'
        defaultColor='#b0b0b0'
        backgroundColor='rgba(36, 195, 169, 0.2)'
        onFileSelect={testFileInput}
      />
    </B>
  </>
)

storiesOf('Navigation|Nav Bar/React/Style1', module).add('default', () => (
  <Variations />
))
