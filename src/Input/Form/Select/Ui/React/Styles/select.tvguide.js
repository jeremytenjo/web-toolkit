import React, { memo } from 'react'

import Box from '../../../../../../Data-Display/Box/Ui/React/box.index'
import Typogrgraphy from '../../../../../../Data-Display/Typography/Ui/React/typography.index'
import SelectBase from '../Base/select.index'

const Item = ({
  label,
  backgroundColor = 'primary',
  foregroundColor = 'primary-darker',
  fontColor = 'black',
  title = 'seasons',
}) => {
  return (
    <Box justifyItems='center' gridGap='s'>
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

      <Typogrgraphy text={title} color={fontColor} />
    </Box>
  )
}

const SelectTVGuide = ({ data }) => {
  return <SelectBase data={data} Item={Item} />
}

export default memo(SelectTVGuide)
