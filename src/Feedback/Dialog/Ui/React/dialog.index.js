import React, { memo, useRef } from 'react'

import Button from '../../../../Input/Button/Ui/React/Styles/1'
import Typography from '../../../../Data-Display/Typography/Ui/React/typography.index'

import { defaultProps, propTypes } from './dialog.propTypes'

const Dialog = ({
  Wrapper,
  ConfirmationCon,
  title,
  message,
  fullscreen,
  confirmationCancelText,
  confirmationAcceptText,
  onCancel,
  onAccept,
}) => {
  const dialogRef = useRef(null)

  return (
    <Wrapper ref={dialogRef} fullscreen={fullscreen}>
      <Typography variant='h5' text={title} textAlign='left' color='white' />
      <Typography variant='body1' text={message} textAlign='left' color='white' />

      <ConfirmationCon>
        <Button outlined text={confirmationCancelText} onClick={onCancel} />
        <Button text={confirmationAcceptText} onClick={onAccept} />
      </ConfirmationCon>
    </Wrapper>
  )
}

Dialog.defaultProps = defaultProps
Dialog.propTypes = propTypes

export default memo(Dialog)
