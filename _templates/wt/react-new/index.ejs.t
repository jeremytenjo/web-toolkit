---
to: src/<%= category %>/Ui/React/Styles/<%= h.lowercase(name) %>/<%= h.lowercase(name) %>.index.js
---
import React, { memo } from 'react'

import { defaultProps, propTypes } from './<%= h.lowercase(name) %>.propTypes'
import { Wrapper, Other } from './<%= h.lowercase(name) %>.styles'

const <%= name %> = () => {
  return (
    <Wrapper>
      <Other>text</Other>
    </Wrapper>
  )
}

<%= name %>.defaultProps = defaultProps
<%= name %>.propTypes = propTypes

export default memo(<%= name %>)
