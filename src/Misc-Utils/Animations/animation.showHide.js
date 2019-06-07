export default ({ el, show, fill = 'forwards', duration = 200 }) => {
  const config = { fill, duration }

  el.style.display = 'block'
  const start = {
    opacity: show ? 0 : 1,
    display: 'none',
  }
  const to = {
    opacity: show ? 1 : 0,
    display: 'block',
  }

  const anim = el.animate([start, to], config)

  anim.onfinish = () => {
    if (!show) el.style.display = 'none'
  }
}
