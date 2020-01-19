import { node, bool } from 'prop-types'

export const defaultProps = {
  name: undefined,
  children: null,
  size: null,
  sticky: null,
  styles: {},
}

export const propTypes = {
  children: node,
  sticky: bool,
}
