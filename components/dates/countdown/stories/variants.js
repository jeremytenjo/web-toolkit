import React from 'react'

import B from '../../../../.storybook/customComponents/variationBlock/index.js'
import Countdown from '../'

function addSeconds(days) {
  var result = new Date()
  result.setSeconds(result.getSeconds() + days)
  return result
}

const endDate = addSeconds(5)

export default () => {
  return (
    <>
      <B title={`endDate - 5 seconds from page load`}>
        <Countdown endDate={endDate} onTimeUp={() => console.log('times up')} />
      </B>
      <B title='seperator - :'>
        <Countdown separator=':' endDate={endDate} />
      </B>
      <B title='noText'>
        <Countdown noText separator=':' endDate={endDate} />
      </B>
    </>
  )
}
