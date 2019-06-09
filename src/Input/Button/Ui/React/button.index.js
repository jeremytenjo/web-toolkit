import React, { memo, lazy, Suspense } from 'react'

import Typography from '../../../../Data-Display/Typography/Ui/React/typography.index'

const ButtonIcon = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../Data-Display/Icon/Ui/React/icon.index'
  ),
)

import { defaultProps, propTypes } from './button.propTypes'

const Button = ({
  Wrapper,
  type,
  color,
  text,
  onClick,
  disabled,
  active,
  outlined,
  style,
  iconName,
}) => {
  const textColor = disabled
    ? 'disabled-darker'
    : outlined
    ? 'white'
    : type === 'FAB'
    ? 'white'
    : `${color}-darker`

  return (
    <Wrapper
      type={type}
      color={color}
      onClick={disabled ? () => null : onClick}
      disabled={disabled}
      active={active}
      outlined={outlined}
      icon={iconName}
      style={style}
    >
      <Typography text={text} variant='button' color={textColor} />
      {iconName && (
        <Suspense fallback={null}>
          <ButtonIcon name={iconName} noBackground />
        </Suspense>
      )}
    </Wrapper>
  )
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

export default memo(Button)
