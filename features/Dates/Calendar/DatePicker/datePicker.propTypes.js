import { array, string, func } from 'prop-types'

export const defaultProps = {
  data: [],
  arrowColor: 'black',
  onSelect: () => null,
  onRightClick: () => null,
  onLeftClick: () => null,
}

export const propTypes = {
  data: array,
  arrowColor: string,
  onSelect: func,
  onRightClick: func,
  onLeftClick: func,
}
