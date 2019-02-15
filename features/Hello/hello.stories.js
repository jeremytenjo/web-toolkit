
// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme';

// Component 
import { Hello,  HelloReadme, HelloMockData  } from './hello.index'


// Stories
storiesOf('Hello', module).add('default', withReadme(HelloReadme ,() => <Hello />))
