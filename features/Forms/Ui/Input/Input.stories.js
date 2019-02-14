// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Input from './Input.index'

// Test data
const errMessage = 'err message'
const placeholder = 'this is a plcaholder'

// Stories
storiesOf('Input', module).add('default', () => <Input errMessage={errMessage} placeholder={placeholder} />)
