---
to: features/<%= Name %>.index.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameLower = compName.charAt(0).toLowerCase() + compName.slice(1) _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1); _%>
<%_ compNameReadme = compNameUpper + 'Readme' _%>
// README
import <%= compNameReadme %> from './<%= compNameLower %>.readme.md'

// Functions

// Ui
import <%= compNameUpper %> from './<%= compNameLower %>.comp'

// Exports
export { <%= compNameUpper %>, <%= compNameReadme %> }