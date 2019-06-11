import React from 'react'

import Icon from '../../../Icon/Ui/React/icon.index'

import { defaultProps, propTypes } from './chip.propTypes'
import { Wrapper, Text } from './chip.styles'

const Chip = ({ color, text, onClick, toRemove }) => {
  return (
    <Wrapper color={color} onClick={onClick}>
      {toRemove && <Icon name='close/round-filled' noBackground size={18} />}
      <div>
        #<Text color={color}>{text}</Text>
      </div>
    </Wrapper>
  )
}

Chip.defaultProps = defaultProps
Chip.propTypes = propTypes

export default Chip
