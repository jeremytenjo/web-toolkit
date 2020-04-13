import React, { memo, useRef, useEffect } from 'react'

import Overlay from '../../utils/overlay'
import useAnimation from '../../utils/animations/wap'

import { defaultProps, propTypes } from './propTypes'
import { ModalWrapper } from './styles'

const Modal = ({
  show,
  children,
  onClose,
  animationStyle,
  animationsStyles,
  style,
  overlayStyles,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return () => {
      window.removeEventListener('keydown', handleKeyInput, true)
    }
  }, [])
  const handleKeyInput = ({ key }) => key === 'Escape' && onClose()

  const modalRef = useRef(null)

  useAnimation({
    name: animationStyle,
    show: show,
    el: modalRef,
    style: animationsStyles,
  })

  return (
    <>
      <ModalWrapper ref={modalRef} style={style}>
        {children}
      </ModalWrapper>

      <Overlay show={show} onClick={onClose} wrapperStyles={overlayStyles} />
    </>
  )
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes

export default memo(Modal)
