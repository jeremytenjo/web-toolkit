import React, { useEffect, memo } from 'react'
import { Route, useHistory } from 'react-router-dom'

const CRoute = ({
  component,
  authState,
  redirectTo = '/login',
  isPrivate = false,
  ...rest
}) => {
  const { push } = useHistory()
  const { userInfo, attemptSignIn } = authState()
  const hasAccess = !isPrivate || userInfo
  const attemptLogin = userInfo === null && isPrivate

  useEffect(() => {
    if (attemptLogin) attemptSignIn()
  }, [attemptLogin])

  useEffect(() => {
    if (userInfo !== null && !userInfo) push(redirectTo)
  }, [userInfo])

  return <Route {...rest} render={() => (hasAccess ? component() : null)} />
}

export default memo(CRoute)
