export default () => {
  const splashScreen = document.getElementById('splashScreen')

  if (splashScreen) {
    splashScreen.style.zIndex = 9999999999999
    const animationApiIsSupported = splashScreen.animate
    const removeSplashScreen = () => splashScreen.remove()

    if (animationApiIsSupported) {
      const animationId = splashScreen.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 100,
        fill: 'forwards',
      })
      animationId.onfinish = () => removeSplashScreen()
    } else removeSplashScreen()
  }
}
