import React from 'react'

import { useVariants } from '../../../../.storybook/utils/useVariants'

export default () => {
  const req = require.context('../', true, /index.js$/)
  const { Elements } = useVariants({
    req,
    dir: 'utils/string',
    type: '',
    getSpecTestValue: true,
  })

  return Elements
}
