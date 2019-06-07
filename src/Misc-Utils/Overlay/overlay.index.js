import React, { useEffect, useRef } from 'react'

import { defaultProps, propTypes } from './overlay.propTypes'
import { Wrapper } from './overlay.styles'
import animation from './../Animations/animation.index'

const Overlay = ({ show, onClick, backgroundcolor, noAnimation, zIndex }) => {
  const overlayRef = useRef(null)

  const config = {
    fill: 'forwards',
    duration: 200,
    direction: 'normal',
    easing: 'ease-out',
  }

  useEffect(() => {
    if (show !== null && !noAnimation)
      animation({
        name: 'showHide',
        el: overlayRef.current,
        show: !!show,
        config,
      })
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
