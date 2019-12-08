import React, { memo, lazy, Suspense, useRef, Fragment } from 'react'

import Typography from '../../../../../Data-Display/Typography/Ui/React/typography.index'
import Animation from '../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

const ButtonIcon = lazy(() =>
  import(/* webpackChunkName: 'ButtonIcon' */ '../../../../../Data-Display/Icon/Ui/React/Base/icon.index'),
)
const Dots = lazy(() =>
  import(/* webpackChunkName: 'LoadingDots' */ '../../../../../Feedback/Progress/Ui/React/Dots/dots.index'),
)

const FileInput = lazy(() =>
  import(/* webpackChunkName: 'FileiNput' */ '../../../../../Media/Files/Ui/React/fileInput.index'),
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
  const textColor = disabled ? 'disabledDarker' : outlined ? 'white' : type === 'FAB' ? 'white' : `${color}Darker`

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
            <Animation name='showHide' show={loading} el={spinnerRef} />

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
