import React, { memo } from 'react'

const style = {
  fontFamily: 'monospace',
  fontWeight: 'bold',
  margin: '20px 0',
  color: '#757575',
}

const Title = ({ children }) => <p style={style}>{children}</p>

export default memo(Title)
