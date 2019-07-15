import { string, func, bool } from 'prop-types'

export const defaultProps = {
  accept: '.jpg, .jpeg, .png',
  onInput: () => null,
  name: 'input_name',
  inputError: null,
  errorMessage: null,
}

export const propTypes = {
  accept: string,
  onInput: func,
  name: string.isRequired,
  inputError: bool,
  errorMessage: string,
}
