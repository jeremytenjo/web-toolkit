import React, { memo } from 'react'

import OnVisibility from '../../../../Misc-Utils/Rendering/renderingOnVisibility'

import { defaultProps, propTypes } from './image.propTypes'
import { Wrapper, InnerImage } from './image.styles'

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
  style,
  ...props
}) => {
  // In case  the src key in not called src in props, expects {src: <propsrcname>}
  if (definitions) {
    for (var key in definitions) {
      key === 'src' && (src = props[definitions[key]])
    }
  }

  const ImageComp = () => (
    <Wrapper
      width={width}
      height={height}
      size={size}
      onClick={() => onClick(props)}
      cursor={cursor}
      style={style}
    >
      {src && <InnerImage alt={alt} src={src} />}
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
