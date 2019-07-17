import React, { memo } from 'react'

import Icon from '../../icon.index'

const IconBack = ({
  onGoBack = () => null,
  to = null,
  icon = 'arrow/material',
  router = window.historyRouter || {},
}) => {
  // Functions
  const goBack = () => {
    to ? router.push(to) : router.goBack()
    onGoBack()
  }

  // Template
  return <Icon name={icon} onClick={goBack} />
}

export default memo(IconBack)
