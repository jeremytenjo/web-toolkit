import PropTypes, {
  array,
  object,
  func,
  element,
  oneOf,
  number,
} from 'prop-types'

export const defaultProps = {
  data: [],
  direction: 'column',
  ItemComponent: null,
  repeat: 3,
  listItemDefinitions: null,
  onItemClick: () => null,
  onScrollListEnd: () => null,
  skeletonItemLength: Array.apply(1, Array(12)),
  listLoading: null,
  elToWatched: null,
  autoColumns: null,
  onlyMobileStyle: null,
}

export const propTypes = {
  data: array.isRequired,
  direction: oneOf(['column', 'row', 'grid']),
  ItemComponent: PropTypes.oneOfType([object, func, element]),
  repeat: number,
  listItemDefinitions: object,
  onItemClick: func,
  onScrollListEnd: func,
}
