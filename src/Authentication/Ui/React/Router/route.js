import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ children, ...rest }) => {
  const isAuth = true
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
