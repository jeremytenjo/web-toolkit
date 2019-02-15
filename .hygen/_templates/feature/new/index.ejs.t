---
to: features/<%= Name %>.index.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameLower = compName.charAt(0).toLowerCase() + compName.slice(1) _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1); _%>
<%_ compNameMockData = compNameUpper + 'MockData' _%>
// README
import <%= compNameReadme %> from './<%= compNameLower %>.readme.md'

// Functions

// Ui
import <%= compNameUpper %> from './<%= compNameLower %>.comp'

// Mock Data
import <%= compNameMockData %> from './<%= compNameLower %>.mockData'

// Exports
export { <%= compNameUpper %>, <%= compNameReadme %>, <%= compNameMockData %> }