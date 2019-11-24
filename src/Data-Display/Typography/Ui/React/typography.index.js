import React, { memo } from 'react'

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

const Typography = ({ tag, variant, color, onClick, text, ...otherStyles }) => {
  const style = {
    color: `var(--color-${color})`,
    ...otherStyles,
  }
  const className = `typography-${variant}`
  const Tag = defineTag(tag, variant)

  return (
    <Tag
      style={style}
      className={className}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Tag>
  )
}

Typography.defaultProps = defaultProps
Typography.propTypes = propTypes

export default memo(Typography)
