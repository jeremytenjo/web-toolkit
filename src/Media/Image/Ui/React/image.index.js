import React, { memo } from 'react'

import OnVisibility from '../../../../Misc-Utils/Rendering/renderingOnVisibility'

import { defaultProps, propTypes } from './image.propTypes'
import { Wrapper, InnerImage, Letters } from './image.styles'

// Entity
const Image = ({
  src,
  alt,
  onClick,
  definitions,
  isLazyLoaded,
  OnVisibilityProps,
  cursor,
  size,
  width,
  height,
  round,
  borderColor,
  background,
  name,
  lettersFont,
  letterColor,
  ...props
}) => {
  // In case  the src key in not called src in props, expects {src: <propsrcname>}
  if (definitions) {
    for (var key in definitions) {
      key === 'src' && (src = props[definitions[key]])
    }
  }

  // create inirials
  let initials = name.split(' ')

  initials =
    initials.length > 1
      ? initials[0].substring(0, 1) + initials[1].substring(0, 1)
      : initials[0].substring(0, 1)

  const ImageComp = () => (
    <Wrapper
      width={width}
      height={height}
      size={size}
      round={round}
      borderColor={borderColor}
      onClick={() => onClick(props)}
      cursor={cursor}
      letterColor={letterColor}
    >
      {src && <InnerImage alt={alt} src={src} />}
      {background === 'letter' && (
        <Letters lettersFont={lettersFont} letterColor={letterColor}>
          {initials}
        </Letters>
      )}
    </Wrapper>
  )

  // Template
  return (
    <>
      {isLazyLoaded ? (
        <OnVisibility {...OnVisibilityProps}>
          <ImageComp />
        </OnVisibility>
      ) : (
        <ImageComp />
      )}
    </>
  )
}

Image.defaultProps = defaultProps
Image.propTypes = propTypes

export default memo(Image)
