import { string, func } from 'prop-types'

export const defaultProps = {
  text: 'Chip',
  onClick: () => null,
}

export const propTypes = {
  text: string,
  onClick: func,
}
