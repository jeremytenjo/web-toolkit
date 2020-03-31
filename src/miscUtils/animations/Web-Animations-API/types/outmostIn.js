// Keyframes should be set before used in animate()
export default ({ el, config, show, direction = 'bottomUp', returnsOnEnd }) => {
  const LOWEST_POINT = '0'
  const HEIGHEST_POINT = '-80px'
  const configEnd = {
    delay: 2400,
    fill: 'forwards',
    duration: 300,
    direction: 'normal',
    easing: 'ease-in',
  }
  const configEndQuick = { ...configEnd, delay: 0, duration: 200 }
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

  if (!el.animate) el.style.transition = '0.2s'

  el.style.display = 'block'
  el.style.position = 'fixed'

  if (direction === 'bottomUp') {
    el.style.right = 0
    el.style.bottom = 0
    el.style.left = 0
    el.style.margin = '0 auto'
  }

  if (el.animate) {
    if (show) el.animate(keyframesStart, config)

    if (!returnsOnEnd && show !== null && !show) {
      const anim = el.animate(keyframesEnd, configEndQuick)
      anim.onfinish = () => (el.style.display = 'none')
    }

    if (returnsOnEnd) {
      const anim = el.animate(keyframesEnd, configEnd)
      anim.onfinish = () => {
        if (!show) el.style.display = 'none'
      }
    }
  } else {
    if (!show) el.style.display = 'none'
  }
}
