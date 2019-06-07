import React, { memo, useRef } from 'react'

import Button from '../../../../Input/Button/Ui/React/button.index'
import Typography from '../../../../Data-Display/Typography/Ui/React/typography.index'

import { defaultProps, propTypes } from './dialog.propTypes'
import { Wrapper, ConfirmationCon } from './dialog.styles'

const Dialog = ({
  title,
  message,
  fullscreen,
  confirmationCancelText,
  confirmationAcceptText,
  onCancel,
  onAccept,
  onClose,
}) => {
  const dialogRef = useRef(null)

  const close = () => {
    onClose()
    onCancel()
  }

  return (
    <Wrapper ref={dialogRef} fullscreen={fullscreen}>
      <Typography variant='h5' text={title} textAlign='left' color='white' />
      <Typography
        variant='body1'
        text={message}
        textAlign='left'
        color='white'
      />

      <ConfirmationCon>
        <Button outlined text={confirmationCancelText} onClick={close} />
        <Button text={confirmationAcceptText} onClick={onAccept} />
      </ConfirmationCon>
    </Wrapper>
  )
}

Dialog.defaultProps = defaultProps
Dialog.propTypes = propTypes

export default memo(Dialog)
