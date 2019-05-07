import React from 'react'

import { defaultProps, propTypes } from './typography.propTypes'

const defineTag = (variant) => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant
    case 'body1':
    case 'body2':
      return 'p'
    default:
      return 'span'
  }
}

const Typography = ({ variant, color, text, ...otherStyles }) => {
  const style = {
    color: color ? `var(--color-${color})` : null,
    ...otherStyles,
  }
  const Tag = defineTag(variant)

  return (
    <Tag style={style} variant={variant}>
      {text}
    </Tag>
  )
}

Typography.defaultProps = defaultProps
Typography.propTypes = propTypes

export default Typography
