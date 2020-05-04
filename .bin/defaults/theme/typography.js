module.exports = {
  fonts: ['montserrat', 'roboto'],
  variables: {
    primary: 'Montserrat',
    secondary: 'Roboto',
  },
  types: `
  .typography-h1 {
    font-family:  var(--font-primary);

    font-weight: 300;
    font-size: 96px;
    letter-spacing: -1.5px;
  }
  .typography-h2 {
    font-family:  var(--font-primary);

    font-weight: 300;
    font-size: 60px;
    letter-spacing: -0.5px;
  }
  .typography-h3 {
    font-family:  var(--font-primary);
  font-size: 48px;
  }
  .typography-h4 {
    font-family:  var(--font-primary);

    font-size: 34px;
    letter-spacing: 0.25px;
  }
  
  .typography-h5 {
    font-family:  var(--font-primary);

    font-size: 24px;
  }
  
  .typography-h6 {
    font-family:  var(--font-primary);
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.15px;
  }
  
  .typography-body1 {
    font-family:  var(--font-primary);
    font-size: 18px;
    letter-spacing: 0.5px;
  }
  
  .typography-body2 {
    font-family:  var(--font-primary);
  font-size: 14px;
  letter-spacing: 0.25px;
  }
  
  .typography-subtitle1 {
    font-family:  var(--font-primary);
  font-size: 16px;
  letter-spacing: 0.15px;
  }
  
  .typography-subtitle2 {
    font-family:  var(--font-primary);
    font-size: 18px;
  }
  .typography-button {
    font-family:  var(--font-primary);

    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  .typography-caption {
    font-family:  var(--font-primary);
  font-size: 12px;
  letter-spacing: 0.4px;
  }
  .typography-navbar {
    font-family:  var(--font-primary);
    font-size: 10px;
    font-weight: bold;
  }
  .typography-overline {
    font-family:  var(--font-primary);

    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }`,
  resets: `
  h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
p{margin:0}
  `,
}
