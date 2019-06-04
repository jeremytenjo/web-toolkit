//Vendors
import React from 'react'
import TabsMui from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Tabs = ({ tabList, color = 'primary', style = {} }) => {
  const historyRouter = window.historyRouter
  const tabWidth = 100 / tabList.length
  const currentUrl = window.location.pathname
  let currentTabIndex

  currentTabIndex = tabList.findIndex((tab) => tab.link === currentUrl)
  currentTabIndex === -1 && (currentTabIndex = 0)

  //Template
  return (
    <>
      <TabsMui
        style={{ ...TabsMuiStyle, ...style }}
        value={currentTabIndex}
        indicatorColor={color}
        textColor={color}
        variant='fullWidth'
      >
        {tabList.map((item) => (
          <Tab
            style={{
              width: tabWidth,
            }}
            key={item.label}
            label={item.label}
            onClick={() => historyRouter.push(item.link)}
          />
        ))}
      </TabsMui>
    </>
  )
}

const TabsMuiStyle = { backgroundColor: 'white' }

export default Tabs
