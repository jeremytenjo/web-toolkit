export default () => {
  const root = document.querySelector('#root')
  if (root.animate) {
    root.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
    })
  }
}
