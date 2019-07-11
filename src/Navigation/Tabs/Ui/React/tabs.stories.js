import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Tabs1 from './Styles/1/tabs.1.index'
import Tabs2 from './Styles/2/tabs.2.index'
import Tabs3 from './Styles/3/tabs.3.index'
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

    <B title='3' contentStyle={{ width: '100%', backgroundColor: 'black' }}>
      <Tabs3 data={data2} font='secondary' color='black' />
    </B>
  </>
)

storiesOf('Navigation|Tabs/Ui/React/', module).add(
  'styles',
  () => <Variations />,
  {
    notes: { markdown },
  },
)
