const colors = require('./../defaults/theme/colors')
const { projectDir, wappDir } = require('./../utils/getModulePath')

const fonts = require(wappDir('fonts'))
const splashScreen = require(wappDir('splashScreen/splashScreen'))
const headCss = require(wappDir('theme'))
const extraBuildFiles = require(wappDir('extraBuildFiles'))
let bodyTag = require(wappDir('bodyTag'))
const wappManifest = require(projectDir('.wapp.manifest.js'))
const headTags = fonts
bodyTag = `${bodyTag}${splashScreen}`

const defaultManifest = {
  projectInfo: {
    name: 'App',
    shortName: 'App',
    description: 'App',
    startUrl: '/',
    colors,
    logo: {
      path: './bin/defaults/images/logo/',
    },
  },
  webpack: {
    devServer: {
      port: 3001,
    },
    entry: projectDir('src/_index.js'),
    plugins: {
      html: {
        bodyHtmlSnippet: bodyTag,
        headTags,
        headCss,
      },
      copy_webpack_plugin: extraBuildFiles,
    },
  },
}

module.exports = { ...defaultManifest, ...wappManifest }
