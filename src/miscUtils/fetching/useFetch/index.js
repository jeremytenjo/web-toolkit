import { useState, useRef } from 'react'

export default ({ url, method = 'get' }) => {
  const aborController = useRef(new AbortController())
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  const request = async (params = {}) => {
    const {
      body = null,
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      url: dynamicUrl = url,
    } = params

    try {
      setFetching(true)
      let res = null
      if (method === 'get') {
        res = await fetch(dynamicUrl, { signal: aborController.current.signal })
        res = await res.json()
      } else {
        res = await fetch(dynamicUrl, {
          headers,
          method,
          body: JSON.stringify(body),
        })
        res = await res.json()
      }
      setResponse(res)
      return res
    } catch (error) {
      if (error.name === 'AbortError') {
        setResponse(false)
        return { aborted: true }
      } else {
        setError()
        return { error }
      }
    } finally {
      setFetching(false)
    }
  }

  const abort = () => {
    if ('AbortController' in window) {
      fetching && aborController.current.abort()
    }
  }

  return { fetching, request, error, response, abort }
}
