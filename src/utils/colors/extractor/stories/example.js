import React, { memo } from 'react'

import Image from '../../../../media/image/'

import imageExample from './image.jpg'

const ColorExtractorExample = () => {
  return (
    <div>
      <Image src={imageExample} />
    </div>
  )
}

export default memo(ColorExtractorExample)
