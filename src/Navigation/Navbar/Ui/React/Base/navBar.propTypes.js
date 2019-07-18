import { string, func } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  backgroundColor: 'white-opaque',
  router: window.historyRouter || {},
  onClick: () => null,
}

export const propTypes = {
  color: string,
  backgroundColor: string,
  router: func,
  onClick: func,
}
