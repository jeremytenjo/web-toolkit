import { string, func, array } from 'prop-types'

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
  initialValue: string,
  onChange: func,
}
