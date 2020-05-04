import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>Add pages routes in ./src/pages/_router</Suspense>
    </BrowserRouter>
  )
}

export default RouterWrapper
