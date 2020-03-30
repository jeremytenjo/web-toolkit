import React, { memo, useRef, useEffect } from 'react'

import Overlay from '../../miscUtils/overlay'
import Animation from '../../miscUtils/animations/Web-Animations-API'

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
    return () => window.removeEventListener('keydown', handleKeyInput)
  }, [])
  const handleKeyInput = ({ key }) => key === 'Escape' && onClose()

  const modalRef = useRef(null)

  return (
    <>
      <Animation
        name={animationStyle}
        show={show}
        el={modalRef}
        style={animationsStyles}
      />
      <ModalWrapper ref={modalRef} style={style}>
        {children}
      </ModalWrapper>

      <Overlay show={show} onClick={onClose} zIndex={1} style={overlayStyles} />
    </>
  )
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes

export default memo(Modal)
