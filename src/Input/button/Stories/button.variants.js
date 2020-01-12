import React, { useState } from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import { useStyles } from '../../../../.storybook/utils/useStyles'

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
      <B title='File Input'>
        <Button
          iconName='camera/material'
          inputProps={{ onInput: (file) => console.log(file) }}
        />
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

export default () => {
  const req = require.context('../styles', true, /index.js$/)
  const { Elements } = useStyles({
    req,
    Variants,
    dir: 'input/button',
  })

  return Elements
}
