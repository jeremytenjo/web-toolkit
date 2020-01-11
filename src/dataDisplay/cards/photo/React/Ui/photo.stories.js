import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Contact from '../../../contact/1'
import Modal from '../../../../../feedback/modal'

import Photo1 from './1/photo.index'

const avatarImageUrl =
  'https://firebasestorage.googleapis.com/v0/b/estilistta.appspot.com/o/hayle.jpeg?alt=media&token=b8eb9208-6456-4075-9f57-c2c680745604'
const name = 'Hayle Whitehead'
const photoUrl =
  'https://images.unsplash.com/photo-1562036861-1194db385400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
const cardOptions = ['Remove']

const Variations = () => {
  const [modal, setmodal] = useState(null)
  return (
    <>
      <B title='style1' noBackground contentStyle={{ width: 300, height: 600 }}>
        <Photo1 photoUrl={photoUrl} menuOptions={cardOptions} />
      </B>

      <B title='style1 - in modal' noBackground>
        <button onClick={() => setmodal(true)}>OPEN </button>

        <Modal show={modal} onClose={() => setmodal(false)} animationStyle='showHide'>
          <Photo1
            photoUrl={photoUrl}
            menuOptions={cardOptions}
            style={{ width: 300, height: 600 }}
          />
        </Modal>
      </B>
    </>
  )
}

storiesOf('Data-Display|Cards/Photo', module).add('styles', () => <Variations />)
