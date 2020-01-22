import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Button from '../../../input/button/styles/base/index'
import Overlay from '../'

const Variations = () => {
  const [show, setshow] = useState(null)
  return (
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
  )
}

storiesOf('Misc-Utils|Overlay', module).add('variations', () => <Variations />)
