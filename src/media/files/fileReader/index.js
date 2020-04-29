export default ({ file, method = 'readAsDataURL', fullCompress }) =>
  new Promise(async (resolve, reject) => {
    const fileToConvert = fullCompress ? await handleFullCompress(file) : file

    const fileReader = new FileReader()

    fileReader[method](fileToConvert)

    fileReader.onload = async (e) => {
      const base64 = e.target.result
      resolve(base64)
    }

    fileReader.onerror = (error) => {
      fileReader.abort()
      reject(error)
    }
  })

const handleFullCompress = (file) =>
  new Promise(async (resolve) => {
    const resize = await import('../../image/utils/resize/index')
    const fileResized = await resize.default(file, 100)
    const compress = await import('../../image/utils/compress/index')
    const fileCompressed = await compress.default(fileResized, 0.1)
    const blobToFile = new File([fileCompressed], fileCompressed.name, {
      type: fileCompressed.type,
      lastModified: Date.now(),
    })

    resolve(blobToFile)
  })
