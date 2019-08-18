import React, { useEffect, useRef } from 'react'

import Animation from '../Animations/Web-Animations-API/animation.index'

import { defaultProps, propTypes } from './overlay.propTypes'
import { Wrapper } from './overlay.styles'

const Overlay = ({
  show,
  onClick,
  backgroundcolor,
  noAnimation,
  zIndex,
  disableScrollOnShow,
  dataCy,
}) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return window.removeEventListener('keydown', handleKeyInput)
  }, [])

  useEffect(() => {
    if (disableScrollOnShow) show ? disableScroll() : enableScroll()
  }, [show])

  const disableScroll = () => (document.body.style.overflow = 'hidden')
  const enableScroll = () => (document.body.style.overflow = 'auto')

  const handleKeyInput = ({ key }) => key === 'Escape' && onClick()

  return (
    <>
      <Animation name='showHide' show={show} el={overlayRef} />
      <Wrapper
        ref={overlayRef}
        onClick={onClick}
        backgroundcolor={backgroundcolor}
        noAnimation={noAnimation}
        zIndex={zIndex}
        data-cy={dataCy}
      />
    </>
  )
}

Overlay.defaultProps = defaultProps
Overlay.propTypes = propTypes

export default Overlay
