import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const authFunc = () => true
const useAuth = () => true
export default async ({ children, auth = true, ...rest }) => {
  const hasAuthed = useAuth
  let isAuth = true

  if (auth && !hasAuthed) {
    isAuth = await authFunc()
  }

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
