import React, { useState } from 'react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import { useStyles } from '../../../../../../.storybook/Utils/useStyles'
import Logo from '../../../../../../.storybook/Images/logo.svg'

const Variants = ({ Component: AccessPage }) => {
  const [show, setShow] = useState(false)

  const handleSuccess = (userInfo) => {
    console.log({ userInfo })
    setShow(false)
  }
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      <AccessPage
        show={show}
        onClose={() => setShow(false)}
        variation={1}
        type='login'
        onSuccess={handleSuccess}
        logo={Logo}
        name='Example'
        desc='Example auth page'
        service='firebase'
        providers={['apple', 'google', 'facebook']}
      />
    </div>
  )
}

export default () => {
  const req = require.context('../Styles', true, /index.js$/)
  const { Elements } = useStyles({
    req,
    Variants,
    name: 'Authentication/AccessPage',
  })

  return Elements
}
