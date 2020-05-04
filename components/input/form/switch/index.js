import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'

const Switch = ({ Wrapper }) => {
  return (
    <Wrapper>
      <input type='checkbox' className='switch' name='s1' id='s1' />
      <label htmlFor='s1'>Switch</label>
    </Wrapper>
  )
}

Switch.defaultProps = defaultProps
Switch.propTypes = propTypes

export default memo(Switch)
