import { string, func, number } from 'prop-types'

export const defaultProps = {
  yearRange: 5,
  text: 'Chip',
  onEventClick: () => null,
}

export const propTypes = {
  yearRange: number,
  text: string,
  onEventClick: func,
}
