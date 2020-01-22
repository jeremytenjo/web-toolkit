import React, { useState } from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import { useVariants } from '../../../../.storybook/utils/useVariants'

const Variants = ({ Component: Menu }) => {
  const [loading, setLoading] = useState(null)
  const options = ['liberals', 'ndp']

  return (
    <div>
      <B title='default'>
        <Menu options={options} />
      </B>
    </div>
  )
}

export default () => {
  const req = require.context('../styles', true, /index.js$/)
  const { Elements } = useVariants({
    req,
    Variants,
    dir: 'input/menu',
  })

  return Elements
}
