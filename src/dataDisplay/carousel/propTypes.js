import { object, bool, number } from 'prop-types'

export const defaultProps = {
  initialndex: 0,
  wrapperStyles: {},
  infinite: true,
}

export const propTypes = {
  initialndex: number,
  wrapperStyles: object,
  infinite: bool,
}
