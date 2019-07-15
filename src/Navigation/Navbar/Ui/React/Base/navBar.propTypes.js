import { string, func } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  text: 'Chip',
  onClick: () => null,
}

export const propTypes = {
  color: string,
  text: string,
  onClick: func,
}
