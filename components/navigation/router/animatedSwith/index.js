import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'

const AnimatedComponent = () => {
  return <>adf</>
}

AnimatedComponent.defaultProps = defaultProps
AnimatedComponent.propTypes = propTypes

export default memo(AnimatedComponent)
