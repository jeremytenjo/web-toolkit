import React, { memo, lazy, Suspense, useRef, useEffect, Fragment } from 'react'

import Typography from '../../../../../Data-Display/Typography/Ui/React/typography.index'
import animation from '../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

const ButtonIcon = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../../Data-Display/Icon/Ui/React/icon.index'
  ),
)
const Dots = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../../Feedback/Progress/Ui/React/Dots/dots.index'
  ),
)

const FileInput = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../../Media/Files/Ui/React/fileInput.index'
  ),
)

import { defaultProps, propTypes } from './button.base.propTypes'

const Button = ({
  Wrapper,
  StyledButton,
  LoadingCon,
  type,
  color,
  text,
  onClick,
  disabled,
  active,
  outlined,
  style,
  iconName,
  dataCy,
  loading,
  inputProps,
}) => {
  const spinnerRef = useRef(null)

  const config = {
    fill: 'forwards',
    duration: 100,
    direction: 'normal',
    easing: 'ease-out',
  }

  useEffect(() => {
    if (loading !== null)
      animation({
        name: 'showHide',
        el: spinnerRef.current,
        config,
        show: loading,
      })
  }, [loading])

  const textColor = disabled
    ? 'disabled-darker'
    : outlined
    ? 'white'
    : type === 'FAB'
    ? 'white'
    : `${color}-darker`

  const WrappingComp = inputProps ? FileInput : Fragment

  return (
    <Suspense fallback={null}>
      <WrappingComp {...inputProps}>
        <Wrapper>
          <StyledButton
            type={type}
            color={color}
            onClick={disabled ? () => null : onClick}
            disabled={disabled}
            active={active}
            outlined={outlined}
            icon={iconName}
            style={style}
            data-cy={dataCy}
            loading={loading}
          >
            <Typography text={text} variant='button' color={textColor} />
            {iconName && (
              <Suspense fallback={null}>
                <ButtonIcon name={iconName} noBackground />
              </Suspense>
            )}
          </StyledButton>
          <Suspense fallback={null}>
            <div ref={spinnerRef} style={{ display: 'none' }}>
              <LoadingCon color={color}>
                <Dots />
              </LoadingCon>
            </div>
          </Suspense>
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

export default memo(Button)
