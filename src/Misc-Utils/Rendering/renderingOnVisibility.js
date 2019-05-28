import React, { memo } from 'react'
import LazyLoad from 'react-lazyload'

export default memo(({ children, ...props }) => {
  const isSupported = window.IntersectionObserver || false

  return isSupported ? (
    <LazyLoad {...props}>{children}</LazyLoad>
  ) : (
    <>{children}</>
  )
})
