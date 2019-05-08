import ImageCompressor from 'image-compressor.js'

const ImagesFixRotation = (file) => {
  return new Promise((resolve, reject) => {
    new ImageCompressor(file, {
      checkOrientation: true,
      success(result) {
        resolve(result)
      },
      error(e) {
        reject(`Fix orientaition Failed ${e.message}`)
      },
    })
  })
}

export default ImagesFixRotation
