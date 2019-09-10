import React, { memo } from 'react'

import Box from '../../../../../../../Data-Display/Box/Ui/React/box.index'
import Typogrgraphy from '../../../../../../../Data-Display/Typography/Ui/React/typography.index'
import SelectBase from '../../Base/select.index'

import { defaultProps, propTypes } from './select.tvguide.propTypes'

const Item = ({
  label,
  backgroundColor,
  foregroundColor,
  fontColor,
  title,
}) => {
  return (
    <Box justifyItems='center' gridGap={title && 's'}>
      <Box
        size={43}
        backgroundColor={backgroundColor}
        color={foregroundColor}
        borderRadius='100px'
        justifyItems='center'
        alignItems='center'
      >
        {label}
      </Box>

      {title && <Typogrgraphy text={title} color={fontColor} />}
    </Box>
  )
}

Item.defaultProps = defaultProps
Item.propTypes = propTypes

const SelectTVGuide = ({ data, title }) => {
  return <SelectBase data={data} title={title} Item={Item} />
}

export default memo(SelectTVGuide)
