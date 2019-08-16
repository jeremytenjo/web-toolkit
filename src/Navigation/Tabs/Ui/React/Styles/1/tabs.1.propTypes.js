import { string, array, object, func } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  data: [],
  style: {},
  router: window.historyRouter || {},
}

export const propTypes = {
  color: string,
  data: array,
  style: object,
  router: object,
}
