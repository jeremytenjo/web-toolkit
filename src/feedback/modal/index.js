import React, { memo, useRef } from 'react'

import Overlay from '../../miscUtils/overlay'
import Animation from '../../miscUtils/animations/Web-Animations-API'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper } from './styles'

const Modal = ({
  show,
  type,
  children,
  onClose,
  animationStyle,
  animationsStyles,
  style,
  overlayStyles,
}) => {
  const modalRef = useRef(null)

  return (
    <>
      <Animation
        name={animationStyle}
        show={show}
        el={modalRef}
        style={animationsStyles}
      />
      <Wrapper ref={modalRef} type={type} style={style}>
        {children}
      </Wrapper>

      <Overlay show={show} onClick={onClose} zIndex={1} style={overlayStyles} />
    </>
  )
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes

export default memo(Modal)
