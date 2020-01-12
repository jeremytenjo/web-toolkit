import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import List from '../../list/index'

const illustrationsReq = require.context('./', true, /.js$/)
const illustrationsPaths = illustrationsReq.keys()

const ignorePaths = ['illustration.index', 'illustration.styles', 'illustration.stories']

const Illustrations = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getIconName(illustrationsPaths)
  }, [])

  const getIconName = async (paths) => {
    const helo0 = paths.map(async (icon) => {
      icon = icon.substring(0, icon.length - 3)
      icon = icon.replace('./', '')
      const iconArray = icon.split('.')
      const iconLength = iconArray.length

      let Ill = await import(`./${icon}.js`)
      Ill = Ill.default

      return !ignorePaths.inscludes(icon) && Ill && iconLength === 1 ? (
        <B key={icon} title={icon} noBackground>
          <Ill />
        </B>
      ) : null
    })

    setvars(await Promise.all(helo0))
  }

  return <List>{vars}</List>
}

storiesOf('Data-Display|Illustrations', module).add('collection', () => <Illustrations />)
