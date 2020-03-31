import { string, number, bool, object, func } from 'prop-types'

export const defaultProps = {
  src: '',
  alt: '',
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
  lazyLoadProps: {
    offset: 100,
    once: true,
  },
  inputProps: null,
  styles: { width: '300px', height: '300px' },
  objectFit: 'cover',
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
  objectFit: string,
  skeleton: bool,
  round: bool,
  borderColor: string,
  inputProps: object,
  styles: object,
}
