import React, { memo, lazy, Suspense, useRef } from 'react'

import Image from '../../../../../media/image/index'
import { defaultProps, propTypes } from '../../propTypes'

import { Wrapper } from './styles'

const Typography = lazy(() =>
  import(/* webpackChunkName: 'Typography' */ '../../../../typography'),
)
const Animation = lazy(() =>
  import(
    /* webpackChunkName: 'Animation' */ '../../../../../miscUtils/animations/Web-Animations-API'
  ),
)

const Poster1 = ({
  src,
  onClick,
  alt,
  loading,
  backgroundColor,
  size,
  noAnimation,
  ...rest
}) => {
  const wrapperRef = useRef(null)

  const handleClick = () => onClick(rest)
  const height = size
  const width = height / 1.5
  const heightString = `${height}px`
  const widthString = `${width}px`

  return (
    <Wrapper
      onClick={handleClick}
      style={{
        width: widthString,
        height: heightString,
      }}
      src={src}
      backgroundColor={backgroundColor}
      ref={wrapperRef}
      isLoading={loading}
      noAnimation={noAnimation}
    >
      {src && (
        <Image
          src={src}
          styles={{ width: widthString, height: heightString }}
          alt={alt}
        />
      )}
      {!src && (
        <Suspense fallback={null}>
          <Typography
            text={alt}
            styles={{ color: 'white', textAlign: 'center' }}
            variant='caption'
          />
        </Suspense>
      )}

      {loading && (
        <Suspense fallback={null}>
          <Animation name='blinking' show el={wrapperRef} />
        </Suspense>
      )}
    </Wrapper>
  )
}

Poster1.defaultProps = defaultProps
Poster1.propTypes = propTypes

export default memo(Poster1)
