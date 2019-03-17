// Vendors
import ImageCompressor from 'image-compressor.js'

const CompressImage = (file) => {
  return new Promise((resolve, reject) => {
    new ImageCompressor(file, {
      quality: 0.5,
      success(result) {
        resolve(result)
      },
      error(e) {
        reject('Compression Failed ' + e.message)
      },
    })
  })
}

export default CompressImage
