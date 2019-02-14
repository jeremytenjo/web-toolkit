
// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme';

// Components
import { Hello,  HelloReadme  } from './hello.index'


// Test data

// Stories
storiesOf('Hello', module).add('default', withReadme(HelloReadme ,() => <Hello />))
