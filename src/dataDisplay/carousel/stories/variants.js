import React, { useState } from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Image from '../../../media/image'
import Modal from '../../../feedback/modal/'
import Carousel from '../'

import stubs from './stubs'

const { simple } = stubs

export default () => {
  const [showModal, setshowModal] = useState(null)
  return (
    <div>
      <B title='default'>
        <Carousel>
          <Image {...simple} />
          <Image {...simple} />
          <Image {...simple} />
        </Carousel>
      </B>

      <B title='custom controls'>
        <Carousel
          renderTopCenterControls={({ currentSlide }) => <div>Slide: {currentSlide}</div>}
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>Previous</button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>Next</button>
          )}
        >
          <Image {...simple} />
          <Image {...simple} />
          <Image {...simple} />
        </Carousel>
      </B>

      <B title='in modal'>
        <button onClick={() => setshowModal(!showModal)}>toggle</button>
        <Modal show={showModal} onClose={() => setshowModal(false)}>
          <Carousel>
            <Image {...simple} />
            <Image {...simple} />
            <Image {...simple} />
          </Carousel>
        </Modal>
      </B>
    </div>
  )
}
