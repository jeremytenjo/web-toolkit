import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'

const Switch = ({ Wrapper }) => {
  return (
    <Wrapper>
      {/* Checkbox  */}
      <input type='checkbox' name='c1' id='c1' />
      <label htmlFor='c1'>Checkbox</label>

      {/* Radio */}
      <input type='radio' name='r1' id='r1' />
      <label htmlFor='r1'>Radio</label>

      {/* Switch */}
      <input type='checkbox' className='switch' name='s1' id='s1' />
      <label htmlFor='s1'>Switch</label>
    </Wrapper>
  )
}

Switch.defaultProps = defaultProps
Switch.propTypes = propTypes

export default memo(Switch)
