//Vendors
import React from 'react'
import TabsMui from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

// import Sticky from './../templates/Sticky'

const Tabs = (props) => {
  // props
  const tabList = props.tabList
  const color = props.color || 'primary'

  // Local Vars
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
        style={TabsMuiStyle}
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

//Style
const TabsMuiStyle = { backgroundColor: 'white' }

export default Tabs

// Template example
// const DataTabs = [
//   { label: 'Photos', link: '/profile/photos' },
//   { label: 'Favourites', link: '/profile/favourites' },
//   { label: 'Edit Profile', link: '/profile/edit' }
// ]

// const Component = () => <Tabs tabList={DataTabs} color="primary" sticky />
