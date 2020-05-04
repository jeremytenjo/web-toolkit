import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'

const Switch = ({ Wrapper }) => {
  return (
    <Wrapper>
      <input type='checkbox' name='c1' id='c1' />
      <label htmlFor='c1'>Checkbox</label>
    </Wrapper>
  )
}

Switch.defaultProps = defaultProps
Switch.propTypes = propTypes

export default memo(Switch)
