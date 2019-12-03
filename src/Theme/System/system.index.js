import decamelize from 'decamelize'

export default (props) => {
  const {
    theme: { mediaQueries },
  } = props

  Object.entries(props).forEach(([key, value]) => {
    if (
      key.includes('padding') ||
      key.includes('margin') ||
      key.includes('gap')
    )
      return getString({ varName: 'spacing', key, value })
    else if (key.includes('color'))
      return getString({ varName: 'color', key, value })
    else if (key === 'mediaQueries') return ''
    else {
      getString(key, value)
    }
  })

  const getString = (varName, key, value) => {
    const isArray = value.isArray()
    return isArray
      ? handleMediaQueries({ key, value, varName })
      : `${decamelize(key, '-')}: var(--${varName}-${value});`
  }

  const handleMediaQueries = ({ key, value, varName }) => {
    let string = ''
    const _value = varName ? `var(--${varName}-${value})` : value
    const _key = decamelize(key, '-')

    string = mediaQueries.map((item, index) => {
      return `@media (min-width: ${mediaQueries[index]}px) {            
        ${_key}: ${_value};       
      }`
    })
    string = string.join('\n')
    return string
  }
}
