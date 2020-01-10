import React, { useEffect, memo } from 'react'

import useAuth from '../../../../Authentication/useAuth'
import { Route, useHistory, Redirect } from '../index'

const AuthRoute = ({
  component,
  redirectTo = '/account/login',
  children,
  ...rest
}) => {
  const { push } = useHistory()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) push(redirectTo)
  }, [user])

  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          component ? (
            component()
          ) : (
            children
          )
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default memo(AuthRoute)
