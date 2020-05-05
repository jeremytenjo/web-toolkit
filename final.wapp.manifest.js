const isTest = process.argv[2] === 'test'

const colors = require('./defaults/theme/colors')
const { projectDir, wappDir, wappRootDir } = require('./utils/getModulePath')

const fonts = require(wappDir(`fonts`, isTest))
const splashScreen = require(wappDir('splashScreen/splashScreen', isTest))
const headCss = require(wappDir('theme', isTest))
const extraBuildFiles = require(wappDir('extraBuildFiles', isTest))
let bodyTag = require(wappDir('bodyTag', isTest))
const wappManifest = require(projectDir('.wapp.manifest.js', isTest))
const headTags = fonts
bodyTag = `${bodyTag}${splashScreen}`

const defaultWappManifest = {
  projectInfo: {
    name: 'App',
    shortName: 'App',
    description: 'App',
    startUrl: '/',
    colors,
    logo: {
      path: './defaults/images/logo/',
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

module.exports = { ...defaultWappManifest, ...wappManifest }
