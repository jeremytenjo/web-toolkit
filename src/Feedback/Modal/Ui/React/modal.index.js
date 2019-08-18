import React, { memo, useRef } from 'react'

import Overlay from '../../../../Misc-Utils/Overlay/overlay.index'
import Animation from '../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

import { defaultProps, propTypes } from './modal.propTypes'
import { Wrapper } from './modal.styles'

const Modal = ({ show, type, children, onClose, animationStyle }) => {
  const modalRef = useRef(null)

  return (
    <>
      <Animation name={animationStyle} show={show} el={modalRef}>
        <Wrapper ref={modalRef} type={type}>
          {children}
        </Wrapper>
      </Animation>

      <Overlay show={show} onClick={onClose} zIndex={1} />
    </>
  )
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes

export default memo(Modal)
