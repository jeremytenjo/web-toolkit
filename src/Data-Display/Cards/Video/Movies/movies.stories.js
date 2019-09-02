import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import Box from '../../../Box/Ui/React/box.index'
import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

const req = require.context('./', true, /index.js$/)
const paths = req.keys()

const poster =
  'http://cdn.collider.com/wp-content/uploads/2017/03/guardians-of-the-galaxy-2-imax-poster.jpg'
const title = 'Guardians of the Galaxy'
const overview =
  'The misadventures of a group of friends as they navigate the pitfalls of work, life and love in Manhattan.'
const favorite = null
const moreLinks = null
const onLoadMore = () => console.log('load more')
const onPlay = () => console.log('onPlay')
const onFavoriteToggle = () => console.log('onFavoriteToggle')

const Styles = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(paths)
  }, [])

  const getStyles = async (paths) => {
    const Elements = paths.map(async (location, i) => {
      let Mod = await import(`${location}`)
      Mod = Mod.default
      return (
        <>
          <B title={i + 1} key={Math.random()} noBackground>
            <Mod
              poster={poster}
              title={title}
              overview={overview}
              favorite={favorite}
              moreLinks={moreLinks}
              onLoadMore={onLoadMore}
              onPlay={onPlay}
              onFavoriteToggle={onFavoriteToggle}
            />
          </B>
        </>
      )
    })
    setvars(await Promise.all(Elements))
  }
  return <Box gridAutoFlow='column'>{vars}</Box>
}

storiesOf('Data-Display|Cards/Movies', module).add('variations', () => (
  <Styles />
))
