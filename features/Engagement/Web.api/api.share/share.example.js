// Vendors
import React, { useState, Fragment } from 'react'
//
import { Share, ShareMockData } from './share.index'

const ShareExample = () => {
  // State
  const [resMsg, setresMsg] = useState('')

  // Functions
  const useShareFun = async () => {
    const { errorMessage, success } = await Share(ShareMockData)

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
