import { node, string } from 'prop-types'

export const defaultProps = {
  padding: 's',
  children: 10,
  color: 'black',
}

export const propTypes = {
  padding: string,
  children: node,
  color: string,
}
