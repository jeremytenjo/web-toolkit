import { array, node, func, oneOfType, string } from 'prop-types'

export const defaultProps = {
  data: [],
  children: null,
  opacity: '1',
}

export const propTypes = {
  data: array.isRequired,
  children: oneOfType([node, func]),
  opacity: string,
}