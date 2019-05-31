import { string, number, bool, object, func } from 'prop-types'

export const defaultProps = {
  src: '',
  alt: 'estilistta',
  index: null,
  size: 50,
  width: null,
  height: null,
  isLazyLoaded: null,
  onClick: () => null,
  definitions: null,
  skeleton: null,
  cursor: 'pointer',
  position: 'center',
  OnVisibilityParams: {
    offset: 200,
    once: true,
  },
}

export const propTypes = {
  src: string,
  alt: string,
  size: string,
  width: number,
  height: number,
  isLazyLoaded: bool,
  cursor: string,
  position: string,
  index: number,
  onClick: func,
  definitions: object,
  skeleton: bool,
}
