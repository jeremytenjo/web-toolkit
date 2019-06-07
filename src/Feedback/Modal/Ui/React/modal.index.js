import React, { memo, useRef, useEffect } from 'react'

import Overlay from '../../../../Misc-Utils/Overlay/overlay.index'
import animation from '../../../../Misc-Utils/Animations/animation.index'

import { defaultProps, propTypes } from './modal.propTypes'
import { Wrapper } from './modal.styles'

const Modal = ({ show, type, children, onClose, animationStyle }) => {
  const modalRef = useRef(null)

  const config = {
    fill: 'forwards',
    duration: 200,
    direction: 'normal',
    easing: 'ease-out',
  }

  useEffect(() => {
    if (show !== null)
      animation({
        name: animationStyle,
        el: modalRef.current,
        config,
        show,
      })
  }, [show])

  return (
    <>
      <Wrapper ref={modalRef} type={type}>
        {children}
      </Wrapper>

      <Overlay show={show} onClick={onClose} zIndex={1} />
    </>
  )
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes

export default memo(Modal)
