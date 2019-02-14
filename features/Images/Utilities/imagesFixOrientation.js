import LoadImage from 'blueimp-load-image'
import findOrientation from 'exif-orientation'
let fixRotation = require('fix-image-rotation')

const myRotationFunction = async function(file) {
  let ArrayOfFilesToBeRotated = [file]
  let blobOfArray = await fixRotation.fixRotation(ArrayOfFilesToBeRotated)
  return blobOfArray
}

export default myRotationFunction

// import LoadImage from 'blueimp-load-image'
// const f = (file) => {
//   let fixedImage = LoadImage(
//     file,
//     (canvas) => {
//       //here's the base64 data result
//       let base64data = canvas.toDataURL('image/jpeg')
//       // return base64data.replace(/^data\:image\/\w+\;base64\,/, '')
//       var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '')
//       console.log(img_src)
//       document.querySelector('#imageas').src = base64data
//     },
//     {
//       //should be set to canvas : true to activate auto fix orientation
//       canvas: true
//     }
//   )
// }

// export default f
