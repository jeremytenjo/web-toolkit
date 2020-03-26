import React, { memo } from 'react'
import NukaCarousel from 'nuka-carousel'

import Box from '../box'

import { defaultProps, propTypes } from './propTypes'

const Carousel = ({ children, wrapperStyles, ...rest }) => {
  return (
    <Box styles={{ width: '100%', ...wrapperStyles }}>
      <NukaCarousel {...rest}>{children}</NukaCarousel>
    </Box>
  )
}

Carousel.defaultProps = defaultProps
Carousel.propTypes = propTypes

export default memo(Carousel)
