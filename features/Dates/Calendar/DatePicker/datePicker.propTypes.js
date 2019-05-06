import { array, string, func } from 'prop-types'

export const defaultProps = {
  data: [],
  arrowColor: 'black',
  defaultValue: null,
  onSelect: () => null,
}

export const propTypes = {
  data: array,
  arrowColor: string,
  onSelect: func,
}
