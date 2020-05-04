module.exports = `
  <style type="text/css">
  
 /* color */

  :root {
  --color-primary: #26C6DA;
--color-secondary: #FF6F00;
  }

 /* spacing */

  :root {
  --spacing-auto: auto;
--spacing-none: 0;
--spacing-unit: 16px;
--spacing-xxs: calc(0.25 * var(--spacing-unit));
--spacing-xs: calc(0.5 * var(--spacing-unit));
--spacing-s: calc(0.75 * var(--spacing-unit));
--spacing-m: calc(1.25 * var(--spacing-unit));
--spacing-l: calc(2 * var(--spacing-unit));
--spacing-xl: calc(3.25 * var(--spacing-unit));
--spacing-xxl: calc(5.25 * var(--spacing-unit));
  }

 /* fonts */

  :root {
  --font-primary: Montserrat;
--font-secondary: Roboto;
  }

  .typography-h1 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 300;
    font-size: 96px;
    letter-spacing: -1.5px;
  }
  .typography-h2 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    letter-spacing: -0.5px;
  }
  .typography-h3 {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  }
  .typography-h4 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    letter-spacing: 0.25px;
  }
  
  .typography-h5 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
  
  .typography-h6 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.15px;
  }
  
  .typography-body1 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0.5px;
  }
  
  .typography-body2 {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.25px;
  }
  
  .typography-subtitle1 {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.15px;
  color: var(--color-black)
  }
  
  .typography-subtitle2 {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  .typography-button {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  .typography-caption {
    font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: var(--color-black)
  }
  .typography-navbar {
    font-family:  var(--font-primary);
    font-size: 10px;
    font-weight: bold;
  }
  .typography-overline {
    font-family:  var(--font-primary);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
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
  
/* body */
      
body {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;  
  color: black;
}

*,
* > *,
* * {
  box-sizing: border-box;
}

@media only screen and (min-width: 900px) {
  body {
    background-color: var(--color-lightgrey);
  }
}

/* forms */
      
input {
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
}

input:active {
  outline: none;
}

input::-ms-clear {
  display: none;
}

.image-upload > input {
  display: none;
}

textarea {
  font-family: Roboto;
  border: none;
  outline: none;
}

textarea:active {
  outline: none;
}

/* scrollbar */
      
@media only screen and (min-width: 1200px) {
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bdbdbd;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #bdbdbd;
  }
}

/* selection */
      
  ::-moz-selection {
    color: white;
    background: var(--color-secondary);
  }
  
  ::selection {
    color: white;
    background: var(--color-secondary);
  }

 
  </style>`
