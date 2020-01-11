import React, { useEffect, memo } from 'react'

import Overlay from '../../miscUtils/overlay/index'

import { defaultProps, propTypes } from './fullscreen.propTypes'
import { Wrapper } from './fullscreen.styles'

const Fullscreen = ({ children, maxWidth, onClose, backgroundcolor, noAnimation }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return window.removeEventListener('keydown', handleKeyInput)
  }, [])

  const handleKeyInput = ({ key }) => {
    if (key === 'Escape') onClose()
  }

  return (
    <Wrapper maxWidth={maxWidth}>
      {children}
      <Overlay
        noAnimation={noAnimation}
        onClick={onClose}
        backgroundcolor={backgroundcolor}
      />
    </Wrapper>
  )
}

Fullscreen.defaultProps = defaultProps
Fullscreen.propTypes = propTypes

export default memo(Fullscreen)
