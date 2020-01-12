import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock/variationBlock.index'
import List from '../../list/index'
import Icon from '../index'

const pathsToIgnore = ['./iconSets.stories.js']

const iconsReq = require.context('./', true, /.js$/)
const iconsPaths = iconsReq.keys()

let iconNames = {}

iconsPaths.map((path) => {
  let split = path.split('/')
  const shortname = split[1]
  const hasKey = Object.prototype.hasOwnProperty.call(iconNames, shortname)

  if (hasKey) iconNames[shortname].push(path)
  else iconNames[shortname] = [path]
})

const loadIcons = () => {
  for (let [key, value] of Object.entries(iconNames)) {
    if (!pathsToIgnore.includes(`./${key}`)) {
      storiesOf('Data-Display|Icon/Library/', module).add(key, () => (
        <List grid>
          {value.map((path) => {
            let split = path.split('/')
            split.shift()
            let longName = split.join('/')
            longName = longName.substring(0, longName.length - 3)

            return (
              <B key={longName} title={longName} color='black'>
                <Icon name={longName} />
              </B>
            )
          })}
        </List>
      ))
    }
  }
}

loadIcons()
