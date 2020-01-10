import React, { useEffect, memo } from 'react'

import { Route, useHistory, Redirect } from '../../../Navigation/router/react'
import useAuth from '../../UseAuth/useAuth.index'

const CRoute = ({
  component,
  redirectTo = '/account/login',
  isPrivate = false,
  children,
  ...rest
}) => {
  const { push } = useHistory()
  const { user } = useAuth()
  const hasAccess = !isPrivate || user

  useEffect(() => {
    if (!user && isPrivate) push(redirectTo)
  }, [user])

  return (
    <Route
      {...rest}
      render={() =>
        hasAccess ? (
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

export default memo(CRoute)
