import { string, func } from 'prop-types'

export const defaultProps = {
  emptyFormMessage: 'Plase fill out form',
  onSubmitSuccess: () => null,
}

export const propTypes = {
  emptyFormMessage: string,
  onSubmitSuccess: func,
}
