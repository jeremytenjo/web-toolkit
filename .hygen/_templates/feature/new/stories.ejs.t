---
to: features/<%= Name %>.stories.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameLower = compName.charAt(0).toLowerCase() + compName.slice(1) _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1) _%>
<%_ compNameReadme = compNameUpper + 'Readme' _%>

// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme';

// Components
import { <%= compNameUpper %>,  <%= compNameReadme %>  } from './<%= compNameLower %>.index'


// Test data

// Stories
storiesOf('<%= compNameUpper %>', module).add('default', withReadme(<%= compNameReadme %> ,() => <<%= compNameUpper %> />))
