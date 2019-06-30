import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const ScrollToTop = ({ element }) => {
  useEffect(() => {
    element().scrollTop = 0
  }, [])

  return null
}

ScrollToTop.propTypes = {
  element: PropTypes.func.isRequired,
}

export default ScrollToTop
