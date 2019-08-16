import { string, object, func } from 'prop-types'

export const defaultProps = {
  image: null,
  title: 'No active',
  buttonText: 'FIND STYLIST',
  redUrl: '/explore',
  router: window.historyRouter || {},
}

export const propTypes = {
  image: object,
  title: string,
  buttonText: string,
  redUrl: string,
  router: object,
}
