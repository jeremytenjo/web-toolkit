import React, { memo } from 'react'

import { defaultProps, propTypes } from './calendar.propTypes'
import { Wrapper, Other } from './calendar.styles'

const Calendar = () => {
  return (
    <Wrapper>
      <Other>text</Other>
    </Wrapper>
  )
}

Calendar.defaultProps = defaultProps
Calendar.propTypes = propTypes

export default memo(Calendar)
