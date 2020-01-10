import React, { useEffect, memo } from 'react'

import useAuth from '../../../../Authentication/useAuth'
import { Route, useHistory, Redirect } from '../index'

const AuthRoute = ({
  component,
  redirectUrl = '/account/login',
  children,
  ...rest
}) => {
  const { push } = useHistory()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) push(redirectUrl)
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
              pathname: redirectUrl,
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default memo(AuthRoute)
