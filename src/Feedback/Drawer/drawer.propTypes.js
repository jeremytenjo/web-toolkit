import { object, node, bool, number, func } from 'prop-types'

export const defaultProps = {
  defaultOpen: false,
  fullScreen: false,
  marginTop: 0,
  overflowHeight: 0,
  overlay: true,
  scrollTopAtClose: true,
  shadowTip: true,
  swipeableViewsProps: {},
  topShadow: true,
  borderRadius: 20,
  padding: 15
}

export const propTypes = {
  bodyStyle: object,
  children: node.isRequired,
  defaultOpen: bool,
  fullScreen: bool,
  marginTop: number,
  onChange: func,
  onTransitionEnd: func,
  open: bool,
  overflowHeight: number,
  overlay: bool,
  overlayStyle: object,
  scrollTopAtClose: bool,
  shadowTip: bool,
  style: object,
  swipeableViewsProps: object,
  topShadow: bool,
  borderRadius: number,
  padding: number
}
