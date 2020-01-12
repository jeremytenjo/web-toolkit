import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/customComponents/variationBlock'

import useFetch from '..'

const GET = () => {
  const url = 'http://dummy.restapiexample.com/api/v1/employees'
  const { request, response, error } = useFetch({ url, method: 'get' })
  const req = async () => request()

  return (
    <B title='GET'>
      <button onClick={req}>GET</button>
      {response && ' is Working'}
      {error && ' is NO Working'}
    </B>
  )
}

const Dynamic = () => {
  const { request, response, error } = useFetch({ method: 'get' })
  const req = async () =>
    request({ url: 'http://dummy.restapiexample.com/api/v1/employees' })

  console.log(response)

  return (
    <B title='Dynamic url'>
      <button onClick={req}>Dynamic</button>
      {response && ' is Working'}
      {error && ' is NO Working'}
    </B>
  )
}

const POST = () => {
  // Working but have to replace url
  const url = 'http://dummy.restapiexample.com/api/v1/create '
  const body = { name: 'test', salary: '123', age: '23' }
  const { request, response, error } = useFetch({ url, method: 'post' })
  const req = async () => request({ body })

  return (
    <B title='POST'>
      <button onClick={req}>POST</button>
      {response && ' is Working'}
      {error && ` is NOT Working`}
    </B>
  )
}

const Variations = () => (
  <>
    <GET />
    <Dynamic />
    <POST />
  </>
)

storiesOf('Misc-Utilities|Fetching/Functions/React|', module).add('variations', () => (
  <Variations />
))
