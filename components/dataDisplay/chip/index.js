import React from 'react'

import Icon from '../icon/index'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper, Text } from './styles'

const Chip = ({ color, text, onClick, toRemove }) => {
  return (
    <Wrapper color={color} onClick={onClick}>
      {toRemove && <Icon name='close/round-filled' size='18px' />}
      <div>
        #<Text color={color}>{text}</Text>
      </div>
    </Wrapper>
  )
}

Chip.defaultProps = defaultProps
Chip.propTypes = propTypes

export default Chip
