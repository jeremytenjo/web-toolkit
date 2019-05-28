import React from 'react'
import { storiesOf } from '@storybook/react'

import List from '../list.index'

const data = [() => <div>hello</div>, () => <div>hello</div>]

storiesOf('Ui|Display-Data/List/React', module).add('Dev', () => (
  <List data={data} gridGap='50px' />
))
