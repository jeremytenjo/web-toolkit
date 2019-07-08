import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Tabs from '../../../Navigation/Tabs/Ui/React/Styles/1/tabs.index'

import sticky from './sticky.index'

const DataTabs = [
  { label: 'Photos', link: '/profile/photos' },
  { label: 'Favourites', link: '/profile/favourites' },
  { label: 'Edit Profile', link: '/profile/edit' },
]

const Variations = () => (
  <>
    <B
      title='simple'
      contentStyle={{ overflow: 'auto', height: 200, width: 'auto' }}
    >
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <Tabs tabList={DataTabs} color='primary' style={sticky} />
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </B>
  </>
)

storiesOf('Misc-Utils|Position/Sticky', module).add('variations', () => (
  <Variations />
))
