const { existsSync, readFile } = require('fs-extra')
const svgo = require('svgo')
const { convertFile: convertToPNG } = require('convert-svg-to-png')

const { projectDir, wappDir } = require('../utils/getModulePath')
const createFile = require('../utils/createFile')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async ({
  wappManifest: {
    projectInfo: {
      logo: { path },
    },
  },
}) => {
  const svgFile = projectDir(`src/images/logo/logo.svg`)
  const pngFile = projectDir(`src/images/logo/logo.png`)
  const pngExists = existsSync(pngFile)
  const createdToPNGMessage = `logo.png created`
  const createdSplashMessage = `Splash Screen created`
  const svgContent = await readFile(svgFile)
  const outputFile = wappDir('splashScreen/splashScreen.js')
  const editSVG = new svgo({
    plugins: [
      {
        addAttributesToSVGElement: {
          attributes: [
            'id="splashScreen"',
            'style="position:fixed;left:50%;top:50%;transform:translate(-50%, -50%);"',
          ],
        },
      },
    ],
  })
  const { data: editedSVG } = await editSVG.optimize(svgContent, { path: svgFile })
  const splashScreenEl = `module.exports = ${'`'}${editedSVG}${'`'}`
  const hideFunctionFileDir = wappDir('splashScreen/hideSplashScreen.js')
  const hideFunctionFile = `
  export default () => {
    const splashScreen = document.getElementById('splashScreen')

    if (splashScreen) {
      splashScreen.style.zIndex = 9999999999999
      const animationApiIsSupported = splashScreen.animate
      const removeSplashScreen = () => splashScreen.remove()
  
      if (animationApiIsSupported) {
        const animationId = splashScreen.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 100,
          fill: 'forwards',
        })
        animationId.onfinish = () => removeSplashScreen()
      } else removeSplashScreen()
    }
  }
  `
  const convertToPngOptions = { width: 512, height: 512 }

  if (!pngExists) {
    await convertToPNG(svgFile, convertToPngOptions)
    logSuccessMessage(createdToPNGMessage)
  }

  await createFile(outputFile, splashScreenEl)
  await createFile(hideFunctionFileDir, hideFunctionFile)

  logSuccessMessage(createdSplashMessage)
}
