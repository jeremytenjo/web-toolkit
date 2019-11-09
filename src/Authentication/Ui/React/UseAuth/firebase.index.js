import React, { useState, createContext, useContext } from 'react'

import firebaseAuth from '../../../Functions/Firebase/auth.check'

export const FirebaseAuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [signinIng, setSignining] = useState(null)
  const [error, setError] = useState(null)

  let userRes = null
  let res = null
  let cmUser = null

  const attemptSignIn = async ({ redirectUrl = '/login' }) => {
    setSignining(true)

    userRes = await firebaseAuth()

    if (userRes) {
      const { uid, displayName, email, photoURL } = userRes

      res = {
        id: uid,
        name: displayName,
        email,
        photoURL,
      }
      return { res }
    } else {
      // Check Credential Manager if not Signed in fiebase
      const cmModule = await import(
        '../../../Functions/WebApi/CredentialMangment/cm.get'
      )
      cmUser = await cmModule.default()

      if (cmUser) {
        const { password } = cmUser

        const signInModule = await import('../../../Functions/auth.login')
        res = await signInModule.default({ email: cmUser.id, password })
        const { errMsg, user } = res

        setError(errMsg)
        setSignining(false)

        return { res: user, redirect: redirectUrl }
      } else {
        return { res: false }
      }
    }
  }

  return (
    <FirebaseAuthContext.Provider
      value={{
        attemptSignIn,
        signinIng,
        error,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  )
}

export default () => useContext(FirebaseAuthContext)
