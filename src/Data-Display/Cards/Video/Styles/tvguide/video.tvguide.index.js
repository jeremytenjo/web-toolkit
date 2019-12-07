import React, { memo, useState, useEffect } from 'react'
import formatDate from 'date-fns/format'

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
  posterAlt,
  lastEpWatched,
  onPlayNext,
  lastAirDate,
  ...rest
}) => {
  const [nextEpisode, setnextEpisode] = useState(null)
  const favIcon = favorite ? `${starIcon}-filled` : starIcon
  const starLabel = favorite ? starLabelIsFavorite : starLabelIsNotFavorite
  const { season, episode } = lastEpWatched || {}
  let label = `Last episode watched: S${season}E${episode}`

  useEffect(() => {
    createNextEp()
  }, [lastEpWatched])

  const createNextEp = () => {
    if (lastEpWatched) {
      const { season, episode } = lastEpWatched
      const nextSeason = parseInt(season, 10) + 1
      const nextEp = parseInt(episode, 10) + 1
      const episodesInCurrentSeason = parseInt(episodes.length, 10)
      const numberOfSeasons = parseInt(seasons.length, 10)
      const isThereNextEpisodeInCurrentSeason =
        nextEp <= episodesInCurrentSeason

      if (isThereNextEpisodeInCurrentSeason) {
        setnextEpisode({ nextEpisode: nextEp, season: parseInt(season, 10) })
      } else {
        const isThereNextSeason = nextSeason <= numberOfSeasons
        if (isThereNextSeason) {
          setnextEpisode({ nextEpisode: 1, season: nextSeason })
        }
      }
    }
  }

  const handlePlayNext = () => {
    onPlayNext(nextEpisode)
  }

  const handleOnPlay = () => onPlay(rest)
  const handleLoadMore = () => onLoadMore(rest)
  const handleFavoriteToggle = () => onFavoriteToggle(rest)

  const wrapper = {
    backgroundColor: 'white',
    borderRadius: '10px',
    gridAutoFlow: isTv ? 'row' : 'column',
    justifyItems: 'center',
    textAlign: isTv ? 'center' : 'left',
    gridGap: 's',
    padding: 's',
  }

  return (
    <Box styles={wrapper}>
      <Poster src={poster} size={184} alt={posterAlt} />
      <Box styles={{ gridGap: 's', padding: 'none', alignContent: 'center' }}>
        {title && <Typography text={title} variant={titleVariant} />}
        {overview && <Typography text={overview} variant={overviewVariant} />}

        <Box
          styles={{
            gridAutoFlow: 'column',
            justifyContent: 'space-between',
            gridAutoColumns: '60px',
            justifyItems: 'center',
            alignItems: 'start',
          }}
        >
          {isTv && (
            <>
              <Select
                data={seasons}
                backgroundColor='primaryLighter'
                title='Season'
                onChange={onSeasonChange}
                titleColor='primaryDarker'
                wrapperStyles={{ padding: 'none' }}
                size={45}
                {...selectProps}
              />
              <Select
                data={episodes}
                backgroundColor='primaryLighter'
                title='Episode'
                onChange={onEpisodeChange}
                titleColor='primaryDarker'
                wrapperStyles={{ padding: 'none' }}
                size={45}
                {...selectProps}
              />
            </>
          )}
          {!isTv && (
            <Icon
              name={plusIcon}
              color='primaryDarker'
              label={{ text: plusLabel, variant: 'body2' }}
              onClick={handleLoadMore}
              background
              backgroundColor={iconBackgroundColor}
            />
          )}

          <Icon
            name={playIcon}
            color='primaryDarker'
            label={{ text: playLabel, variant: 'body2' }}
            onClick={handleOnPlay}
            background
            backgroundColor={iconBackgroundColor}
          />

          <Icon
            name={favIcon}
            color='primaryDarker'
            label={{ text: starLabel, variant: 'body2' }}
            background
            backgroundColor={iconBackgroundColor}
            onClick={handleFavoriteToggle}
          />
        </Box>

        {isTv && (
          <>
            {nextEpisode && (
              <>
                {lastAirDate && (
                  <Typography
                    text={`Last episode aired on ${formatDate(
                      new Date(lastAirDate),
                      'MMMM dd',
                    )}`}
                    variant='navbar'
                    styles={{
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  />
                )}
                <Typography text={label} variant='subtitle2' />
                <Typography
                  text='Play next episode'
                  variant='subtitle1'
                  styles={{
                    color: 'primary',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={handlePlayNext}
                />
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  )
}

CardMovie1.defaultProps = defaultProps
CardMovie1.propTypes = propTypes

export default memo(CardMovie1)
