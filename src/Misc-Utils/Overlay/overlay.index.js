import React, { useEffect, useRef } from 'react'

import animation from '../Animations/Web-Animations-API/animation.index'

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

  useEffect(() => {
    if (disableScrollOnShow) show ? disableScroll() : enableScroll()
  }, [show])

  const disableScroll = () => (document.body.style.overflow = 'hidden')
  const enableScroll = () => (document.body.style.overflow = 'auto')

  const handleKeyInput = ({ key }) => key === 'Escape' && onClick()

  return (
    <Wrapper
      ref={overlayRef}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      noAnimation={noAnimation}
      zIndex={zIndex}
      data-cy={dataCy}
    />
  )
}

Overlay.defaultProps = defaultProps
Overlay.propTypes = propTypes

export default Overlay
