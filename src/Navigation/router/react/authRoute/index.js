import React, { useEffect, memo } from 'react'

import useAuth from '../../../../Authentication/useAuth'
import { Route, useHistory, Redirect } from '../index'

const CRoute = ({
  component,
  redirectTo = '/account/login',
  isPrivate = false,
  children,
  ...rest
}) => {
  console.log({ useAuth })

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
