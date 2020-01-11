import React, { memo } from 'react'

import { defaultProps, propTypes } from './linear.propTypes'
import { Wrapper } from './linear.styles'

const Linear = ({ color }) => (
  <Wrapper color={color}>
    <progress className='pure-material-progress-linear' />
  </Wrapper>
)

Linear.defaultProps = defaultProps
Linear.propTypes = propTypes

export default memo(Linear)
