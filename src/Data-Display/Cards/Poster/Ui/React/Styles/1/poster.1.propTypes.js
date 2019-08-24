import { string, func } from 'prop-types'

export const defaultProps = {
  src: '',
  size: 184,
  onClick: () => null,
}

export const propTypes = {
  src: string,
  text: string,
  onClick: func,
}
