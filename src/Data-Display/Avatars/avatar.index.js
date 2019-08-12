import React, { lazy, Suspense, Fragment } from 'react'

import Image from '../../Media/Image/Ui/React/image.index'
import Typography from '../Typography/Ui/React/typography.index'

import { defaultProps, propTypes } from './avatar.propTypes'
import { Wrapper } from './avatar.styles'

const FileInput = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../Media/Files/Ui/React/fileInput.index'
  ),
)

const Avatar = ({
  color,
  name,
  src,
  onClick,
  size,
  radius,
  inputProps,
  letterColor,
  borderColor,
  transparentBorder,
}) => {
  const border = {
    border: `2px solid ${
      borderColor
        ? `var(--color-${borderColor})`
        : transparentBorder
        ? 'transparent'
        : null
    } `,
  }
  let initials = name.split(' ')

  initials =
    initials.length > 1
      ? initials[0].substring(0, 1) + initials[1].substring(0, 1)
      : initials[0].substring(0, 1)

  const WrappingComp = inputProps ? FileInput : Fragment

  return (
    <Suspense fallback={null}>
      <WrappingComp {...inputProps}>
        <Wrapper
          color={color}
          src={src}
          radius={radius}
          letterColor={letterColor}
          size={size}
          style={border}
        >
          {src ? (
            <Image
              src={src}
              onClick={onClick}
              size={size}
              borderRadius={radius}
            />
          ) : (
            <Typography text={initials} color={letterColor} />
          )}
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

Avatar.defaultProps = defaultProps
Avatar.propTypes = propTypes

export default Avatar
