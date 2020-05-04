import React, { useEffect, useRef } from 'react'

import useAnimation from '../animations/wap'
import Box from '../../dataDisplay/box'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Overlay = ({
  show,
  onClick,
  disableScrollOnShow,
  dataCy,
  appendToBody,
  wrapperStyles,
}) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (appendToBody) {
      document.querySelector('body').append(overlayRef.current)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return () => {
      window.removeEventListener('keydown', handleKeyInput, true)
    }
  }, [])

  useEffect(() => {
    if (disableScrollOnShow && show !== null) handleBodyScroll(show)
  }, [show])

  const handleBodyScroll = (show) => {
    const overflow = show ? 'hidden' : 'auto'
    document.body.style.overflow = overflow
  }

  const handleKeyInput = ({ key }) => key === 'Escape' && onClick()

  useAnimation({
    name: 'showHide',
    show,
    el: overlayRef,
  })

  return (
    <Box
      name='overlay'
      ref={overlayRef}
      onClick={onClick}
      data-cy={dataCy}
      styles={{ ...styles.wrapper, ...wrapperStyles }}
    />
  )
}

Overlay.defaultProps = defaultProps
Overlay.propTypes = propTypes

export default Overlay
