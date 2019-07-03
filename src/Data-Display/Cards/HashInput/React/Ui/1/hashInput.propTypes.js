import { number, func, string } from 'prop-types'

export const defaultProps = {
  name: 'Name',
  rating: 5,
  city: '',
  photoUrl: null,
  onContactClick: () => null,
  onAvatarClick: () => null,
}

export const propTypes = {
  name: string,
  rating: number,
  city: string,
  photoUrl: string,
  onContactClick: func,
  onAvatarClick: func,
}
