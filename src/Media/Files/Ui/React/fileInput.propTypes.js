import { string, func } from 'prop-types'

export const defaultProps = {
  accept: '.jpg, .jpeg, .png',
  onInput: () => null,
}

export const propTypes = {
  accept: string,
  onInput: func,
}
