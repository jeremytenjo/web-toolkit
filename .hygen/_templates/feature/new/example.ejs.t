---
to: features/<%= Name %>.example.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1) _%>
<%_ compIndex = compNameUpper + 'index' _%>
<%_ function = compNameUpper + 'function' _%>
<%_ Dataname = compNameUpper + 'MockData' _%>
// Vendors
import React, { useState, Fragment } from 'react'
// Main
const { <%= function %>, <%= Dataname %> } from ./<%= compIndex %>

// Exports
export default = async () => {

  // Functions
  const testFun = async () => {
    const { errorMessage, success } = await <%= function %>(ShareMockData)
  }

  // Template
  return (
    <Fragment>
      <button onClick={testFun}>Example </button>     
    </Fragment>
  )
}