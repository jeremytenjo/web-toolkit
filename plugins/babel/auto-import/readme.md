Declarations for the [auto-import](https://github.com/PavelDymkov/babel-plugin-auto-import) plugin

## Instructions

#### Eslint

Disable `react/react-in-jsx-scope` rule

_eslintrc_

```js
'react/react-in-jsx-scope': 0,
```

#### Babel

```sh
npm i babel-plugin-auto-import
```

_.babelrc.js_

```js
const webToolkitDeclarations  = require('@tenjojeremy/web-toolkit/plugins/autoImport/declarations.js')

{
  "plugins": [[
    "auto-import", {
      "declarations": webToolkitDeclarations
    }
  ]]
}
```
