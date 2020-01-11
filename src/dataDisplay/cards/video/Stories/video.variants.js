import React from 'react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import { useStyles } from '../../../../../.storybook/Utils/useStyles'

const poster =
  'http://cdn.collider.com/wp-content/uploads/2017/03/guardians-of-the-galaxy-2-imax-poster.jpg'
const titleTest = 'Guardians of the Galaxy'
const overview =
  'The misadventures of a group of friends as they navigate the pitfalls of work, life and love in Manhattan.'
const favorite = null
const moreLinks = null
const onLoadMore = () => console.log('load more')
const onPlay = () => console.log('onPlay')
const onFavoriteToggle = () => console.log('onFavoriteToggle')

const Variants = ({ Component: Video }) => {
  return (
    <>
      <B title='Movie' key={Math.random()} noBackground>
        <Video
          poster={poster}
          title={titleTest}
          overview={overview}
          favorite={favorite}
          moreLinks={moreLinks}
          onLoadMore={onLoadMore}
          onPlay={onPlay}
          onFavoriteToggle={onFavoriteToggle}
        />
      </B>
      <B title={`isTv`} key={Math.random()} noBackground>
        <Video
          onPlay={(e) => console.log(e)}
          title={titleTest}
          lastAiredEpisode={{
            episode: 1,
            season: 2,
          }}
          poster={poster}
          favorite={favorite}
          moreLinks={moreLinks}
          onLoadMore={onLoadMore}
          lastEpWatched={{ season: '01', episode: '02' }}
          onFavoriteToggle={onFavoriteToggle}
          isTv
          seasons={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
          ]}
          episodes={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
          ]}
          selectProps={{
            initialValue: 1,
          }}
        />
      </B>
      <B title={`isTv - Loading`} key={Math.random()} noBackground>
        <Video
          loadingMessage='Loading'
          onPlay={(e) => console.log(e)}
          title={titleTest}
          lastAiredEpisode={{
            episode: 1,
            season: 2,
          }}
          poster={poster}
          favorite={favorite}
          moreLinks={moreLinks}
          onLoadMore={onLoadMore}
          lastEpWatched={{ season: '01', episode: '02' }}
          onFavoriteToggle={onFavoriteToggle}
          isTv
          seasons={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
          ]}
          episodes={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
          ]}
          selectProps={{
            initialValue: 1,
          }}
        />
      </B>
    </>
  )
}

export default () => {
  const req = require.context('../Styles', true, /index.js$/)
  const { Elements } = useStyles({
    req,
    Variants,
    dir: 'dataDisplay/Cards/Video',
    short: true,
  })

  return Elements
}
