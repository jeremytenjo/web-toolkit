import { string, func, number } from 'prop-types'

export const defaultProps = {
  color: 'primary-lighter',
  letterColor: 'primaryDarker',
  borderColor: null,
  name: 'N',
  src: null,
  paddedBorder: null,
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
