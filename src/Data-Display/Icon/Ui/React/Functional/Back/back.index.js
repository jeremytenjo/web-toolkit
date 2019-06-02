import React, { memo } from 'react'

import Icon from '../../icon.index'

const IconBack = ({
  onGoBack = () => null,
  to = null,
  icon = 'material/back',
}) => {
  // Local Vars
  const historyRouter = window.historyRouter

  // Functions
  const goBack = () => {
    to ? historyRouter.push(to) : historyRouter.goBack()
    onGoBack()
  }

  // Template
  return <Icon name={icon} onClick={goBack} background />
}

export default memo(IconBack)
