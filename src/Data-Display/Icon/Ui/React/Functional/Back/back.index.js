import React, { memo } from 'react'

import Icon from '../../icon.index'

const IconBack = ({
  onGoBack = () => null,
  to = null,
  icon = 'arrow/material',
}) => {
  // Local Vars
  const historyRouter = window.historyRouter

  // Functions
  const goBack = () => {
    to ? historyRouter.push(to) : historyRouter.goBack()
    onGoBack()
  }

  // Template
  return <Icon name={icon} onClick={goBack} />
}

export default memo(IconBack)
