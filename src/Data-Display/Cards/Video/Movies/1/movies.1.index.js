import React, { memo } from 'react'

import Box from '../../../../Box/Ui/React/box.index'
import Poster from '../../../Poster/Ui/React/Styles/1/poster.1.index'
import Typography from '../../../../Typography/Ui/React/typography.index'
import Icon from '../../../../Icon/Ui/React/Base/icon.index'

import { defaultProps, propTypes } from './movies.1.propTypes'

const CardMovie1 = ({
  poster,
  title,
  overview,
  favorite,
  moreLinks,
  onLoadMore,
  onFavoriteToggle,
  onPlay,
  playIcon,
  plusIcon,
  starIcon,
  playLabel,
  plusLabel,
  starLabel,
  ...rest
}) => {
  const handleOnPlay = () => onPlay(rest)
  const handleLoadMore = () => onLoadMore(rest)
  const handleFavoriteToggle = () => onFavoriteToggle(rest)
  return (
    <Box backgroundColor='white' borderRadius='20px'>
      <Poster src={poster} />
      <Typography text={title} variation='h4' />
      <Typography text={overview} variation='body2' />

      <Box gridAutoFlow='column' justifyContent='space-between'>
        <Icon
          name={plusIcon}
          color='primary-darker'
          label={plusLabel}
          onClick={handleLoadMore}
          background
        />
        <Icon
          name={playIcon}
          color='primary-darker'
          label={playLabel}
          onClick={handleOnPlay}
          background
        />
        <Icon
          name={starIcon}
          color='primary-darker'
          label={starLabel}
          background
          onClick={handleFavoriteToggle}
        />
      </Box>
    </Box>
  )
}

CardMovie1.defaultProps = defaultProps
CardMovie1.propTypes = propTypes

export default memo(CardMovie1)
