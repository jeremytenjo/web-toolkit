import firebase from 'firebase/app'

let provider = new firebase.auth.GoogleAuthProvider()

export default async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider)
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
