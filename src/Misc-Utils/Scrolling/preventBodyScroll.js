const body = document.querySelector('body')

export default (action = null) => {
  const setOverflow = action ? 'hidden' : 'auto'
  body.style.overflow = setOverflow
}
