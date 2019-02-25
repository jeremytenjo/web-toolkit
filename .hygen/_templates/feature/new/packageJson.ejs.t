---
to: features/<%= Name %>/package.json
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1); _%>
// Vendors
import React, { memo } from 'react'

// Main
const <%= compNameUpper %> = () => {
  return <><%= compNameUpper %> </>
}

// Exports
export default memo(<%= compNameUpper %>)

{
  "name": "@tenjo/<%= name %>",
  "version": "0.1.0",
  "description": "<%= Name %>",
  "main": "share.index.js",
  "scripts": {
    "publish-minor": "yarn publish --minor"
  },
  "author": "Jeremy Tenjo <tenjojeremy@gmail.com>",
  "license": "MIT"
}
