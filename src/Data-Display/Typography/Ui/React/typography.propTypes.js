import { string, func } from 'prop-types'

export const defaultProps = {
  tag: 'span',
  variant: 'body1',
  color: 'black',
  onClick: () => null,
  text: '',
}

export const propTypes = {
  tag: string,
  variant: string,
  color: string,
  onClick: func,
  text: string,
}
