import React, { memo } from 'react'

import Icon from '../../icon.index'

import { defaultProps, propTypes } from './like.propTypes.js'

const IconLike = ({ liked, onLike, onUnlike }) =>
  liked ? (
    <Icon
      name='material/heart/filled'
      onClick={onUnlike}
      background
      color='red'
    />
  ) : (
    <Icon
      name='material/heart/outlined'
      onClick={onLike}
      background
      color='none'
    />
  )

IconLike.defaultProps = defaultProps
IconLike.propTypes = propTypes

export default memo(IconLike)
