let fixRotation = require('fix-image-rotation')

const ImagesFixRotation = async function(file) {
  let ArrayOfFilesToBeRotated = [file]
  let blobOfArray = await fixRotation.fixRotation(ArrayOfFilesToBeRotated)
  return blobOfArray
}

export default ImagesFixRotation
