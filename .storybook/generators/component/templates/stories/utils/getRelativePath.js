const FileHound = require('filehound')
const path = require('path')

const { projectDir } = require('../../../../utils/getModulePath')

module.exports = async (callerPath, fileName) => {
  const files = await FileHound.create()
    .paths(projectDir())
    .glob([`*${fileName}*`])
    .findSync()

  const file = files[0] || fileName
  const relativePath = path.relative(callerPath, file)

  return relativePath
}
