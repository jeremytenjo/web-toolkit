import { string, array, object, func } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  font: 'primary',
  data: [],
  style: {},
  router: window.historyRouter || {},
}

export const propTypes = {
  color: string,
  font: string,
  data: array,
  style: object,
  router: object,
}
