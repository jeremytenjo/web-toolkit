import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import markdown from '../button.readme.md'
import { States as ButtonStates } from '../Base/button.base.stories'

const stylesReq = require.context('./', true, /index\.js$/)
const stylesPaths = stylesReq.keys()

export const Styles = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(stylesPaths)
  }, [])

  const getStyles = async (paths) => {
    const Elements = paths.map(async (location) => {
      let styleNumber = location.split('.')[2]
      let title = `Style${styleNumber}`
      let Mod = await import(`${location}`)
      Mod = Mod.default

      return (
        <>
          <B title={title} key={title} noBackground>
            <ButtonStates Button={Mod} />
          </B>
        </>
      )
    })

    setvars(await Promise.all(Elements))
  }

  return <div style={{ display: 'grid', gridAutoFlow: 'column' }}>{vars}</div>
}

// Stories
storiesOf('Input|Form/Button', module).add('Styles', () => <Styles />, {
  notes: { markdown },
})
