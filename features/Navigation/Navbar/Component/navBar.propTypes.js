import { array, node, func } from 'prop-types'

export const defaultProps = {
  data: [],
  MainIcon: null,
  onMainIconClick: () => null,
}

export const propTypes = {
  data: array.isRequired,
  MainIcon: node,
  onMainIconClick: func,
}
