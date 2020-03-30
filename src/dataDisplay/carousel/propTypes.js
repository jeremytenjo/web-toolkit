import { object, bool, func, number } from 'prop-types'

export const defaultProps = {
  index: 0,
  setIndex: null,
  wrapperStyles: {},
  infinite: true,
}

export const propTypes = {
  index: number,
  setIndex: func.isRequired,
  wrapperStyles: object,
  infinite: bool,
}
