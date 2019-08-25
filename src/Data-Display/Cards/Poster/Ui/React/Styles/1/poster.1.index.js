import React, { memo, lazy, Suspense, useRef } from 'react'

import Image from '../../../../../../../Media/Image/Ui/React/image.index'

import { defaultProps, propTypes } from './poster.1.propTypes'
import { Wrapper } from './poster.1.styles'

const Typography = lazy(() =>
  import(
    /* webpackChunkName: 'Typography' */ '../../../../../../Typography/Ui/React/typography.index'
  ),
)
const Animation = lazy(() =>
  import(
    /* webpackChunkName: 'Typography' */ '../../../../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'
  ),
)

const Poster1 = ({
  src,
  onClick,
  alt,
  loading,
  backgroundColor,
  size,
  ...rest
}) => {
  const wrapperRef = useRef(null)

  const handleClick = () => onClick(rest)
  const height = size
  const width = height / 1.5

  return (
    <Wrapper
      onClick={handleClick}
      style={{
        width: width,
        height: height,
      }}
      src={src}
      backgroundColor={backgroundColor}
      ref={wrapperRef}
      loading={loading}
    >
      {src && <Image src={src} width={width} height={height} alt={alt} />}
      {!src && (
        <Suspense fallback={null}>
          <Typography
            text={alt}
            color='white'
            variant='caption'
            textAlign='center'
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
