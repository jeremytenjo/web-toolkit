import React, { useState } from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Image from '../../../media/image'
import Modal from '../../../feedback/modal/'
import Carousel from '../'

import stubs from './stubs'

const { simple, simple2 } = stubs

export default () => {
  const [showModal, setshowModal] = useState(null)
  const [index, setIndex] = useState(0)

  return (
    <div>
      <B title='default'>
        <Carousel index={index} setIndex={setIndex}>
          <Image {...simple} />
          <Image {...simple} />
          <Image {...simple2} />
        </Carousel>
      </B>

      <B title='in modal'>
        <button onClick={() => setshowModal(!showModal)}>toggle</button>
        <Modal show={showModal} onClose={() => setshowModal(false)}>
          <Carousel index={index} setIndex={setIndex}>
            <Image {...simple} />
            <Image {...simple} />
            <Image {...simple2} />
          </Carousel>
        </Modal>
      </B>
    </div>
  )
}
