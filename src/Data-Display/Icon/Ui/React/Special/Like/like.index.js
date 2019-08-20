import React, { memo } from 'react'

import Icon from '../../Base/icon.index'

import { defaultProps, propTypes } from './like.propTypes.js'

const IconLike = ({ liked, onLike, onUnlike }) =>
  liked ? (
    <Icon
      name='heart/filled/material'
      onClick={onUnlike}
      background
      color='red'
    />
  ) : (
    <Icon
      name='heart/outlined/material'
      onClick={onLike}
      background
      color='none'
    />
  )

IconLike.defaultProps = defaultProps
IconLike.propTypes = propTypes

export default memo(IconLike)
