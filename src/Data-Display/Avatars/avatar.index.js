import React from 'react'

import { defaultProps, propTypes } from './avatar.propTypes'
import { Wrapper, Image } from './avatar.styles'

const Avatar = ({
  type,
  borderColor,
  name,
  photoUrl,
  onClick,
  size,
  radius,
}) => {
  let initials = name.split(' ')

  initials =
    initials.length > 1
      ? initials[0].substring(0, 1) + initials[1].substring(0, 1)
      : initials[0].substring(0, 1)

  return (
    <Wrapper>
      <Image
        radius={radius}
        photoUrl={photoUrl}
        type={type}
        borderColor={borderColor}
        onClick={onClick}
        size={size}
      >
        {!photoUrl && <span>{initials}</span>}
      </Image>
    </Wrapper>
  )
}

Avatar.defaultProps = defaultProps
Avatar.propTypes = propTypes

export default Avatar
