import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Logo from '../../../../../.storybook/Images/logo.svg'

import AccessPage from './accessPage.index'

const Variations = () => (
  <>
    <B title='style 1' background style={{ position: 'fixed', height: '100%', width: '100%', padding: 0 }}>
      <AccessPage
        variation={1}
        onSuccess={(userInfo) => console.log(userInfo)}
        logo={Logo}
        name='Example'
        desc='Example auth page'
        service='firebase'
        providers={['apple', 'google', 'facebook']}
      />
    </B>
  </>
)

storiesOf('Authentication|AccessPage/Ui/React', module).add('variations', () => <Variations />)
