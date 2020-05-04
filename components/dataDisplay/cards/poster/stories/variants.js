import React from 'react'

import B from '../../../../../.storybook/customComponents/variationBlock'
import { useVariants } from '../../../../../.storybook/utils/useVariants'

const image = 'https://images-na.ssl-images-amazon.com/images/I/818NtgncwLL._SL1500_.jpg'

const Variants = ({ Component: Poster }) => {
  return (
    <div>
      <B title='default'>
        <Poster src={image} onClick={() => console.log('sdf')} />
      </B>
      <B title='no photo'>
        <Poster
          alt='this is a poster jfhajklsdhf ljk ahslk lkashd f fjklahsljk fjljaksh dfjklhasjkld fhljkas hdfjklhasjk fhkjas hdfjklhasdfjklhaskj fhljkas fhlkjashdf jkas j fhjkasdhfjklashldfjkhasjkl lkjasd fjklas sdhfjklahsfkjasdhf lkjashdfkjhasljdkfhaks  h aklsdf fhklajshfd'
          onClick={() => console.log('sdf')}
        />
      </B>
      <B title='loading'>
        <Poster loading alt='this is a poster' onClick={() => console.log('sdf')} />
      </B>
      <B title='no animations'>
        <Poster
          noAnimation
          src={image}
          alt='this is a poster'
          onClick={() => console.log('sdf')}
        />
      </B>
    </div>
  )
}

export default () => {
  const req = require.context('../styles', true, /index.js$/)
  const { Elements } = useVariants({
    req,
    Variants,
    dir: 'dataDisplay/cards/poster',
  })

  return Elements
}
