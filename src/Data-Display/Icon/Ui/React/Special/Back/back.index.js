import React, { memo } from 'react'

import Icon from '../../Base/icon.index'

const IconBack = ({ onGoBack = () => null, to = null, icon = 'arrow/material', router = { push: () => null } }) => {
  const { push } = router

  // Functions
  const goBack = () => {
    to ? push(to) : goBack()
    onGoBack()
  }

  // Template
  return <Icon name={icon} onClick={goBack} />
}

export default memo(IconBack)
