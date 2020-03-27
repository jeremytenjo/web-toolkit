import React, { memo } from 'react'

import OnVisibility from '../../miscUtils/rendering/renderingOnVisibility'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper, InnerImage } from './styles'

const Image = ({
  src,
  alt,
  onClick,
  definitions,
  isLazyLoaded,
  OnVisibilityProps,
  styles,
  ...props
}) => {
  // In case  the src key in not called src in props, expects {src: <propsrcname>}
  if (definitions) {
    for (var key in definitions) {
      key === 'src' && (src = props[definitions[key]])
    }
  }

  const ImageComp = () => (
    <Wrapper onClick={() => onClick(props)} styles={styles}>
      {src && <InnerImage alt={alt} src={src} />}
    </Wrapper>
  )

  return isLazyLoaded ? (
    <OnVisibility {...OnVisibilityProps}>
      <ImageComp />
    </OnVisibility>
  ) : (
    <ImageComp />
  )
}

Image.defaultProps = defaultProps
Image.propTypes = propTypes

export default memo(Image)
