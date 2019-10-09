import React, { useState, useEffect } from 'react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Button1 from '../Styles/button.1.index'

export default { title: 'Input|Form/Button' }

export const Base = ({ Button = Button1 }) => {
  const [loading, setLoading] = useState(null)
  return (
    <div>
      <B title='color - primary'>
        <Button color='primary' />
      </B>
      <B title='alternative color'>
        <Button color='secondary' />
      </B>
      <B title='active'>
        <Button active />
      </B>
      <B title='disabled'>
        <Button disabled />
      </B>
      <B title='outlined' color='black'>
        <Button outlined />
      </B>
      <B title='loading'>
        <button onClick={() => setLoading(!loading)}>toggle</button>
        <br />
        <br />
        <Button loading={loading} />
      </B>
      <B title='iconName'>
        <Button iconName='camera/material' />
      </B>
      <B title='FAB'>
        <Button iconName='camera/material' type='FAB' />
      </B>
    </div>
  )
}

export const Styles = () => {
  const stylesReq = require.context('../Styles/', true, /.js$/)
  const stylesPaths = stylesReq.keys()

  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(stylesPaths)
  }, [])

  const getStyles = async (paths) => {
    const Elements = paths.map(async (location) => {
      let styleNumber = location.split('.')[2]
      let title = `Style${styleNumber}`
      let modLocation = location.substr(1)
      let Mod = await import(`../Styles${modLocation}`)
      Mod = Mod.default

      return (
        <>
          <B title={title} key={title} noBackground>
            <Base Button={Mod} />
          </B>
        </>
      )
    })

    setvars(await Promise.all(Elements))
  }

  return <div style={{ display: 'grid', gridAutoFlow: 'column' }}>{vars}</div>
}
