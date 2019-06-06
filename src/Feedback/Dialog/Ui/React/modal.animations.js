import onlyOpacity from '../../../../Misc-Utils/Animations/animation.onlyOpacity'
import centerOut from '../../../../Misc-Utils/Animations/animation.centerOut'

const config = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out',
}

const ModalAnimation = (el, animationStyle, show) => {
  switch (animationStyle) {
    case 'centerOut':
      return centerOut(el, config, show)
    case 'onlyOpacity':
      return onlyOpacity(el, config, show)
    default:
      return centerOut
  }
}

export default ModalAnimation
