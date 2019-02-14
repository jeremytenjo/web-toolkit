// Vendors
import ImageCompressor from 'image-compressor.js'

export default (file) => {
  return new Promise((resolve, reject) => {
    new ImageCompressor(file, {
      quality: 0.5,
      success(result) {
        resolve(result)
      },
      error(e) {
        new Error('Compression Failed ' + e.message)
        resolve(false)
      }
    })
  })
}
