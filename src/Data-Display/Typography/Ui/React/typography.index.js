import React, { memo } from 'react'
import styled from 'styled-components'

import system from '../../../../Theme/System/React/system.index'

import { defaultProps, propTypes } from './typography.propTypes'

const defineTag = (tag, variant) => {
  switch (variant) {
    case 'body1':
    case 'body2':
      return 'p'
    default:
      return tag
  }
}

const Typography = ({ tag, variant, styles, onClick, text }) => {
  const className = `typography-${variant}`
  const Tag = defineTag(tag, variant)

  const El = styled[Tag]`
    ${system}
  `
  return (
    <El styles={{ color: 'black', ...styles }} className={className} onClick={onClick}>
      {text}
    </El>
  )
}

Typography.defaultProps = defaultProps
Typography.propTypes = propTypes

export default memo(Typography)
