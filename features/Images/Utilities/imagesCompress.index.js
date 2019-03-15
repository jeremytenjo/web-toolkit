// Vendors
import ImageCompressor from 'image-compressor.js'

const ImagesCompress = (file) => {
  return new Promise((resolve) => {
    new ImageCompressor(file, {
      quality: 0.5,
      success(result) {
        resolve(result)
      },
      error(e) {
        new Error('Compression Failed ' + e.message)
        resolve(false)
      },
    })
  })
}

export default ImagesCompress
