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
  const components = component ? component() : children
  const redirectProps = { to: { pathname: redirectUrl } }

  useEffect(() => {
    if (!user) push(redirectUrl)
  }, [user])

  return (
    <Route
      {...rest}
      render={() => (user ? components : <Redirect {...redirectProps} />)}
    />
  )
}

export default memo(AuthRoute)
