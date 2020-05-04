import React, { memo } from 'react'

const Core = ({ children }) => {
  return <div>{children}</div>
}

export default memo(Core)
