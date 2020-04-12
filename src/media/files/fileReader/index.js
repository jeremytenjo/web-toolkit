export default (file) =>
  new Promise((resolve, reject) => {
    let fileReader = new FileReader()
    fileReader.onload = function(e) {
      const fileUrl = e.target.result
      resolve(fileUrl)
    }
    fileReader.onerror = (error) => {
      fileReader.abort()
      reject(error)
    }
    fileReader.readAsDataURL(file)
  })
