import React, { memo, lazy, Suspense, Fragment, useEffect, useState } from 'react'

import { Link } from '../../navigation/router'
import Typography from '../../dataDisplay/typography'
import Animation from '../../miscUtils/animations/Web-Animations-API'

import { defaultProps, propTypes } from './propTypes'

const Icon = lazy(() => import(/* webpackChunkName: 'Icon' */ '../../dataDisplay/icon'))

const FileInput = lazy(() =>
  import(/* webpackChunkName: 'FileiNput' */ '../../media/files/fileInput'),
)

const Button = ({
  Wrapper,
  ButtonInner,
  LoadingCon,
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
  url,
  ...rest
}) => {
  const [ProgressComponent, setProgressComponent] = useState(null)
  const textColor = disabled ? 'disabledDarker' : outlined ? 'white' : `${color}Darker`
  const isLoading = typeof loading !== 'string' ? loading : false
  const WrappingComp = inputProps ? FileInput : Fragment
  const matchesUrl = url && location.pathname === url
  const Redirect = url ? Link : Fragment
  const redirectProps = url ? { to: url } : null

  useEffect(() => {
    if (typeof loading !== 'string') importLoadingComoponent()
  }, [])

  const importLoadingComoponent = async () => {
    let Comp = await import(`../../feedback/progress/${loadingComp}`)
    Comp = Comp.default
    setProgressComponent(Comp)
  }

  return (
    <Suspense fallback={null}>
      <WrappingComp {...inputProps}>
        <Wrapper>
          <Redirect {...redirectProps}>
            <button onClick={disabled ? () => null : onClick} data-cy={dataCy}>
              <ButtonInner
                color={color}
                disabled={disabled}
                active={active}
                outlined={outlined}
                icon={iconName}
                style={style}
                isLoading={isLoading}
                matchesUrl={matchesUrl}
                {...rest}
              >
                <Typography
                  text={text}
                  variant={typographyVariant}
                  styles={{ color: textColor }}
                />
                {iconName && <Icon name={iconName} noBackground />}
              </ButtonInner>
            </button>
          </Redirect>

          <Animation name='showHide' show={isLoading}>
            <LoadingCon color={color}>
              {ProgressComponent && <ProgressComponent />}
            </LoadingCon>
          </Animation>
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

export default memo(Button)
