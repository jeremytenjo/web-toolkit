import { string, number } from 'prop-types'

export const defaultProps = {
  photoURL: '',
  name: '',
  rating: 5,
  location: '',
}

export const propTypes = {
  photoURL: string,
  name: string,
  rating: number,
  location: string,
}
