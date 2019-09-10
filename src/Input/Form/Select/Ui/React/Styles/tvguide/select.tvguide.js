import React, { memo } from 'react'

import Box from '../../../../../../../Data-Display/Box/Ui/React/box.index'
import SelectBase from '../../Base/select.index'

const Item = ({ label }) => {
  return (
    <Box
      size={43}
      backgroundColor='primary'
      borderRadius='100px'
      justifyItems='center'
      alignItems='center'
    >
      {label}
    </Box>
  )
}

const SelectTVGuide = ({ data }) => {
  return <SelectBase data={data} Item={Item} />
}

export default memo(SelectTVGuide)
