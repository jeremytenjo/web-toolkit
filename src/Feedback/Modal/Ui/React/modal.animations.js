import animation from '../../../../Misc-Utils/Animations/Web-Animations-API/animation.index'

const config = {
  fill: 'forwards',
  duration: 200,
  direction: 'normal',
  easing: 'ease-out',
}

const ModalAnimation = (el, animationStyle, show) =>
  animation(
    animation({
      name: animationStyle,
      el,
      config,
      show,
    }),
  )

export default ModalAnimation
