import { string, func, number } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  backgroundColor: 'white-opaque',
  router: window.historyRouter || {},
  onClick: () => null,
  shadow: 2,
}

export const propTypes = {
  color: string,
  backgroundColor: string,
  router: func,
  onClick: func,
  shadow: number,
}
