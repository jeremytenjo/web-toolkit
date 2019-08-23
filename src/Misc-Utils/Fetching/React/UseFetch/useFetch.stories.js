import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import useFetch from './useFetch.index'

const GET = () => {
  const getUrl = 'http://dummy.restapiexample.com/api/v1/employees'
  const { request, response } = useFetch({ url: getUrl, method: 'get' })
  const req = async () => request({ body: {} })

  return (
    <B title='GET'>
      <button onClick={req}>GET</button>
      {response && ' is Working'}
    </B>
  )
}

const POST = () => {
  const POSTUrl = 'http://dummy.restapiexample.com/api/v1/create '
  const body = { name: 'test', salary: '123', age: '23' }
  const { request, response } = useFetch({ url: POSTUrl, method: 'post' })
  const req = async () => request({ body })

  return (
    <B title='POST'>
      <button onClick={req}>POST</button>
      {response && ' is Working'}
    </B>
  )
}

const Variations = () => (
  <>
    <GET />
    <POST />
  </>
)

storiesOf('Misc-Utilities|Fetching/Functions/React|', module).add(
  'variations',
  () => <Variations />,
)
