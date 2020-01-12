import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import Box from '../../../../dataDisplay/box/index'
import B from '../../../../../.storybook/customComponents/variationBlock'

const req = require.context('../styles', true, /index.js$/)
const paths = req.keys()

const data = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
]
const Styles = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(paths)
  }, [])

  const getStyles = async (paths) => {
    const Elements = paths.map(async (location, i) => {
      let Mod = await import(`./styles${location.substring(1)}`)
      Mod = Mod.default
      const title = location.split('.')[2]

      return (
        <>
          <B title={title} key={i} background>
            <Mod data={data} />
          </B>
          <B title={`${title} - with title`} key={i} background>
            <Mod data={data} title='seasons' />
          </B>
          <B title={`${title} - with labelKey === index`} key={i} background>
            <Mod data={data} title='seasons' labelKey='index' />
          </B>
        </>
      )
    })
    setvars(await Promise.all(Elements))
  }
  return <Box styles={{ gridAutoFlow: 'column' }}>{vars}</Box>
}

storiesOf('Input|Form/Select', module).add('variations', () => <Styles />)
