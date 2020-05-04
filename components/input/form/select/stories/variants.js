import React from 'react'

import B from '../../../../../.storybook/customComponents/variationBlock'
import { useVariants } from '../../../../../.storybook/utils/useVariants'

const data = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
]

const Variants = ({ Component: Select }) => {
  return (
    <div>
      <B title='default' background>
        <Select data={data} />
      </B>
      <B title={`with title`} background>
        <Select data={data} title='seasons' />
      </B>
      <B title={`with labelKey === index`} background>
        <Select data={data} title='seasons' labelKey='index' />
      </B>
    </div>
  )
}

export default () => {
  const req = require.context('../styles', true, /index.js$/)
  const { Elements } = useVariants({
    req,
    Variants,
    dir: 'input/form/select',
  })

  return Elements
}
