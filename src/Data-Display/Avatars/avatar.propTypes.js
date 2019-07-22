import { string, func, number } from 'prop-types'

export const defaultProps = {
  color: 'primary-background',
  letterColor: 'primary-darker',
  borderColor: null,
  name: 'N',
  src: null,
  size: 80,
  radius: 100,
  onClick: () => null,
}

export const propTypes = {
  color: string,
  name: string,
  letterColor: string,
  src: string,
  size: number,
  radius: number,
  onClick: func,
}
