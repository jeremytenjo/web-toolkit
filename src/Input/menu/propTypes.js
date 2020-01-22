import { array, func, object } from 'prop-types'

export const defaultProps = {
  options: [],
  itemProps: {},
  iconProps: {
    name: 'options/material',
  },
  onSelect: () => null,
}

export const propTypes = {
  type: array,
  iconProps: object,
  itemProps: object,
  onClick: func,
}
