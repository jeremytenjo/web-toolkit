import React from 'react'
import { storiesOf } from '@storybook/react'

import markdown from '../README.md'
import ButtonStyle1 from '../Styles/Style1/style1.index'

import Variations from './button.variations'

storiesOf('Input|Button/Ui/React', module).add(
  'Style1',
  () => <Variations Button={ButtonStyle1} />,
  {
    notes: { markdown },
  },
)
