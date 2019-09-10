import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import Box from '../../../../../Data-Display/Box/Ui/React/box.index'
import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

const req = require.context('./Styles', true, /.js$/)
const paths = req.keys()

const data = [{ value: 1, label: '1' }, { value: 2, label: '2' }]
const Styles = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(paths)
  }, [])

  const getStyles = async (paths) => {
    const Elements = paths.map(async (location, i) => {
      let Mod = await import(`./Styles${location.substring(1)}`)
      Mod = Mod.default
      const title = location.split('.')[2]

      return (
        <>
          <B title={title} key={i} noBackground>
            <Mod data={data} />
          </B>
          <B title={`${title} - with title`} key={i} noBackground>
            <Mod data={data} title='seasons' />
          </B>
        </>
      )
    })
    setvars(await Promise.all(Elements))
  }
  return <Box gridAutoFlow='column'>{vars}</Box>
}

storiesOf('Input|Form/Select', module).add('variations', () => <Styles />)
