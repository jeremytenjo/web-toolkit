import { number, node, string } from 'prop-types'

export const defaultProps = {
  padding: 's',
  children: 10,
  color: 'black',
}

export const propTypes = {
  padding: number,
  children: node,
  color: string,
}
