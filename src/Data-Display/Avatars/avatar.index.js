import React, { lazy, Suspense, Fragment } from 'react'

import Image from '../../Media/Image/Ui/React/image.index'

import { defaultProps, propTypes } from './avatar.propTypes'
import { Wrapper } from './avatar.styles'

const FileInput = lazy(() =>
  import(
    /* webpackChunkName: 'ButtonIcon' */ '../../Media/Files/Ui/React/fileInput.index'
  ),
)

const Avatar = ({
  type,
  borderColor,
  name,
  photoUrl,
  onClick,
  size,
  radius,
  inputProps,
}) => {
  let initials = name.split(' ')

  initials =
    initials.length > 1
      ? initials[0].substring(0, 1) + initials[1].substring(0, 1)
      : initials[0].substring(0, 1)

  const WrappingComp = inputProps ? FileInput : Fragment

  return (
    <Suspense fallback={null}>
      <WrappingComp {...inputProps}>
        <Wrapper>
          <Image
            radius={radius}
            src={photoUrl}
            type={type}
            borderColor={borderColor}
            onClick={onClick}
            size={size}
          >
            {!photoUrl && <span>{initials}</span>}
          </Image>
        </Wrapper>
      </WrappingComp>
    </Suspense>
  )
}

Avatar.defaultProps = defaultProps
Avatar.propTypes = propTypes

export default Avatar
