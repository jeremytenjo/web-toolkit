import React, { useState } from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Imgage from '../../../media/image'
import Carousel from '../'

import stubs from './stubs'

const { simple } = stubs

export default () => (
  <div>
    <B title='default' contentStyle={{ width: '100%' }}>
      <Carousel>
        <Imgage {...simple} />
        <Imgage {...simple} />
        <Imgage {...simple} />
      </Carousel>
    </B>

    <B title='custom controls' contentStyle={{ width: '100%' }}>
      <Carousel
        renderTopCenterControls={({ currentSlide }) => <div>Slide: {currentSlide}</div>}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>Previous</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>Next</button>
        )}
      >
        <Imgage {...simple} />
        <Imgage {...simple} />
        <Imgage {...simple} />
      </Carousel>
    </B>
  </div>
)
