import React, { useState, Fragment } from 'react'

import ShareMockData from '../share.mockData'
import ShareInit from '../../Functions/share.init'

const ShareExample = () => {
  // State
  const [resMsg, setresMsg] = useState('')

  // Functions
  const useShareFun = async () => {
    const { errorMessage, success } = await ShareInit(ShareMockData)

    if (success) setresMsg('Share Successful')
    if (errorMessage) setresMsg(errorMessage)
  }

  // Template
  return (
    <Fragment>
      <button onClick={useShareFun}>Share this</button>
      {resMsg}
    </Fragment>
  )
}

export default ShareExample
