import { node } from 'prop-types'

export const defaultProps = {
  name: undefined,
  children: null,
  size: null,
  styles: {
    padding: 'xs',
    display: 'grid',
  },
}

export const propTypes = {
  children: node,
}
