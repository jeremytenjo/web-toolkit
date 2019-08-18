import decamelize from 'decamelize'

const themableStyles = {
  color: {
    names: ['color', 'backgroundColor'],
    value: (value) => `var(--color-${value})`,
  },
  spacing: {
    names: ['padding', 'paddingTop', 'paddingBottom', 'margin', 'gridGap'],
    value: (value) => `var(--spacing-${value})`,
  },
}

const getCssVar = (_key, _value) => {
  let string = _value
  for (let [key, value] of Object.entries(themableStyles)) {
    if (value.names.includes(_key)) string = `${value.value(_value)};`
  }
  return string
}

export default ({ styles, mediaQueries }) => {
  let string = ''

  for (let [key, value] of Object.entries(styles)) {
    const hasMediaQueries = Array.isArray(value) && key !== 'children'
    const singleValue = typeof value === 'string'
    if (hasMediaQueries) {
      value.map((val, index) => {
        string +=
          index === 0
            ? `${decamelize(key, '-')}: ${getCssVar(key, val)};`
            : `
        @media (min-width: ${mediaQueries[index]}px) {            
          ${decamelize(key, '-')}: ${getCssVar(key, val)};            
        }
        `
      })
    } else if (singleValue)
      string += `${decamelize(key, '-')}: ${getCssVar(key, value)};`
  }
  return string
}
