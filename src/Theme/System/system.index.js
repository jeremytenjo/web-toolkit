import decamelize from 'decamelize'

export default (props) => {
  const {
    styles,
    theme: { mediaQueries = [700, 1200] },
  } = props
  const array = []
  let string = ''

  const getString = ({ varName, key, value }) => {
    const _key = decamelize(key, '-')
    const isArray = Array.isArray(value)
    const _value = varName ? `var(--${varName}-${value})` : value

    return isArray
      ? handleMediaQueries({ key, value, varName })
      : `${_key}: ${_value};`
  }

  const handleMediaQueries = ({ key, value, varName }) => {
    let string = ''
    const _key = decamelize(key, '-')

    string = mediaQueries.map((item, index) => {
      const cValue = value[index]
      const _value = varName ? `var(--${varName}-${cValue})` : cValue

      return `@media (min-width: ${mediaQueries[index]}px) {       
        ${_key}: ${_value};       
      }`
    })
    string = string.join('\n')
    return string
  }
  Object.entries(styles).forEach(([key, value]) => {
    if (
      key.includes('padding') ||
      key.includes('margin') ||
      key.includes('gap')
    )
      array.push(getString({ varName: 'spacing', key, value }))
    else if (key.includes('color'))
      array.push(getString({ varName: 'color', key, value }))
    else array.push(getString({ key, value }))
  })

  string = array.join('\n')

  return string
}
