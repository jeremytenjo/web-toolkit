import { string } from 'prop-types'

export const defaultProps = {
  label: null,
  backgroundColor: 'primary',
  foregroundColor: 'primary-darker',
  fontColor: 'black',
  title: null,
}

export const propTypes = {
  label: string,
  backgroundColor: string,
  foregroundColor: string,
  fontColor: string,
  title: string,
}
