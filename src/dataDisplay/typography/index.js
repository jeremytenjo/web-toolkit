import React, { memo } from 'react'
import styled from 'styled-components'

import system from '../../theme/system/system.index'

import { defaultProps, propTypes } from './propTypes'

const defineTag = (tag, variant) => {
  switch (variant) {
    case 'body1':
    case 'body2':
      return 'p'
    default:
      return tag
  }
}

const El = styled.span`
  ${system}
`

const Typography = ({ tag, variant, styles, onClick, text }) => {
  const className = `typography-${variant}`
  const Tag = defineTag(tag, variant)

  return (
    <El as={Tag} styles={styles} className={className} onClick={onClick}>
      {text}
    </El>
  )
}

Typography.defaultProps = defaultProps
Typography.propTypes = propTypes

export default memo(Typography)
