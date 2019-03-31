import { array, node, func, oneOfType } from 'prop-types'

export const defaultProps = {
  data: [],
  children: null,
}

export const propTypes = {
  data: array.isRequired,
  children: oneOfType([node, func]),
}
