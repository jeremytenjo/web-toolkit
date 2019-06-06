import React, { memo, useEffect, useRef } from 'react'

import Overlay from '../../../../Misc-Utils/Overlay/overlay.index'
import Button from '../../../../Input/Button/Ui/React/button.index'
import LinearProgress from '../../../Progress/Ui/React/Linear/linear.index'
import Typography from '../../../../Data-Display/Typography/Ui/React/typography.index'

import { defaultProps, propTypes } from './modal.propTypes'
import { Wrapper, ConfirmationCon, ChildrenCon } from './modal.styles'
import animations from './modal.animations'

const Modal = ({
  fullscreen,
  confirmation,
  confirmationCancelText,
  confirmationAcceptText,
  onConfirmationCancel,
  onConfirmationAccept,
  children,
  title,
  onClose,
  show,
  animationStyle,
  loading,
}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (show !== null) animations(modalRef.current, animationStyle, show)
  }, [show])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return window.removeEventListener('keydown', handleKeyInput)
  }, [])

  const handleKeyInput = ({ key }) => {
    if (key === 'Escape') onClose()
  }

  const close = () => {
    onClose()
    onConfirmationCancel()
  }

  return (
    <>
      <Wrapper ref={modalRef} fullscreen={fullscreen} loading={loading}>
        {title && (
          <Typography
            variant='h6'
            text={title}
            textAlign={confirmation ? 'left' : 'center'}
            color='white'
          />
        )}

        {children && (
          <ChildrenCon
            confirmation={confirmation}
            childs={!!children}
            title={title}
            loading={loading}
          >
            {children}

            {loading && <LinearProgress />}
          </ChildrenCon>
        )}

        {confirmation && (
          <ConfirmationCon>
            <Button outlined text={confirmationCancelText} onClick={close} />
            <Button
              text={confirmationAcceptText}
              onClick={onConfirmationAccept}
            />
          </ConfirmationCon>
        )}
      </Wrapper>

      <Overlay show={show} onClick={onClose} zIndex={1} />
    </>
  )
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes

export default memo(Modal)
