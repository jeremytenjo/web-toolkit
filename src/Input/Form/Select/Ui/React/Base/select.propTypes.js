import { string, func, array, oneOfType, number } from 'prop-types'

export const defaultProps = {
  data: [],
  valueKey: 'value',
  labelKey: 'label',
  initialValue: null,
  onChange: () => null,
}

export const propTypes = {
  data: array,
  valueKey: string,
  labelKey: string,
  initialValue: oneOfType([string, number]),
  onChange: func,
}
