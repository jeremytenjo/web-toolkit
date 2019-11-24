import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

import Icon from '../../Base/icon.index'

const IconBack = ({
  onGoBack = () => null,
  to = null,
  icon = 'arrow/material',
}) => {
  const { push } = useHistory()

  // Functions
  const goBack = () => {
    to ? push(to) : goBack()
    onGoBack()
  }

  // Template
  return <Icon name={icon} onClick={goBack} />
}

export default memo(IconBack)
