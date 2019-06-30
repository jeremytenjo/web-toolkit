import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import List from '../../../List/Ui/React/list.index'

import Illustration from './illustration.index'

const illustrationsReq = require.context('./', true, /.js$/)
const illustrationsPaths = illustrationsReq.keys()

const getIconName = (paths) =>
  paths.map((icon) => {
    icon = icon.substring(0, icon.length - 3)
    icon = icon.replace('./', '')
    const iconArray = icon.split('.')
    const iconLength = iconArray.length

    return (
      <B key={icon} title={icon} noBackground style={{ width: '400px' }}>
        {icon !== './illustrations.stories' && iconLength === 1 ? (
          <Illustration name={icon} size={200} />
        ) : null}
      </B>
    )
  })
const Illustrations = () => <List grid>{getIconName(illustrationsPaths)}</List>

storiesOf('Data-Display|Illustrations/Ui/React', module).add(
  'collection',
  () => <Illustrations />,
)
