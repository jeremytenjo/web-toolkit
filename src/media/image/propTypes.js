import { string, number, bool, object, func } from 'prop-types'

export const defaultProps = {
  src: '',
  alt: 'estilistta',
  name: '',
  index: null,
  round: null,
  borderColor: null,
  lettersFont: 'var(--font-primary)',
  letterColor: 'primary',
  isLazyLoaded: null,
  onClick: () => null,
  definitions: null,
  skeleton: null,
  position: 'center',
  OnVisibilityParams: {
    offset: 200,
    once: true,
  },
  inputProps: null,
  styles: { width: '300px', height: '300px' },
}

export const propTypes = {
  src: string,
  alt: string,
  name: string,
  isLazyLoaded: bool,
  cursor: string,
  position: string,
  index: number,
  onClick: func,
  definitions: object,
  skeleton: bool,
  round: bool,
  borderColor: string,
  inputProps: object,
  styles: object,
}
