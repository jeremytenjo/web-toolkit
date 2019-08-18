import firebase from 'firebase/app'

const getProviderMethod = (provider) => {
  let method
  switch (provider) {
    case 'google':
      method = new firebase.auth.GoogleAuthProvider()
      break
    case 'facebook':
      method = new firebase.auth.FacebookAuthProvider()
      break

    default:
      method = new firebase.auth.GoogleAuthProvider()
      break
  }
  return method
}

export default async (provider) => {
  try {
    const providerMethod = getProviderMethod(provider)
    const result = await firebase.auth().signInWithPopup(providerMethod)
    return { token: result.credential.accessToken, user: result.user }
  } catch (error) {
    return {
      error: {
        errorCode: error.code,
        errorMessage: error.message,
        email: error.email,
        credential: error.credential,
      },
    }
  }
}
