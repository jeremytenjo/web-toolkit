import React, { useEffect, useRef } from 'react'

import Animation from '../animations/Web-Animations-API'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper } from './styles'

const Overlay = ({
  show,
  onClick,
  backgroundcolor,
  noAnimation,
  disableScrollOnShow,
  dataCy,
  appendToBody,
  ...restStyles
}) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (appendToBody) {
      document.querySelector('body').append(overlayRef.current)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return () => window.removeEventListener('keydown', handleKeyInput)
  }, [])

  useEffect(() => {
    if (disableScrollOnShow && show) handleBodyScroll(show)
  }, [show])

  const handleBodyScroll = (show) => {
    const overflow = show ? 'hidden' : 'auto'
    document.body.style.overflow = overflow
  }

  const handleKeyInput = ({ key }) => key === 'Escape' && onClick()

  return (
    <>
      <Animation name='showHide' show={show} el={overlayRef} />
      <Wrapper
        ref={overlayRef}
        onClick={onClick}
        backgroundcolor={backgroundcolor}
        noAnimation={noAnimation}
        data-cy={dataCy}
        {...restStyles}
      />
    </>
  )
}

Overlay.defaultProps = defaultProps
Overlay.propTypes = propTypes

export default Overlay
