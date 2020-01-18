import { node } from 'prop-types'

export const defaultProps = {
  name: undefined,
  children: null,
  size: null,
  styles: {},
}

export const propTypes = {
  children: node,
}
