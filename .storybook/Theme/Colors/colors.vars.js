const {
  colors: {
    primary,
    primaryDarker,
    primaryBackground,

    secondary,
    secondaryDarker,
    secondaryBackground,

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
  },
} = require('./colors.index')

exports.colorVars = `
:root {
  --color-primary: ${primary};
  --color-primary-darker: ${primaryDarker};
  --color-primary-background: ${primaryBackground};

  --color-secondary: ${secondary};
  --color-secondary-darker: ${secondaryDarker};
  --color-secondary-background: ${secondaryBackground};

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
