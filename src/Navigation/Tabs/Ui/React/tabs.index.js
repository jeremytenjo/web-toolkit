import React from 'react'
import TabsMui from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { Wrapper } from './tabs.styles'

const Tabs = ({ tabList, color = 'primary', style = {} }) => {
  const historyRouter = window.historyRouter
  const tabWidth = 100 / tabList.length
  const currentUrl = window.location.pathname
  let currentTabIndex

  currentTabIndex = tabList.findIndex((tab) => tab.link === currentUrl)
  currentTabIndex === -1 && (currentTabIndex = 0)

  //Template
  return (
    <Wrapper style={{ ...style }} color={color}>
      <TabsMui
        value={currentTabIndex}
        indicatorColor={color}
        textColor={color}
        variant='fullWidth'
      >
        {tabList.map((item) => (
          <Tab
            style={{
              width: tabWidth,
              color: `var(--color-${color})`,
            }}
            key={item.label}
            label={item.label}
            onClick={() => historyRouter.push(item.link)}
          />
        ))}
      </TabsMui>
    </Wrapper>
  )
}

export default Tabs
