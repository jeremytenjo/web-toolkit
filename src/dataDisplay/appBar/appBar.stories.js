import React, { Fragment, useState, useEffect } from 'react'

import Box from '../box/index'
import B from '../../../.storybook/customComponents/variationBlock'

export default {
  title: 'Data-Display|AppBar',
}

const req = require.context('./styles', true, /index.js$/)
const paths = req.keys()

const StylesList = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(paths)
  }, [])

  const getStyles = async (paths) => {
    const Elements = paths.map(async (location) => {
      let styleName = location.split('/')[2].split('.')[0]
      let title = `${styleName}`
      let modLocation = location.substr(1)
      let Mod = await import(`./styles${modLocation}`)
      Mod = Mod.default

      return (
        <Fragment key={Math.random()}>
          <B title={title} noBackground style={{ width: '100%' }}>
            <Mod
              title='Healthcare'
              logo='https://www.pinclipart.com/picdir/big/107-1070245_epteca-youtube-round-icon-png-clipart.png'
              onClick={() => console.log('fgsdff')}
            />
          </B>
        </Fragment>
      )
    })
    setvars(await Promise.all(Elements))
  }
  return <Box styles={{ gridAutoFlow: 'column' }}>{vars}</Box>
}

export const styles = () => <StylesList />
