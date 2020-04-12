const getProjectRoot = () => process.cwd()

module.exports = (folderName) => (path = '') =>
  `${getProjectRoot()}/src/${folderName}/${path}`
