import React, { memo, lazy, Suspense, useRef, Fragment, useEffect, useState } from 'react'

import Typography from '../../../../../Data-Display/Typography/Ui/React/typography.index'
import Animation from '../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

import { defaultProps, propTypes } from './button.base.propTypes'

const ButtonIcon = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../../../../Data-Display/Icon/Ui/React/Base/icon.index'
  ),
)

const FileInput = lazy(() =>
  import(
    /* webpackChunkName: 'FileiNput' */ '../../../../../Media/Files/Ui/React/fileInput.index'
  ),
)

const ButtonBase = ({
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
  typographyVariant,
  loadingComp,
}) => {
  const [ProgressComponent, setProgressComponent] = useState(null)
  const spinnerRef = useRef(null)
  const textColor = disabled
    ? 'disabledDarker'
    : outlined
    ? 'white'
    : type === 'FAB'
    ? 'white'
    : `${color}Darker`
  const isLoading = typeof loading !== 'string' ? loading : false
  const WrappingComp = inputProps ? FileInput : Fragment

  useEffect(() => {
    if (typeof loading !== 'string') {
      importLoadingComoponent()
    }
  }, [])

  const importLoadingComoponent = async () => {
    let Comp = await import(`../../../../../Feedback/Progress/Ui/React/${loadingComp}`)
    Comp = Comp.default
    setProgressComponent(Comp)
  }

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
            isLoading={isLoading}
          >
            <Typography text={text} variant={typographyVariant} color={textColor} />
            {iconName && (
              <Suspense fallback={null}>
                <ButtonIcon name={iconName} noBackground />
              </Suspense>
            )}
          </StyledButton>
          <Suspense fallback={null}>
            <Animation name='showHide' show={isLoading} el={spinnerRef} />

            <div ref={spinnerRef} style={{ display: 'none' }}>
              <LoadingCon color={color}>
                {ProgressComponent && <ProgressComponent />}
              </LoadingCon>
            </div>
          </Suspense>
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

ButtonBase.defaultProps = defaultProps
ButtonBase.propTypes = propTypes

export default memo(ButtonBase)
