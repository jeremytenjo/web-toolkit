import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Tabs1 from './Styles/1/tabs.index'
import Tabs2 from './Styles/2/tabs.index'

const DataTabs = [
  { label: 'Photos', link: '/profile/photos' },
  { label: 'Favourites', link: '/profile/favourites' },
  { label: 'Edit Profile', link: '/profile/edit' },
]

const DataTabs2 = [
  { label: 'MOVIES', link: '/profile/photos' },
  { label: 'TV SHOWS', link: '/profile/favourites' },
]

const Variations = () => (
  <>
    <B title='1' noBackground>
      <Tabs1 tabList={DataTabs} />
    </B>

    <B title='2' noBackground>
      <Tabs2 tabList={DataTabs2} font='secondary' />
    </B>
  </>
)

storiesOf('Navigation|Tabs/Ui/React/', module).add('all', () => <Variations />)
