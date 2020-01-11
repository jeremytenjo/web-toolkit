import { array, func } from 'prop-types'

export const defaultProps = {
  options: [],
  onSelect: () => null,
}

export const propTypes = {
  type: array,
  onClick: func,
}
