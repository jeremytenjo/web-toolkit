import React from 'react'
import { storiesOf } from '@storybook/react'

import { Route, useHistory, useLocation } from '../../../../router/react'
import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Bar from '../Base/navBar.index'

import data from './navBar.links'
import data2 from './navBar.links2'

const testFileInput = (file) => {
  console.log(file)
}

const Child = () => {
  let history = useHistory()
  let location = useLocation()
  let router = { history, location }

  return (
    <>
      <B title='Example 1' noBackground style={{ width: 'auto' }}>
        <Bar router={router} data={data} onInput={testFileInput} />
      </B>
      <B title='Example 2' noBackground style={{ width: 'auto' }}>
        <Bar
          router={router}
          data={data2}
          onInput={testFileInput}
          onSearchSubmit={(value) => console.log(value)}
        />
      </B>
      <B
        noBackground
        style={{
          width: 'auto',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Bar
          router={router}
          data={data2}
          onInput={testFileInput}
          onSearchSubmit={(value) => console.log(value)}
        />
      </B>
    </>
  )
}

const Variations = () => {
  return (
    <>
      <Route path='/' component={Child} />
    </>
  )
}

storiesOf('Navigation|Nav Bar/React', module).add('Example', () => <Variations />)
