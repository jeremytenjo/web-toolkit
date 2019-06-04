// Keyframes should be set before used in animate()
export default (el, config, show) => {
  const keyframes = [
    {
      opacity: show ? 0 : 1,
    },
    {
      opacity: show ? 1 : 0,
    },
  ]

  el.style.display = 'grid'
  const anim = el.animate(keyframes, config)
  anim.onfinish = () => {
    if (!show) el.style.display = 'none'
  }
}
