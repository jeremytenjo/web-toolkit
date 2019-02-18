Install hygen

```sh
yarn add hygen
```

Add to `package.json`
_On Windows:_
`"hygen": "set HYGEN_TMPLS=.hygen/_templates&& hygen"`
_On Mac:_
`"hygen-mac": "HYGEN_TMPLS=.hygen/_templates hygen"`

Crate new feature

```sh
Yarn hygen feature —name <feature name>
```

shortcut:

```sh
hfn <feature name>
```

Generates
<Component name>
Ui/
<Component name>.comp.js
Functions/
<Component name>.func.js
<Component name>.index.js
<Component name>.stories.js
<Component name>.readme.js
