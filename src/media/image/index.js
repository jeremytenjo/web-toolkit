import React, { memo, lazy, Suspense } from 'react'

import { defaultProps, propTypes } from './propTypes'
import { ImageWrapper, InnerImage } from './styles'

const LazyLoad = lazy(() =>
  import(
    /* webpackChunkLazyLoad: 'LazyLoadWrapper' */ '../../utils/rendering/lazyLoad'
  ),
)

const Image = ({
  src,
  alt,
  onClick,
  objectFit,
  definitions,
  isLazyLoaded,
  lazyLoadProps,
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
    <ImageWrapper onClick={() => onClick(props)} styles={styles}>
      {src && <InnerImage alt={alt} src={src} style={{ objectFit }} />}
    </ImageWrapper>
  )

  return isLazyLoaded ? (
    <Suspense fallback={null}>
      <LazyLoad {...lazyLoadProps}>
        <ImageComp />
      </LazyLoad>
    </Suspense>
  ) : (
    <ImageComp />
  )
}

Image.defaultProps = defaultProps
Image.propTypes = propTypes

export default memo(Image)
