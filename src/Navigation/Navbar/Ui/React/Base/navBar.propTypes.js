import { string, func } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  router: window.historyRouter || {},
  onClick: () => null,
}

export const propTypes = {
  color: string,
  router: func,
  onClick: func,
}
