import { string, func } from 'prop-types'

export const defaultProps = {
  src: '',
  text: 'Chip',
  onClick: () => null,
}

export const propTypes = {
  src: string,
  text: string,
  onClick: func,
}
