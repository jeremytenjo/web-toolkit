import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Tabs1 from './Styles/1/tabs.index'
import Tabs2 from './Styles/2/tabs.2.index'
import markdown from './tabs.readme.md'

const data = [
  { label: 'Photos', link: '/profile/photos' },
  { label: 'Favourites', link: '/profile/favourites' },
  { label: 'Edit Profile', link: '/profile/edit' },
]

const data2 = [
  { label: 'MOVIES', link: '/profile/photos' },
  { label: 'TV SHOWS', link: '/profile/favourites' },
]

const Variations = () => (
  <>
    <B title='1' noBackground style={{ width: '100%' }}>
      <Tabs1 data={data} />
    </B>

    <B title='2' noBackground style={{ width: '100%' }}>
      <Tabs2 data={data2} font='secondary' />
    </B>
  </>
)

storiesOf('Navigation|Tabs/Ui/React/', module).add(
  'all',
  () => <Variations />,
  {
    notes: { markdown },
  },
)
