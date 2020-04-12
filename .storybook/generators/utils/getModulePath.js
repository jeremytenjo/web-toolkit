const getProjectRoot = () => process.cwd()

exports.projectDir = (path = '') => `${getProjectRoot()}/${path}`
