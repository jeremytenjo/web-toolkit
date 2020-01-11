import React, { Fragment, useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { Route } from '../router/index'
import Box from '../../dataDisplay/box/index'
import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

const req = require.context('./Styles', true, /index.js$/)
const paths = req.keys()

const LinkStyles = () => {
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
        <Fragment key={Math.random()}>
          <B title={title} key={`${title}a`} noBackground>
            <Mod />
          </B>
          <B title={`${title} - matcheds page`} key={`${title}b`} noBackground>
            <Mod link='/iframe.html' />
          </B>
        </Fragment>
      )
    })
    setvars(await Promise.all(Elements))
  }
  return <Box styles={{ gridAutoFlow: 'column' }}>{vars}</Box>
}

const Variations = () => {
  return (
    <>
      <Route path='/' component={LinkStyles} />
    </>
  )
}

storiesOf('Navigation|Link', module)
  .addDecorator(StoryRouter())
  .add('Styles', () => <Variations />)
