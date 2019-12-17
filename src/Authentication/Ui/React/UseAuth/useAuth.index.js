import React, { useState, createContext, useContext } from 'react'

import saveToCredentialManager from '../../../Functions/WebApi/CredentialMangment/cm.save'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children, service = 'firebase' }) => {
  const [user, setUser] = useState(null)
  const [signingIn, setSigningIn] = useState(null)
  const [error, setError] = useState(null)

  const signIn = async ({ provider = 'email', credentials, action = 'login' }) => {
    setSigningIn(true)
    const search = provider === 'email' ? 'email' : 'social'
    const signIn = await import(`../../../Functions/${service}/auth.${search}`)
    const {
      error: signInError,
      user: signedInUser,
      credentialManagerData,
    } = await signIn.default({
      provider,
      action,
      credentials,
    })

    if (signedInUser) {
      setUser(signedInUser)
      saveToCredentialManager(credentialManagerData)
    } else if (signInError) {
      setError(signInError)
    }

    setSigningIn(false)
  }

  const check = async () => {
    const authCheck = await import(`../../../Functions/${service}/auth.check`)
    const { user: userRes } = await authCheck.default()

    if (userRes) {
      setUser(userRes)
      saveToCredentialManager(userRes)
    } else {
      // Check Credential Manager if not Signed in
      const cmModule = await import('../../../Functions/WebApi/CredentialMangment/cm.get')
      const { user: cmUser } = await cmModule.default()

      return cmUser
    }
  }

  const signOut = async () => {
    const signOutFunc = await import(`../../../Functions/${service}/auth.signOut`)
    await signOutFunc.default()

    setUser(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signingIn,
        check,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default () => useContext(AuthContext)
