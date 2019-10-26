import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { Route } from 'react-router-dom'
import StoryRouter from 'storybook-react-router'

import Box from '../../../../Data-Display/Box/Ui/React/box.index'
import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

const req = require.context('./Styles', true, /index.js$/)
const paths = req.keys()

const StylesList = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(paths)
  }, [])

  const getStyles = async (paths) => {
    const Elements = paths.map(async (location) => {
      let styleName = location.split('/')[2].split('.')[0]
      let title = `${styleName}`
      let modLocation = location.substr(1)
      let Mod = await import(`./Styles${modLocation}`)
      Mod = Mod.default

      return (
        <B title={title} key={title} noBackground>
          <Mod />
        </B>
      )
    })
    setvars(await Promise.all(Elements))
  }
  return <Box gridAutoFlow='column'>{vars}</Box>
}

const Variations = () => {
  return (
    <>
      <Route path='/' component={StylesList} />
    </>
  )
}

storiesOf('Navigation|Link', module)
  .addDecorator(StoryRouter())
  .add('Styles', () => <Variations />)
