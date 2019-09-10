import { node, array } from 'prop-types'

export const defaultProps = {
  name: undefined,
  display: 'grid',
  children: null,
  padding: 'xs',
  size: null,
  mediaQueries: [600, 900],
}

export const propTypes = {
  children: node,
  mediaQueries: array,
}
