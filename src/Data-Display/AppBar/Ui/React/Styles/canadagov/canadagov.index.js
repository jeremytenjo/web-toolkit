import React, { memo } from 'react'

import Box from '../../../../../Box/Ui/React/box.index'
import Typography from '../../../../../Typography/Ui/React/typography.index'
import Image from '../../../../../../Media/Image/Ui/React/image.index'

import {
  WrapperStyles,
  TypographyWrapperStyles,
  ImageStyles,
} from './canadagov.styles'
import { defaultProps, propTypes } from './canadagov.propTypes'

const AppbarCangov = ({
  title,
  logo,
  onClick,
  wrapperProps,
  typographyProps,
  imageProps,
}) => (
  <Box {...WrapperStyles} {...wrapperProps}>
    <Box {...TypographyWrapperStyles} onClick={onClick} role='button'>
      <Typography text={title} {...typographyProps} />
      <svg
        width='11'
        height='9'
        viewBox='0 0 11 9'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.5 9L0.73686 0.750001L10.2631 0.75L5.5 9Z'
          fill={`var(--color-${typographyProps.color})`}
        />
      </svg>
    </Box>

    <Image src={logo} {...ImageStyles} {...imageProps} />
  </Box>
)

AppbarCangov.defaultProps = defaultProps
AppbarCangov.propTypes = propTypes

export default memo(AppbarCangov)
