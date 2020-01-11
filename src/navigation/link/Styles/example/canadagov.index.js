import React, { memo } from 'react'

import Typography from '../../../../dataDisplay/typography/index'
import Icon from '../../../../dataDisplay/icon'
import Box from '../../../../dataDisplay/box'

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
