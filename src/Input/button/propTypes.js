import { string, func, bool, any, object, oneOfType, node } from 'prop-types'

export const defaultProps = {
  outlined: null,
  active: null,
  iconName: null,
  disabled: null,
  url: null,
  color: 'primary',
  typographyVariant: 'button',
  style: {},
  textStyle: {},
  text: 'Button',
  onClick: () => null,
  dataCy: null,
  loading: 'onlydefaultisstring, set bool when using',
  loadingComp: 'dots',
  isInput: null,
  accept: '.jpg, .jpeg, .png',
  inputProps: null,
  activeColor: 'white',
}

export const propTypes = {
  iconName: string,
  outlined: bool,
  active: bool,
  disabled: bool,
  color: string,
  url: string,
  text: oneOfType([node, string]),
  style: object,
  textStyle: object,
  onClick: func,
  dataCy: string,
  loading: oneOfType([bool, string]),
  isInput: bool,
  inputProps: object,
}
