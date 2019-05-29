import PropTypes, {
  array,
  object,
  func,
  element,
  oneOf,
  number,
  string,
  bool,
} from 'prop-types'

export const defaultProps = {
  data: [],
  direction: 'column',
  ItemComponent: null,
  minWidth: 600,
  repeat: 3,
  repeatOnMinWidth: 3,
  gap: 's',
  padding: 5,
  overflows: null,
  listItemDefinitions: null,
  onItemClick: () => null,
  autoColumns: null,
}

export const propTypes = {
  data: array.isRequired,
  direction: oneOf(['column', 'row', 'grid']),
  ItemComponent: PropTypes.oneOfType([object, func, element]),
  repeat: number,
  minWidth: number,
  repeatOnMinWidth: number,
  gap: string,
  padding: number,
  overflows: bool,
  listItemDefinitions: object,
  onItemClick: func,
}
