module.exports = (config)=>{
  if (config.measurementId) {
    return true
  } else {
    console.error('firebase/analytics error: forgot to add measurementId to firebase config')
    return false
  }

}