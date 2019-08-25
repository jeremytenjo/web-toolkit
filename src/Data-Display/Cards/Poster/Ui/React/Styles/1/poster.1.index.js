import React, { memo, lazy, Suspense } from 'react'

import Image from '../../../../../../../Media/Image/Ui/React/image.index'

import { defaultProps, propTypes } from './poster.1.propTypes'
import { Wrapper } from './poster.1.styles'

const Typography = lazy(() =>
  import(
    /* webpackChunkName: 'Typography' */ '../../../../../../Typography/Ui/React/typography.index'
  ),
)

const Poster1 = ({ src, onClick, alt, backgroundColor, size, ...rest }) => {
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
    >
      {src && <Image src={src} width={width} height={height} alt={alt} />}
      {!src && (
        <Suspense fallback={null}>
          <Typography text={alt} color='white' variant='caption' />
        </Suspense>
      )}
    </Wrapper>
  )
}

Poster1.defaultProps = defaultProps
Poster1.propTypes = propTypes

export default memo(Poster1)
