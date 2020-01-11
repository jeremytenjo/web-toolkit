import React, { memo } from 'react'

import Typography from '../../../../../../Data-Display/Typography/Ui/React/typography.index'
import Icon from '../../../../../../Data-Display/Icon/Ui/React/Base/icon.index'
import Box from '../../../../../../Data-Display/Box/Ui/React'

import { defaultProps, propTypes } from './canadagov.propTypes'
import { wrapperSyles } from './canadagov.styles'

const Example = ({
  link,
  text,
  icon,
  onClick,
  foregroundColor,
  backgroundColor,
  activeColor,
  router,
}) => {
  const { push } = router
  const { pathname } = window.location
  const isActive = pathname === link

  const handleClick = () => {
    push(link)
    onClick()
  }

  return (
    <Box
      styles={wrapperSyles({ isActive, activeColor, backgroundColor, foregroundColor })}
      onClick={handleClick}
    >
      <Icon name={icon} plain color={foregroundColor} />
      <Typography text={text} styles={{ color: foregroundColor }} />
    </Box>
  )
}

Example.defaultProps = defaultProps
Example.propTypes = propTypes

export default memo(Example)
