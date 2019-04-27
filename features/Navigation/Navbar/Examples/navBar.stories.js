// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'

// Examples
import Default from './Default/example.default'
import Main from './MainIcon/mainicon'
import NoLabels from './NoLabels/example.noLabels'

// Stories
storiesOf('Nav Bar', module)
  .add('default', () => <Default />)
  .add('with center icon', () => <Main />)
  .add('no labels', () => <NoLabels />)
