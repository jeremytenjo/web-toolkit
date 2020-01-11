import React from 'react'
import styled from 'styled-components'

import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import ToastState, { ToastProvider } from '../base/toast.index'
import { useStyles } from '../../../../.storybook/Utils/useStyles'

const Children = () => {
  const { showToast } = ToastState()

  return (
    <>
      <B title='center'>
        <button
          onClick={() =>
            showToast({
              location: 'center',
              type: 'success',
              message: 'Added to watchlist',
            })
          }
        >
          Show
        </button>
      </B>
    </>
  )
}

export const Example = () => (
  <ToastProvider>
    <Children />
  </ToastProvider>
)

const Wrapper = styled.div`
  div {
    position: relative;
  }
`

const Variants = ({ Component: Toast }) => {
  return (
    <>
      <Wrapper>
        <B title={`type = success`} noBackground>
          <Toast />
        </B>

        <B title={`type = error`} noBackground>
          <Toast type='error' />
        </B>
      </Wrapper>
    </>
  )
}

export default () => {
  const req = require.context('../styles', true, /index.js$/)
  const { Elements } = useStyles({
    req,
    Variants,
    dir: 'feedback/toast',
  })

  return Elements
}
