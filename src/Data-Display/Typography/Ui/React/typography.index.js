import React, { memo, forwardRef } from 'react'

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

const Typography = (
  {
    variant = 'body1',
    color = null,
    onClick = () => null,
    text = '',
    ...otherStyles
  },
  ref,
) => {
  const style = {
    color: color ? `var(--color-${color})` : null,
    ...otherStyles,
  }
  const Tag = defineTag(variant)

  return (
    <Tag style={style} variant={variant} ref={ref} onClick={onClick}>
      {text}
    </Tag>
  )
}

export default memo(forwardRef(Typography))
