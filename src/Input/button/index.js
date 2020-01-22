import React, { memo, lazy, Suspense, Fragment, useEffect, useState } from 'react'

import Typography from '../../dataDisplay/typography'
import Animation from '../../miscUtils/animations/Web-Animations-API'

import { defaultProps, propTypes } from './propTypes'

const ButtonIcon = lazy(() =>
  import(/* webpackChunkName: 'ButtonIcon' */ '../../dataDisplay/icon'),
)

const FileInput = lazy(() =>
  import(/* webpackChunkName: 'FileiNput' */ '../../media/files/fileInput'),
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
    let Comp = await import(`../../feedback/progress/${loadingComp}`)
    Comp = Comp.default
    setProgressComponent(Comp)
  }

  return (
    <Suspense fallback={null}>
      <WrappingComp {...inputProps}>
        <Wrapper data-name='wrapper'>
          <StyledButton
            data-name='button'
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
            <Typography
              text={text}
              variant={typographyVariant}
              styles={{ color: textColor }}
            />
            {iconName && (
              <Suspense fallback={null}>
                <ButtonIcon name={iconName} noBackground />
              </Suspense>
            )}
          </StyledButton>
          <Suspense fallback={null}>
            <Animation name='showHide' show={isLoading}>
              <LoadingCon color={color}>
                {ProgressComponent && <ProgressComponent />}
              </LoadingCon>
            </Animation>
          </Suspense>
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

ButtonBase.defaultProps = defaultProps
ButtonBase.propTypes = propTypes

export default memo(ButtonBase)