---
to: features/<%= Name %>.mockData.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1) _%>
<%_ Dataname = compNameUpper + 'MockData' _%>
// Main
const <%= Dataname %> = []

// Exports
export default <%= Dataname %>