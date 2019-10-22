---
to: src/<%= category %>/<%= name %>/Ui/React/Styles/example/example.index.js
---
import React, { memo } from 'react'

import { defaultProps, propTypes } from './<%= h.lowercaseFirstLetter(name) %>.propTypes'
import { Wrapper, Other } from './<%= h.lowercaseFirstLetter(name) %>.styles'

const Example = () => {
  return (
    <Wrapper>
      <Other>text</Other>
    </Wrapper>
  )
}

Example.defaultProps = defaultProps
Example.propTypes = propTypes

export default memo(Example)
