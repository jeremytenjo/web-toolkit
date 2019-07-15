import { string, func } from 'prop-types'

export const defaultProps = {
  accept: '.jpg, .jpeg, .png',
  onInput: () => null,
  name: 'input_name',
}

export const propTypes = {
  accept: string,
  onInput: func,
  name: string.isRequired,
}
