export default ({ email, password, photoURL: iconURL, name }) =>
  new Promise(async (resolve, reject) => {
    const credentailApiSupported = window.PasswordCredential || window.FederatedCredential

    if (credentailApiSupported) {
      try {
        let cred = new window.PasswordCredential({
          id: email,
          email,
          password,
          name,
          iconURL,
        })

        await navigator.credentials.store(cred)
        resolve(true)
      } catch (e) {
        reject(`Failed to store credential: ${e}`)
      }
    } else {
      resolve(false)
    }
  })
