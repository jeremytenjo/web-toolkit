import { array, func, object } from 'prop-types'

export const defaultProps = {
  options: [],
  iconWrapperStyles: null,
  itemProps: {},
  iconProps: {},
  onSelect: () => null,
}

export const propTypes = {
  type: array,
  iconProps: object,
  itemProps: object,
  onClick: func,
}
