import { useState } from 'react'

export default ({ url, method = 'get' }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  const request = async (params) => {
    const {
      body = null,
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    } = params || {}

    try {
      setLoading(true)
      let res = null
      if (method === 'get') {
        res = await fetch(url)
        res = await res.json()
      } else {
        res = await fetch(url, {
          headers,
          method,
          body: JSON.stringify(body),
        })
        res = res.json()
      }
      setResponse(res)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  return { loading, request, error, response }
}
