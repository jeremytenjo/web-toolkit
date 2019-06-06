import React, { useEffect, useRef } from 'react'

import { defaultProps, propTypes } from './overlay.propTypes'
import { Wrapper } from './overlay.styles'
import animation from './../Animations/animation.showHide'

const Overlay = ({ show, onClick, backgroundcolor, noAnimation, zIndex }) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (show !== null && !noAnimation) animation(overlayRef.current, !!show)
  }, [show])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return window.removeEventListener('keydown', handleKeyInput)
  }, [])

  const handleKeyInput = ({ key }) => {
    if (key === 'Escape') onClick()
  }

  return (
    <Wrapper
      ref={overlayRef}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      noAnimation={noAnimation}
      zIndex={zIndex}
    />
  )
}

Overlay.defaultProps = defaultProps
Overlay.propTypes = propTypes

export default Overlay
