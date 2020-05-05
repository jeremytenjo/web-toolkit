const getProjectRoot = () => process.cwd()

exports.wappRootDir = (folder = 'defaults') => __dirname.replace('utils', folder)

exports.projectDir = (path = '', _isTest) => {
  const { isTest } = global
  const dir = isTest || _isTest ? `${getProjectRoot()}/.testApp` : getProjectRoot()

  return `${dir}/${path}`
}

exports.wappDir = (path = '', _isTest) => {
  const { isTest } = global
  const dir = isTest || _isTest ? `/.testApp` : ''

  return `${getProjectRoot()}${dir}/src/.wapp/_${path}`
}
exports.buildDir = (path = '') => `${getProjectRoot()}/build/${path}`
