import { string } from 'prop-types'

export const defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
  href: '',
}

export const propTypes = {
  target: string,
  rel: string,
  href: string,
}
