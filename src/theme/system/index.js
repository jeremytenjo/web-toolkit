import decamelize from 'decamelize'

export default (props) => {
  const {
    styles,
    theme: { mediaQueries = { minWidth: [400, 700, 1200], minHeight: [400, 700] } },
  } = props
  const selectors = []
  mediaQueries.minWidth.unshift(0)
  mediaQueries.minHeight.unshift(0)

  const getString = ({ varName, key, value }) => {
    const _key = decamelize(key, '-')
    const isArray = Array.isArray(value)
    const _value = varName ? `var(--${varName}-${value})` : value
    if (!_key || !_value) return ''

    return isArray ? handleMediaQueries({ key, value, varName }) : `${_key}: ${_value};`
  }

  const handleMediaQueries = ({ key, value, varName }) => {
    let minWidthString = ''
    let minHeightString = ''
    let masterString = ''
    const _key = decamelize(key, '-')
    const mindWidthData = value.filter((val) => typeof val === 'string')
    const mindHeightData = value.filter((val) => Array.isArray(val))
    const getString_mq = (data, type = 'width') => {
      const queries = type === 'width' ? mediaQueries.minWidth : mediaQueries.minHeight
      let string = ''
      string = queries.map((width, index) => {
        const cValue = data[index]
        const _value = varName ? `var(--${varName}-${cValue})` : cValue
        const property = `${_key}: ${_value};`

        return width === 0
          ? property
          : cValue
          ? `@media (min-${type}: ${width}px) {       
          ${property}      
        }`
          : ''
      })

      string = string.join('\n')
      return string
    }

    minWidthString = mindWidthData.length ? getString_mq(mindWidthData, 'width') : ''
    minHeightString = mindHeightData.length
      ? getString_mq(mindHeightData[0], 'height')
      : ''
    masterString = minWidthString + minHeightString
    return masterString
  }

  const handleStyles = ({ styles }) => {
    const array = []
    let string = ''

    Object.entries(styles).forEach(([key, value]) => {
      if (key.includes(':')) {
        selectors.push({ selector: key, styles: value })
      } else if (
        key.includes('padding') ||
        key.includes('margin') ||
        key.includes('gap') ||
        key.includes('Gap') ||
        key.includes('top') ||
        key.includes('right') ||
        key.includes('bottom') ||
        key.includes('left')
      )
        array.push(getString({ varName: 'spacing', key, value }))
      else if (key.includes('color') || key.includes('Color') || key.includes('fill'))
        array.push(getString({ varName: 'color', key, value }))
      else array.push(getString({ key, value }))
    })

    string = array.join('\n')
    return string
  }

  const handleSelectors = () => {
    let masterString = ''
    if (selectors.length) {
      const se = selectors.map(({ selector, styles }) => {
        let string = `${selector} {`
        string += handleStyles({ styles })
        string += `}`
        return string
      })

      masterString = se.join('\n')
      return masterString
    }

    return masterString
  }

  const genStyles = handleStyles({ styles })

  const selectorStyles = handleSelectors({ selectors })

  return `${genStyles} ${selectorStyles}`
}
