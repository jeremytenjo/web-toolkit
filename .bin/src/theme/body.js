module.exports = `
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
`
