import React from 'react'
import { object } from 'prop-types'

import Icon from '../icon'

export const defaultProps = {
  wrapperStyles: {},
  renderCenterLeftControls: ({ previousSlide }) => (
    <Icon onClick={previousSlide} name='arrow/1' />
  ),
  renderCenterRightControls: ({ nextSlide }) => (
    <Icon onClick={nextSlide} name='arrow/1' style={{ transform: 'rotate(180deg)' }} />
  ),
}

export const propTypes = {
  wrapperStyles: object,
}
