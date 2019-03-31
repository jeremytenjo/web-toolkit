import { array, node, func, oneOfType } from 'prop-types'

export const defaultProps = {
  data: [],
  MainIcon: null,
  onMainIconClick: () => null,
}

export const propTypes = {
  data: array.isRequired,
  MainIcon: oneOfType([node, func]),
  onMainIconClick: func,
}
