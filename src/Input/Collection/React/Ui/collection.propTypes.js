import { number, array, func, string } from 'prop-types'

export const defaultProps = {
  textFieldStyle: 1,
  initialData: [],
  rating: 5,
  city: '',
  photoUrl: null,
  onContactClick: () => null,
  onAvatarClick: () => null,
}

export const propTypes = {
  textFieldStyle: number,
  initialData: array,
  city: string,
  photoUrl: string,
  onContactClick: func,
  onAvatarClick: func,
}
