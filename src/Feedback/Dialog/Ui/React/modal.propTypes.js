import { string, bool, func, node } from 'prop-types'

export const defaultProps = {
  fullscreen: null,
  loading: null,
  confirmation: null,
  confirmationCancelText: 'Cancel',
  confirmationAcceptText: 'Accept',
  onConfirmationCancel: () => null,
  onConfirmationAccept: () => null,
  title: null,
  children: null,
  onClose: () => null,
  show: null,
  animationStyle: 'centerOut',
}

export const propTypes = {
  fullscreen: bool,
  loading: bool,
  confirmation: bool,
  confirmationCancelText: string,
  confirmationAcceptText: string,
  onConfirmationCancel: func,
  onConfirmationAccept: func,
  title: string,
  children: node,
  onClose: func,
  show: bool,
  animationStyle: string,
}
