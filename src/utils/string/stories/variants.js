import React from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import { useVariants } from '../../../../.storybook/utils/useVariants'

const Variants = ({ Component: func }) => {
  return (
    <div>
      {/* <h6>{name}</h6> */}
      <span>Before:</span>
      {/* <span>{string}</span> */}

      <span>Result:</span>
      <span>{func('string')}</span>
    </div>
  )
}

export default () => {
  const req = require.context('../', true, /index.js$/)
  const { Elements } = useVariants({
    req,
    Variants,
    dir: 'utils/string',
    type: '',
  })

  return Elements
}
