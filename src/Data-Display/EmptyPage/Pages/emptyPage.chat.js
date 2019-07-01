import React, { memo } from 'react'

import IllChat from '../../Illustration/Ui/React/chat/style1'
import EmptyPage from '../Component/emptyPage.index'
const EmptyPageChat = () => {
  return (
    <EmptyPage
      title='No active chats'
      buttonText='Find Stylists'
      image={<IllChat />}
    />
  )
}

export default memo(EmptyPageChat)
