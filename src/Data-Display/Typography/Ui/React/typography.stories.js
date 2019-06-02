import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Typography from './typography.index'

const Variatons = () => (
  <>
    <B>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <Typography variant='h1' text='Header 1' />
        <Typography variant='h2' text='Header 2' />
        <Typography variant='h3' text='Header 3' />
        <Typography variant='h4' text='Header 4' />
        <Typography variant='h5' text='Header 5' />
        <Typography variant='h6' text='Header 6' />
        <Typography variant='subtitle1' text='Subtitle 1' />
        <Typography variant='subtitle2' text='Subtitle 2' />
        <Typography variant='body1' text='Body 1' />
        <Typography variant='body2' text='Body 2' />
        <Typography variant='button' text='Button' />
        <Typography variant='caption' text='Caption' />
        <Typography variant='overline' text='Overline' />
      </div>
    </B>
  </>
)

storiesOf('Data-display|Typography|React', module).add('Variations', () => (
  <Variatons />
))
