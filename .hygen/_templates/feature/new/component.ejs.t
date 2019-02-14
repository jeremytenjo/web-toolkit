---
to: features/<%= Name %>.comp.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1); _%>
// Vendors
import React, { memo } from 'react'
import styled from 'styled-components'

// Main
const <%= compNameUpper %> = () => {
  return <><%= compNameUpper %> </>
}

// Exports
export default memo(<%= compNameUpper %>)