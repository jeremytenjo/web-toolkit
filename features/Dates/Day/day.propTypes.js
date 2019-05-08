import { string, func, bool, number, oneOf } from 'prop-types'

export const defaultProps = {
  number: 0,
  isCurrentDay: null,
  isActive: null,
  acceptedColor: 'green',
  pendingColor: 'orange',
  rejectedColor: 'red',
  activeColor: '#00BFA5',
  statuses: [],
  onClick: () => null,
}

export const propTypes = {
  number: number,
  isCurrentDay: bool,
  active: bool,
  acceptedColor: string,
  pendingColor: string,
  rejectedColor: string,
  statuses: oneOf(['accepted', 'rejected', 'pending']),
  onClick: func,
}
