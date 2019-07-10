import React, { memo } from 'react'

import Image from '../../../../../../../Media/Image/Ui/React/image.index'

import { defaultProps, propTypes } from './poster.1.propTypes'
import { Wrapper } from './poster.1.styles'

const Poster1 = ({ src, onClick, alt = 'poster', ...rest }) => {
  const handleClick = () => onClick(rest)

  return (
    <Wrapper onClick={handleClick}>
      <Image src={src} width={119} height={184} alt={alt} />
    </Wrapper>
  )
}

Poster1.defaultProps = defaultProps
Poster1.propTypes = propTypes

export default memo(Poster1)
