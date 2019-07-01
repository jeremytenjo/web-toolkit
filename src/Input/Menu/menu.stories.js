import React from 'react'
import { storiesOf } from '@storybook/react'

import Menu from './menu.index'

const options = ['option1', 'option2']

storiesOf('Input|Menu', module).add('Primary', () => <Menu options={options} />)
