import React, { memo, lazy, Suspense, forwardRef } from 'react'

import { BoxWrapper } from './styles'

const LazyLoad = lazy(() =>
  import(
    /* webpackChunkLazyLoad: 'LazyLoadWrapper' */ '../../miscUtils/rendering/lazyLoad'
  ),
)

const Box = (
  { children, name, styles = {}, isLazyLoaded, lazyLoadProps = {}, ...rest },
  ref,
) => {
  const BoxComponent = () => (
    <BoxWrapper
      ref={ref}
      styles={{ display: 'grid', ...styles }}
      data-box-name={name}
      data-cy={name}
      {...rest}
    >
      {children}
    </BoxWrapper>
  )

  return isLazyLoaded ? (
    <Suspense fallback={null}>
      <LazyLoad {...lazyLoadProps}>
        <BoxComponent />
      </LazyLoad>
    </Suspense>
  ) : (
    <BoxComponent />
  )
}

export default memo(forwardRef(Box))
