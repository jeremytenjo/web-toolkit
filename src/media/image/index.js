import React, { memo, lazy, Suspense } from 'react'

const LazyLoad = lazy(() =>
  import(
    /* webpackChunkLazyLoad: 'LazyLoadWrapper' */ '../../miscUtils/rendering/lazyLoad'
  ),
)

import { defaultProps, propTypes } from './propTypes'
import { Wrapper, InnerImage } from './styles'

const Image = ({
  src,
  alt,
  onClick,
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
    <Wrapper onClick={() => onClick(props)} styles={styles}>
      {src && <InnerImage alt={alt} src={src} />}
    </Wrapper>
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
