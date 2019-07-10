// import { useState } from 'react'
// import { stringify } from 'qs'
// import req from 'superagent'
// import get from 'lodash/get'

// const API_PATH = '/api'

// export default function useApi(route, method = 'get') {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [response, setResponse] = useState(null)

//   async function request(body) {
//     try {
//       setLoading(true)
//       let res
//       if (method === 'get') {
//         const queryString = body ? `/?${stringify(body)}` : ''
//         res = await req.get(`${API_PATH}${route}${queryString}`)
//       } else {
//         res = await req[method](`${API_PATH}${route}`).send(body)
//       }
//       setResponse(res.body)
//       return response
//     } catch (e) {
//       const errBody = get(e, 'response.body', e)
//       setError(errBody)
//       return Promise.resolve({
//         FORM_ERROR: 'nope',
//       })
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { loading, request, error, response }
// }
