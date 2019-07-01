import React, { memo } from 'react'

import IllAccount from '../../Illustration/Ui/React/account/style1'
import EmptyPage from '../Component/emptyPage.index'

const EmptyPageAccount = () => {
  return (
    <EmptyPage
      title='You are not signed in'
      buttonText='Sign In'
      redUrl='/login'
      image={<IllAccount />}
    />
  )
}

export default memo(EmptyPageAccount)
