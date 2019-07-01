export default (el) => {
  const LOWEST_POINT = '0'
  const HEIGHEST_POINT = '-80px'
  const config = {
    fill: 'forwards',
    duration: 300,
    direction: 'normal',
    easing: 'ease-out',
  }

  const configEnd = {
    delay: 2400,
    fill: 'forwards',
    duration: 300,
    direction: 'normal',
    easing: 'ease-in',
  }

  el.style.display = 'flex'

  const keyframesStart = [
    {
      opacity: 0,
      transform: `translateY(${LOWEST_POINT})`,
    },
    {
      opacity: 1,
      transform: `translateY(${HEIGHEST_POINT})`,
    },
  ]

  const keyframesEnd = [
    {
      opacity: 1,
      transform: `translateY(${HEIGHEST_POINT})`,
    },
    {
      opacity: 0,
      transform: `translateY(${LOWEST_POINT})`,
    },
  ]

  el.animate(keyframesStart, config)
  const anim = el.animate(keyframesEnd, configEnd)

  anim.onfinish = () => {
    el.style.display = 'none'
  }
}
