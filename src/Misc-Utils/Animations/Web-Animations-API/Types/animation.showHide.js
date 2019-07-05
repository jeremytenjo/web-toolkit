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

  el.style[keepSpace] = displayValuetypeShow
  const start = {
    opacity: show ? 0 : 1,
    [keepSpace]: displayValuetypeHide,
  }
  const to = {
    opacity: show ? 1 : 0,
    [keepSpace]: displayValuetypeShow,
  }

  const anim = el.animate([start, to], config)

  anim.onfinish = () => {
    if (!show) el.style[keepSpace] = displayValuetypeHide
  }
}
