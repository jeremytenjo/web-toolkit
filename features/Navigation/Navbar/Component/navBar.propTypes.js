import {
  func,
  array,
  arrayOf,
  object,
  shape,
  bool,
  string,
  number,
  oneOfType,
} from 'prop-types'

export const defaultProps = {
  data: [],
}

export const propTypes = {
  data: array.isRequired,
}

// export const propTypes = {
//   data: arrayOf(shape{})
// }
