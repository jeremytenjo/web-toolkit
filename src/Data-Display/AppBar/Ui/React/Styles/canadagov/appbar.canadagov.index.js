import React, { memo } from 'react'

import { defaultProps, propTypes } from './appbar.canadagov.propTypes'
import { Wrapper, Other } from './appbar.canadagov.styles'

const AppbarCangov = () => {
  return (
    <Wrapper>
      <Other>text</Other>
    </Wrapper>
  )
}

AppbarCangov.defaultProps = defaultProps
AppbarCangov.propTypes = propTypes

export default memo(AppbarCangov)
