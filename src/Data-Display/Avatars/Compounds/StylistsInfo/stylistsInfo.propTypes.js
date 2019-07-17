import { string, func, number, oneOfType } from 'prop-types'

export const defaultProps = {
  name: '',
  photoUrl: '',
  id: '',
  rating: 0,
  onClick: () => null,
  router: window.historyRouter || {},
}

export const propTypes = {
  name: string,
  id: oneOfType([string, number]),
  photoUrl: string,
  rating: number,
  onClick: func,
  router: func,
}
