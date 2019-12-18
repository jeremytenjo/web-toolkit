import React, { useState } from 'react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import useStyles from '../../../../../../.storybook/Utils/useStyles'
import Button1 from '../Styles/1'
import Button from '../Base/button.base'
import { defaultProps } from '../Base/button.base.propTypes'

export default {
  title: 'Input|Button',
  component: Button,
}

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

export const StylesTest = () => {
  const req = require.context('../Styles', true, /index.js$/)
  const { Elements } = useStyles({ req, Base, name: 'Input/Button', props: defaultProps })

  return <div style={{ display: 'grid', gridAutoFlow: 'column' }}>{Elements}</div>
}
