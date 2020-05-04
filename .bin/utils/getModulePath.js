const getProjectRoot = () => process.cwd()

exports.wappRootDir = (folder = 'bin/defaults') => __dirname.replace('bin\\utils', folder)

exports.projectDir = (path = '') => `${getProjectRoot()}/${path}`

exports.wappDir = (path = '') => `${getProjectRoot()}/src/.wapp/_${path}`

exports.buildDir = (path = '') => `${getProjectRoot()}/build/${path}`
