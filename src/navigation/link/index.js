import React, { memo } from 'react'

import { defaultProps, propTypes } from './propTypes'
import A from './styles'

const Name = ({ children, newTab, url }) => {
  const props = {
    target: newTab ? '_blank' : '',
    rel: newTab ? 'noopener noreferrer' : '',
    href: url,
  }

  return <A {...props}>{children}</A>
}

Name.defaultProps = defaultProps
Name.propTypes = propTypes

export default memo(Name)
