import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import { useHistory, useLocation } from '../../router'
import Tabs1 from '../styles/1'
import Tabs2 from '../styles/2'
import Tabs3 from '../styles/3'

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

const Variations = () => {
  let history = useHistory()
  let location = useLocation()
  let router = { history, location }

  return (
    <>
      <B title='1' noBackground style={{ width: '100%' }}>
        <Tabs1 router={router} data={data} />
      </B>

      <B title='2' noBackground style={{ width: '100%' }}>
        <Tabs2 router={router} data={data2} font='secondary' />
      </B>

      <B title='3' contentStyle={{ width: '100%', backgroundColor: 'black' }}>
        <Tabs3 router={router} data={data2} font='secondary' color='black' />
      </B>
    </>
  )
}

storiesOf('Navigation|Tabs/', module).add('styles', () => <Variations />, {
  notes: { markdown },
})
