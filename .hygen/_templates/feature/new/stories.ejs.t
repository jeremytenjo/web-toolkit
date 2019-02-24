---
to: features/<%= Name %>.stories.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameLower = compName.charAt(0).toLowerCase() + compName.slice(1) _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1) _%>
<%_ compNameReadme = compNameUpper + 'Readme' _%>
<%_ compNameMockData = compNameUpper + 'MockData' _%>
<%_ compNameExample = compNameUpper + 'exmaple' _%>

// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme';

// Component 
import  <%= compNameExample %> from './<%= compNameLower %>.functions/<%= compNameLower %>.simple'
import { <%= compNameUpper %>,  <%= compNameReadme %>  } from './<%= compNameLower %>.index'


// Stories
storiesOf('<%= compNameUpper %>', module).add('default', withReadme(<%= compNameReadme %> ,() => <<%= compNameExample %> />))
