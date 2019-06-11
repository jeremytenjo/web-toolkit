import { string, bool, func } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  text: 'Chip',
  noClose: null,
  onClick: () => null,
  onClose: () => null,
}

export const propTypes = {
  color: string,
  text: string,
  noClose: bool,
  onClick: func,
  onClose: func,
}
