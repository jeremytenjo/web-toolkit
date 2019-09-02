import colors from './colors.index'

const {
  primary,
  primaryDarker,
  primaryLighter,
  primaryOpaque,
  secondary,
  secondaryDarker,
  secondaryLighter,
  disabledForeground,
  disabledBackground,
  lightgrey,
  darkgrey,
  grey,
  yellow,
  red,
  white,
  whiteOpaque,
  black,
  blackBackground,
  blackOpaque,
  success,
  successForeground,
  error,
  errorForeground,
} = colors

export default `
:root {
  --color-primary: ${primary};
  --color-primary-darker: ${primaryDarker};
  --color-primary-lighter: ${primaryLighter};
  --color-primary-opaque: ${primaryOpaque};

  --color-secondary: ${secondary};
  --color-secondary-darker: ${secondaryDarker};
  --color-secondary-lighter: ${secondaryLighter};

  --color-disabled-darker: ${disabledForeground};
  --color-disabled-background: ${disabledBackground};

  --color-darkgrey: ${darkgrey};
  --color-lightgrey: ${lightgrey};  
  --color-grey: ${grey};

  --color-yellow: ${yellow};

  --color-red: ${red};

  --color-white: ${white};
  --color-white-opaque: ${whiteOpaque};

  --color-black: ${black};
  --color-black-background: ${blackBackground};
  --color-black-opaque: ${blackOpaque};

  --color-success: ${success};
  --color-success-foreground: ${successForeground};

  --color-error: ${error};
  --color-error-foreground: ${errorForeground};
}
`
