import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import ToastState, { ToastProvider } from './toast.index'

const toatsReq = require.context('./Styles', true, /.js$/)
const toatsPaths = toatsReq.keys()

// Real life example
const Children = () => {
  const { showToast } = ToastState()

  return (
    <>
      <B style={{ position: 'top', bottom: 0 }}>
        <button onClick={() => showToast({ type: 'success', message: 'Added to watchlist' })}>Show</button>
      </B>

      <B title='center' style={{ position: 'top', bottom: 0 }}>
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

// Style Variations
const Styles = () => {
  const [vars, setvars] = useState([])
  useEffect(() => {
    getStyles(toatsPaths)
  }, [])
  const getStyles = async (paths) => {
    const Elements = paths.map(async (location) => {
      let styleNumber = location.split('.')[2]
      let title = `Style ${styleNumber}`
      const loc = location.substring(1)
      let Mod = await import(`./Styles${loc}`)
      Mod = Mod.default
      return (
        <>
          <B title={title} key={title} noBackground>
            <Mod />
          </B>
        </>
      )
    })
    setvars(await Promise.all(Elements))
  }
  return <div style={{ display: 'grid', gridAutoFlow: 'column' }}>{vars}</div>
}

storiesOf('Feedback/Notifications/Toast', module)
  .add('Styles', () => <Styles />)
  .add('Default', () => (
    <ToastProvider>
      <Children />
    </ToastProvider>
  ))
