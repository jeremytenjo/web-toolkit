import { useState, useRef, useEffect } from 'react'

export default ({ url, method = 'get' }) => {
  const aborController = useRef(null)
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  useEffect(() => {
    initializeAbortController()
    return () => {
      fetching && abort()
    }
  }, [])

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

  const initializeAbortController = () => {
    aborController.current = abortControllerIsSupported ? new AbortController() : {}
  }

  const abort = () => {
    if (abortControllerIsSupported() && fetching) {
      aborController.current.abort()
      aborController.current = new AbortController()
    }
  }

  const abortControllerIsSupported = () => 'AbortController' in window

  return { fetching, request, error, response, abort }
}
