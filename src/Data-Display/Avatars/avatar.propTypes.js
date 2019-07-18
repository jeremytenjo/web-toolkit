import { string, func, number } from 'prop-types'

export const defaultProps = {
  type: 'primary-background',
  borderColor: 'primary',
  name: 'N',
  photoUrl: null,
  size: 80,
  radius: 100,
  onClick: () => null,
}

export const propTypes = {
  type: string,
  name: string,
  photoUrl: string,
  size: number,
  radius: number,
  onClick: func,
}
