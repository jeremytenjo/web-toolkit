import { string, func, bool, any, object } from 'prop-types'

export const defaultProps = {
  type: 'default',
  outlined: null,
  active: null,
  iconName: null,
  disabled: null,
  Icon: null,
  color: 'primary',
  style: {},
  textStyle: {},
  text: 'Button',
  onClick: () => null,
  dataCy: null,
}

export const propTypes = {
  type: string,
  iconName: string,
  outlined: bool,
  active: bool,
  disabled: bool,
  Icon: any,
  color: string,
  text: string,
  style: object,
  textStyle: object,
  onClick: func,
  dataCy: string,
}
