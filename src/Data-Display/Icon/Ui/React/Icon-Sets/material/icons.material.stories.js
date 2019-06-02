import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '../../icon.index'

const req = require.context('./', true, /.js$/)

const iconPaths = req.keys()

const wrapperStyle = {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 150px)',
  gridGap: 10,
}

const AllIcons = () => {
  return (
    <div style={wrapperStyle}>
      {iconPaths.map((icon) => {
        icon = icon.substring(0, icon.length - 3)
        icon = icon.replace('./', '')
        const iconArray = icon.split('.')
        const iconLength = iconArray.length

        return (
          <div key={icon}>
            <span style={{ color: 'lightgrey', textAlign: 'center' }}>
              {icon}
            </span>
            {icon !== './icons.material.stories' && iconLength === 1 ? (
              <Icon name={`material/${icon}`} />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

storiesOf('Data-Display|Icon/Icon-Set/Material', module)
  .addParameters({
    backgrounds: [{ value: '#0097A7', default: true }],
  })
  .add('All', () => <AllIcons />)
