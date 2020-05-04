const { wappDir } = require('../getModulePath')
const createFile = require('../createFile')
const { logSuccessMessage } = require('../logMessage')

module.exports = async () => {
    const successMessage = `Account generated`
    const providerName = `AuthProvider`
    const authImport = `@tenjojeremy/web-toolkit/authentication/useAuth`
    const outputFileProvider = wappDir('user/auth.state.js')
    const fileContentProvider = `
    import state, { ${providerName} } from '${authImport}'    

    export default state

    export { ${providerName} }
    `

      await createFile(outputFileProvider, fileContentProvider)
      logSuccessMessage(successMessage)
    
  
}
