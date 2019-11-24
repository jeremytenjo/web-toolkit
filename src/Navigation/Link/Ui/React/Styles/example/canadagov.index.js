import React, { memo } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import Typography from '../../../../../../Data-Display/Typography/Ui/React/typography.index'
import Icon from '../../../../../../Data-Display/Icon/Ui/React/Base/icon.index'

import { defaultProps, propTypes } from './canadagov.propTypes'
import { Wrapper } from './canadagov.styles'

const Example = ({
  link,
  text,
  icon,
  onClick,
  foregroundColor,
  backgroundColor,
  wrapperProps,
}) => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const active = pathname === link

  const handleClick = () => {
    push(link)
    onClick()
  }

  return (
    <Wrapper
      active={active}
      foregroundColor={foregroundColor}
      backgroundColor={backgroundColor}
      onClick={handleClick}
      wrapperProps={wrapperProps}
    >
      <Icon name={icon} plain />
      <Typography text={text} color={foregroundColor} />
    </Wrapper>
  )
}

Example.defaultProps = defaultProps
Example.propTypes = propTypes

export default memo(Example)
