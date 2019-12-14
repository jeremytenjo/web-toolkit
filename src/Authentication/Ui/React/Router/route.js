import React, { useEffect, memo } from 'react'
import { Route, useHistory, Redirect } from 'react-router-dom'

import useAuth from '../UseAuth/useAuth.index'

const CRoute = ({ component, redirectTo = '/login', isPrivate = false, ...rest }) => {
  const { push } = useHistory()
  const { user, check } = useAuth()
  const hasAccess = !isPrivate || user
  const checkLogin = user === null && isPrivate

  useEffect(() => {
    if (checkLogin) check()
  }, [checkLogin])

  useEffect(() => {
    if (user !== null && !user) push(redirectTo)
  }, [user])

  return (
    <Route
      {...rest}
      render={() =>
        hasAccess ? (
          component()
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
