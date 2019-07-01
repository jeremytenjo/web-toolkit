import { number, func, bool, string } from 'prop-types'

export const defaultProps = {
  rating: 5,
  count: 5,
  isSelectable: null,
  starDimension: '25px',
  starSpacing: '2px',
  onChange: () => null,
}

export const propTypes = {
  rating: number,
  count: number,
  starDimension: string,
  starSpacing: string,
  isSelectable: bool,
  onChange: func,
}
