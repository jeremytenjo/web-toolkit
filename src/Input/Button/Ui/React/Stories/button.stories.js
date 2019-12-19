import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import { useStyles } from '../../../../../../.storybook/Utils/useStyles'
import { defaultProps } from '../Base/button.base.propTypes'

const Variants = ({ Component: Button }) => {
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

const All_Styles = () => {
  const req = require.context('../Styles', true, /index.js$/)
  const { Elements } = useStyles({
    req,
    Variants,
    name: 'Input/Button',
    props: defaultProps,
  })

  return Elements
}

storiesOf('Input|button', module).add('All_Styles', () => <All_Styles />)
