import React from 'react'

import useMatchMedia from '../'

export default () => {
  const isMobile = useMatchMedia('max-width: 768px')
  const text = isMobile ? 'mobile' : 'desktop'

  return <div>Viewport is {text}</div>
}
