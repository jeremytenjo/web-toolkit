import { string, func } from 'prop-types'

export const defaultProps = {
  onSuccess: () => null,
  logo: null,
  name: '',
  providers: ['apple', 'google', 'microsoft'],
  service: 'firebase',
}

export const propTypes = {
  onSuccess: func,
  text: string,
  onClick: func,
}
