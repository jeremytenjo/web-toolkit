import React, { memo } from 'react'

import OnVisibility from '../../../../Misc-Utils/Rendering/renderingOnVisibility'

import { defaultProps, propTypes } from './image.propTypes'
import { Wrapper, Imgage } from './image.styles'

// Entity
const Image = ({
  src,
  alt,
  onClick,
  definitions,
  isLazyLoaded,
  OnVisibilityProps,
  cursor,
  position,
  size,
  width,
  height,
  ...props
}) => {
  // In case  the src key in not called src in props, expects {src: <propsrcname>}
  if (definitions) {
    for (var key in definitions) {
      key === 'src' && (src = props[definitions[key]])
    }
  }

  // Template
  return (
    <>
      {isLazyLoaded ? (
        <OnVisibility {...OnVisibilityProps}>
          <Wrapper width={width} height={height} size={size}>
            <Imgage alt={alt} src={src} onClick={() => onClick(props)} />
          </Wrapper>
        </OnVisibility>
      ) : (
        <Wrapper width={width} height={height} size={size}>
          <Imgage
            cursor={cursor}
            position={position}
            src={src}
            alt={alt}
            onClick={() => onClick(props)}
          />
        </Wrapper>
      )}
    </>
  )
}

Image.defaultProps = defaultProps
Image.propTypes = propTypes

export default memo(Image)
