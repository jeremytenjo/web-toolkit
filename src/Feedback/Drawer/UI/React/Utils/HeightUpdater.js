import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const HeightUpdater = ({ height, onHeightChange }) => {
  useEffect(() => {
    window.addEventListener('resize', onWindowResize, true)
    return window.removeEventListener('resize', onWindowResize)
  }, [])

  const onWindowResize = () => {
    const innerHeight = window.innerHeight
    if (innerHeight !== height) onHeightChange(innerHeight)
  }

  return null
}

HeightUpdater.propTypes = {
  height: PropTypes.number,
  onHeightChange: PropTypes.func,
}

export default HeightUpdater
