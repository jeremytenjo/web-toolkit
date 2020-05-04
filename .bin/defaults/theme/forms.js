module.exports = `
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
`
