const getProjectRoot = () => process.cwd()

exports.wappRootDir = (folder = 'defaults') => __dirname.replace('bin\\utils', folder)

exports.projectDir = (path = '') => {
  const { isTest } = global
  const dir = isTest ? `${getProjectRoot()}/testApp` : getProjectRoot()

  return `${dir}/${path}`
}

exports.wappDir = (path = '') => {
  const { isTest } = global
  const dir = isTest ? `/testApp` : ''

  return `${getProjectRoot()}${dir}/src/.wapp/_${path}`
}
exports.buildDir = (path = '') => `${getProjectRoot()}/build/${path}`
