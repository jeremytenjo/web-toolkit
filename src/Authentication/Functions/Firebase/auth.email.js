import firebase from 'firebase/app'
import 'firebase/auth'

export default async (_email, _password) => {
  return new Promise(async (resolve, reject) => {
    const email = _email || ''
    const password = _password || ''
    let userData

    if (email !== '' && password !== '') {
      try {
        userData = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)

        resolve({ type: true, userData })
      } catch (err) {
        resolve({ type: false, errMsg: err.message })
      }
    } else {
      reject('Please include an email and pasword')
    }
  })
}
