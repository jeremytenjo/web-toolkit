import { func, number } from 'prop-types'

export const defaultProps = {
  yearRange: 5,
  onEventClick: () => null,
}

export const propTypes = {
  yearRange: number,
  onEventClick: func,
}
