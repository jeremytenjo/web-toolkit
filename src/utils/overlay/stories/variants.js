import React, { useState } from 'react'

import B from '../../../../.storybook/customComponents/variationBlock'
import Button from '../../../input/button/styles/base'

import Overlay from '..'

export default () => {
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
