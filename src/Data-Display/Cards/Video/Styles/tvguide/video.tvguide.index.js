import React, { memo } from 'react'

import Box from '../../../../Box/Ui/React/box.index'
import Poster from '../../../Poster/Ui/React/Styles/1/poster.1.index'
import Typography from '../../../../Typography/Ui/React/typography.index'
import Icon from '../../../../Icon/Ui/React/Base/icon.index'
import Select from '../../../../../Input/Form/Select/Ui/React/Styles/tvguide/select.tvguide.index'

import { defaultProps, propTypes } from './video.tvguide.propTypes'

const CardMovie1 = ({
  poster,
  title,
  overview,
  favorite,
  onLoadMore,
  onFavoriteToggle,
  onPlay,
  playIcon,
  plusIcon,
  starIcon,
  playLabel,
  plusLabel,
  starLabelIsFavorite,
  starLabelIsNotFavorite,
  iconBackgroundColor,
  titleVariant,
  overviewVariant,
  isTv,
  seasons,
  episodes,
  onSeasonChange,
  onEpisodeChange,
  selectProps,
  ...rest
}) => {
  const favIcon = favorite ? `${starIcon}-filled` : starIcon
  const starLabel = favorite ? starLabelIsFavorite : starLabelIsNotFavorite

  const handleOnPlay = () => onPlay(rest)
  const handleLoadMore = () => onLoadMore(rest)
  const handleFavoriteToggle = () => onFavoriteToggle(rest)

  return (
    <Box
      backgroundColor='white'
      borderRadius='10px'
      gridAutoFlow={isTv ? 'row' : 'column'}
      justifyItems='center'
      textAlign={isTv ? 'center' : 'left'}
      gridGap='s'
      padding='s'
    >
      <Poster src={poster} size={184} />

      <Box gridGap='s' padding='none' alignContent='center'>
        {title && <Typography text={title} variant={titleVariant} />}
        {overview && <Typography text={overview} variant={overviewVariant} />}

        <Box
          gridAutoFlow='column'
          justifyContent='space-between'
          grid-template-columns='60px 60px 60px'
          justify-items='center'
          align-items='start'
        >
          {isTv && (
            <>
              <Select
                data={seasons}
                backgroundColor='primary-lighter'
                title='Season'
                onChange={onSeasonChange}
                titleColor='primary-darker'
                wrapperStyles={{ padding: 'none' }}
                size={45}
                {...selectProps}
              />
              <Select
                data={episodes}
                backgroundColor='primary-lighter'
                title='Episode'
                onChange={onEpisodeChange}
                titleColor='primary-darker'
                wrapperStyles={{ padding: 'none' }}
                size={45}
                {...selectProps}
              />
            </>
          )}
          {!isTv && (
            <Icon
              name={plusIcon}
              color='primary-darker'
              label={plusLabel}
              onClick={handleLoadMore}
              background
              backgroundColor={iconBackgroundColor}
            />
          )}

          <Icon
            name={playIcon}
            color='primary-darker'
            label={playLabel}
            onClick={handleOnPlay}
            background
            backgroundColor={iconBackgroundColor}
          />

          <Icon
            name={favIcon}
            color='primary-darker'
            label={starLabel}
            background
            backgroundColor={iconBackgroundColor}
            onClick={handleFavoriteToggle}
          />
        </Box>
      </Box>
    </Box>
  )
}

CardMovie1.defaultProps = defaultProps
CardMovie1.propTypes = propTypes

export default memo(CardMovie1)
