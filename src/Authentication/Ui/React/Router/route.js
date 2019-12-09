import React, { useEffect, memo } from 'react'
import { Route, useHistory } from 'react-router-dom'

const CRoute = ({ component, authState, redirectTo = '/login', isPrivate = false, ...rest }) => {
  const history = useHistory()
  const { userInfo, attemptSignIn } = authState()
  const hasAccess = !isPrivate || userInfo
  const attemptLogin = userInfo === null && isPrivate

  useEffect(() => {
    if (attemptLogin) attemptSignIn()
    if (userInfo !== null && !userInfo) history.push(redirectTo)
  }, [attemptLogin, userInfo])

  return <Route {...rest} render={() => (hasAccess ? component() : null)} />
}

export default memo(CRoute)
