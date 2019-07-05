export default ({
  el,
  show,
  fill = 'forwards',
  duration = 200,
  keepSpace = null,
}) => {
  const config = { fill, duration }
  const displayType = keepSpace ? 'visibility' : 'display'
  const displayValuetypeShow = keepSpace ? 'visible' : 'block'
  const displayValuetypeHide = keepSpace ? 'hidden' : 'none'

  const current = el.style[keepSpace]

  const start = {
    opacity: show ? 0 : 1,
    [displayType]: displayValuetypeHide,
  }

  const to = {
    opacity: show ? 1 : 0,
    [displayType]: displayValuetypeShow,
  }

  if (
    (show !== true && current !== 'none') ||
    (show !== false && current !== 'block')
  ) {
    const anim = el.animate([start, to], config)
    anim.onfinish = () => {
      if (!show) el.style[keepSpace] = displayValuetypeHide
      if (show) el.style[keepSpace] = displayValuetypeShow
    }
  }
}
