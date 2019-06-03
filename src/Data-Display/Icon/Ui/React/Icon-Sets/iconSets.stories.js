import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import List from '../../../../List/Ui/React/list.index'
import Icon from '../icon.index'

const materialIconsReq = require.context('./', true, /material\.js$/)
const materialIconPaths = materialIconsReq.keys()

const style1Req = require.context('./', true, /style1\.js$/)
const style1Paths = style1Req.keys()

const getIconName = (paths) =>
  paths.map((icon) => {
    icon = icon.substring(0, icon.length - 3)
    icon = icon.replace('./', '')
    const iconArray = icon.split('.')
    const iconLength = iconArray.length

    return (
      <B key={icon} title={icon} color='black'>
        {icon !== './icons.material.stories' && iconLength === 1 ? (
          <Icon name={icon} />
        ) : null}
      </B>
    )
  })

const MaterialIcons = () => <List grid>{getIconName(materialIconPaths)}</List>
const Style1Icons = () => <List grid>{getIconName(style1Paths)}</List>

storiesOf('Data-Display|Icon/React/Icon-Set/', module)
  .add('Material', () => <MaterialIcons />)
  .add('Style1', () => <Style1Icons />)
