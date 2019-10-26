import { string, func, object } from 'prop-types'

export const defaultProps = {
  link: '/',
  text: 'Heathcare',
  icon: 'close/material',
  foregroundColor: 'primary',
  backgroundColor: 'primary-lighter',
  wrapperProps: {},
  onClick: () => null,
}

export const propTypes = {
  link: string,
  text: string,
  icon: string,
  foregroundColor: string,
  backgroundColor: string,
  wrapperProps: object,
  onClick: func,
}
