import React, { memo } from 'react'

import Icon from '../../icon.index'

import { defaultProps, propTypes } from './like.propTypes.js'

const IconHeartFilled = ({ liked, onLike, onUnlike }) =>
  liked ? (
    <Icon name='material/heart/filled' onClick={onUnlike} background />
  ) : (
    <Icon name='material/heart/outlined' onClick={onLike} background />
  )

IconHeartFilled.defaultProps = defaultProps
IconHeartFilled.propTypes = propTypes

export default memo(IconHeartFilled)
