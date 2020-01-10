import React, { memo } from 'react'

import Box from '../../../../../../../Data-Display/Box/Ui/React'
import Typogrgraphy from '../../../../../../../Data-Display/Typography/Ui/React/typography.index'
import SelectBase from '../../Base/select.index'

import { defaultProps, propTypes } from './select.tvguide.propTypes'

const Item = ({
  label,
  backgroundColor,
  foregroundColor,
  titleColor,
  titleVariant,
  title,
  wrapperStyles,
  ...styles
}) => {
  return (
    <Box
      styles={{
        justifyItems: 'center',
        gridGap: title && 'xxs',
        ...wrapperStyles,
      }}
    >
      <Box
        size={43}
        styles={{
          backgroundColor: backgroundColor,
          color: foregroundColor,
          borderRadius: '100px',
          justifyItems: 'center',
          alignItems: 'center',
          ...styles,
        }}
      >
        <Typogrgraphy text={label} variant={titleVariant} />
      </Box>

      {title && <Typogrgraphy text={title} variant={titleVariant} color={titleColor} />}
    </Box>
  )
}

Item.defaultProps = defaultProps
Item.propTypes = propTypes

const SelectTVGuide = ({ data, ...rest }) => {
  return <SelectBase data={data} Item={Item} {...rest} />
}

export default memo(SelectTVGuide)
