import React from 'react'

import Icon from '../../../Icon/Ui/React/icon.index'

import { defaultProps, propTypes } from './chip.propTypes'
import { Wrapper, Text } from './chip.styles'

const Chip = ({ color, text, onClick, noClose, onClose }) => {
  return (
    <Wrapper color={color} noClose={noClose}>
      {!noClose && (
        <Icon name='close/round-filled' onClick={onClose} noBackground />
      )}
      <div onClick={!noClose ? onClick : null}>
        #<Text color={color}>{text}</Text>
      </div>
    </Wrapper>
  )
}

Chip.defaultProps = defaultProps
Chip.propTypes = propTypes

export default Chip
