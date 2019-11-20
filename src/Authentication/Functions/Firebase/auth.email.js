import firebase from 'firebase/app'
import 'firebase/auth'

export default async ({ email = '', password = '' }) =>
  new Promise(async (resolve, reject) => {
    if (email !== '' && password !== '') {
      let userData

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
