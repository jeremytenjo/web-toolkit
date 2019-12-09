import React, { useState, createContext, useContext } from 'react'

import checkAuth from '../../../Functions/Firebase/auth.check'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [userInfo, setuserInfo] = useState(null)
  const [signinIng, setSignining] = useState(null)
  const [error, setError] = useState(null)

  let userRes = null
  let res = null
  let cmUser = null

  const attemptSignIn = async () => {
    setSignining(true)

    userRes = await checkAuth()

    if (userRes) {
      const { uid, displayName, email, photoURL } = userRes

      res = {
        id: uid,
        name: displayName,
        email,
        photoURL,
      }

      setuserInfo(res)
    } else {
      // Check Credential Manager if not Signed in fiebase
      const cmModule = await import('../../../Functions/WebApi/CredentialMangment/cm.get')
      cmUser = await cmModule.default()

      if (cmUser) {
        const { password } = cmUser
        const signInModule = await import('../../../Functions/auth.login')
        res = await signInModule.default({ email: cmUser.id, password })
        const { errMsg, user } = res

        setError(errMsg)
        setuserInfo(user)
      }
    }
    setSignining(false)
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        attemptSignIn,
        signinIng,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default () => useContext(AuthContext)
