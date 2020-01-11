import React, { useState } from 'react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import { useStyles } from '../../../../.storybook/Utils/useStyles'
import Logo from '../../../../.storybook/Images/logo.svg'

const Variants = ({ Component: AccessPage }) => {
  const [user, setShow] = useState(false)

  const handleSuccess = (userInfo) => {
    console.log({ userInfo })
    setShow(false)
  }
  return (
    <div>
      <button onClick={() => setShow(!user)}>Show</button>
      <AccessPage
        user={user}
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
    dir: 'Authentication/AccessPage',
  })

  return Elements
}
