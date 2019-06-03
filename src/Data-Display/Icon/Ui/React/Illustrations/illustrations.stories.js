import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import List from '../../../../List/Ui/React/list.index'
import Icon from '../icon.index'

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
          <Icon name={icon} type='illustrations' size={200} noBackground />
        ) : null}
      </B>
    )
  })
const Illustrations = () => <List grid>{getIconName(illustrationsPaths)}</List>

storiesOf('Data-Display|Icon/React/Illustrations', module).add(
  'collection',
  () => <Illustrations />,
)
