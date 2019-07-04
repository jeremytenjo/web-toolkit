import { number, func, string } from 'prop-types'

export const defaultProps = {
  textFieldStyle: 1,
  rating: 5,
  city: '',
  photoUrl: null,
  onContactClick: () => null,
  onAvatarClick: () => null,
}

export const propTypes = {
  textFieldStyle: number,
  rating: number,
  city: string,
  photoUrl: string,
  onContactClick: func,
  onAvatarClick: func,
}
