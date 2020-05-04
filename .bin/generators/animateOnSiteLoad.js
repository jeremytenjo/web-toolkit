const { wappDir } = require('../utils/getModulePath')
const createFile = require('../utils/createFile')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async ({ wappManifest: { animateOnSiteLoad } }) => {
  const animateOnSiteLoadSetToFalse = animateOnSiteLoad === false
  const defaultAnimationDuration = 500
  const animationDuration = animateOnSiteLoad || defaultAnimationDuration
  const createdSplashMessage = `animateOnSiteLoad created`
  const hideFunctionFileDir = wappDir('animateOnSiteLoad/animateOnSiteLoad.js')
  const hideFunctionFile = `
  export default () => {
   ${
     !animateOnSiteLoadSetToFalse
       ? ` const root = document.querySelector('#root')
    if (root.animate) {
      root.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: ${animationDuration},
      })
    }`
       : ''
   }  
  }
  `

  await createFile(hideFunctionFileDir, hideFunctionFile)

  logSuccessMessage(createdSplashMessage)
}
