import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/utils/addToHomeScreen'

import animateOnSiteLoad from './.wapp/_animateOnSiteLoad/animateOnSiteLoad'
import hideSplashScreen from './.wapp/_splashScreen/hideSplashScreen'
import './.wapp/_firebase/index'
import './.wapp/_offlineSupport'
import Router from './pages/router'
import Store from './.wapp/_store'
import StyledComponents from './.wapp/_styledComponents'
import Materialui from './.wapp/_materialui'

const App = hot(() => (
  <Store>
    <StyledComponents>
      <Materialui>
        <Router />
      </Materialui>
    </StyledComponents>
  </Store>
))

// Load asynchronous
animateOnSiteLoad()
hideSplashScreen()
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
