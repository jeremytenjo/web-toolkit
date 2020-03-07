import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'
import A from './styles'

const Name = ({ children, newTab, url, ...other }) => {
  const props = {
    target: newTab ? '_blank' : '',
    rel: newTab ? 'noopener noreferrer' : '',
    href: url,
    ...other,
  }

  return <A {...props}>{children}</A>
}

Name.defaultProps = defaultProps
Name.propTypes = propTypes

export default memo(Name)
