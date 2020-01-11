import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Button from '../../../input/button/Styles/1/index'
import Overlay from '../'

const Variations = () => {
  const [show, setshow] = useState(null)
  return (
    <>
      <B title='default' noBackground>
        <Button
          onClick={() => setshow(true)}
          text='show overlay'
          color='secondary'
          dataCy='show-button'
        />
        <Overlay show={show} onClick={() => setshow(false)} dataCy='overlay' />

        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
        <p>adsf</p>
      </B>
    </>
  )
}

storiesOf('Misc-Utils|Overlay', module).add('variations', () => <Variations />)
