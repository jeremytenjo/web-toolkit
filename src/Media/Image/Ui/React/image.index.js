import React, { memo } from 'react'

import OnVisibility from '../../../../_Misc-Utils/Rendering/renderingOnVisibility'

import { defaultProps, propTypes } from './image.propTypes'
import { Wrapper } from './image.styles'

// Entity
const Image = ({
  src,
  index,
  onClick,
  definitions,
  skeleton,
  OnVisibilityParams,
  cursor,
  position,
  ...props
}) => {
  const isLazyLoaded = index > 12

  // In case  the src key in not called src in props, expects {src: <propsrcname>}
  if (definitions) {
    for (var key in definitions) {
      key === 'src' && (src = props[definitions[key]])
    }
  }

  // Template
  return (
    <>
      {skeleton && <Wrapper skeleton={skeleton} />}
      {isLazyLoaded ? (
        <OnVisibility {...OnVisibilityParams}>
          <Wrapper src={src} onClick={() => onClick(props)} />
        </OnVisibility>
      ) : (
        <Wrapper
          cursor={cursor}
          position={position}
          src={src}
          onClick={() => onClick(props)}
        />
      )}
    </>
  )
}

Image.defaultProps = defaultProps
Image.propTypes = propTypes

export default memo(Image)
