import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Tabs from './tabs.index'

const DataTabs = [
  { label: 'Photos', link: '/profile/photos' },
  { label: 'Favourites', link: '/profile/favourites' },
  { label: 'Edit Profile', link: '/profile/edit' },
]

const Variations = () => (
  <>
    <B title='default'>
      <Tabs tabList={DataTabs} color='primary' />
    </B>
  </>
)

storiesOf('Navigation|Tabs/Ui/React/', module).add('default', () => (
  <Variations />
))
