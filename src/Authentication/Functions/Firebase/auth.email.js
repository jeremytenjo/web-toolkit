import firebase from 'firebase/app'
import 'firebase/auth'

import cmSave from '../WebApi/CredentialMangment/cm.save'

const actions = {
  login: async (email, password) =>
    await firebase.auth().signInWithEmailAndPassword(email, password),
  register: async (email, password) =>
    await firebase.auth().createUserWithEmailAndPassword(email, password),
}

export default async ({
  action = 'login',
  email = '',
  password = '',
  credentialManager = true,
}) =>
  new Promise(async (resolve, reject) => {
    if (email !== '' && password !== '') {
      try {
        const user = await actions[action]()

        credentialManager && cmSave(user)
        resolve({ user })
      } catch (err) {
        resolve({ error: err.message })
      }
    } else {
      reject('Please include an email and pasword')
    }
  })
