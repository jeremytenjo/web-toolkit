import React from 'react'

import Dialog from '../../dialog.index'

import { Wrapper, ConfirmationCon } from './dialog.style1.styles'

export default (props) => (
  <>
    <Dialog Wrapper={Wrapper} ConfirmationCon={ConfirmationCon} {...props} />
  </>
)
