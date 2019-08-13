import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { Route } from 'react-router-dom'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Bar from '../Base/navBar.index'

import data from './navBar.links'

const testFileInput = (file) => {
  console.log(file)
}

const Child = (router) => {
  return (
    <B title='Example 1' noBackground style={{ width: 'auto' }}>
      <Bar
        router={router}
        data={data}
        activeColor='primary'
        defaultColor='grey'
        position='bottom'
        onInput={testFileInput}
      />
    </B>
  )
}

const Variations = () => {
  return (
    <>
      <Route path='/' component={Child} />
    </>
  )
}

storiesOf('Navigation|Nav Bar/React', module)
  .addDecorator(StoryRouter())
  .add('Example', () => <Variations />)
