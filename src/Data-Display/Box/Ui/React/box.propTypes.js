import { node, array } from 'prop-types'

export const defaultProps = {
  display: 'grid',
  children: null,
  mediaQueries: [600, 900],
}

export const propTypes = {
  children: node,
  mediaQueries: array,
}
