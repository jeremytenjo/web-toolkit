import { string, func, bool, number } from 'prop-types'

export const defaultProps = {
  number: 0,
  isCurrentDay: null,
  isActive: null,
  acceptedColor: 'green',
  pendingColor: 'orange',
  rejectedColor: 'red',
  activeColor: '#00BFA5',
  accepted: null,
  pending: null,
  rejected: null,
  onClick: () => null,
}

export const propTypes = {
  number: number,
  isCurrentDay: bool,
  active: bool,
  acceptedColor: string,
  pendingColor: string,
  rejectedColor: string,
  accepted: bool,
  pending: bool,
  rejected: bool,
  onClick: func,
}
