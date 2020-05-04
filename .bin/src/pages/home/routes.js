import React, { lazy, Suspense } from 'react'
import { Route, Switch } from '@tenjojeremy/web-toolkit/navigation/router'

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './index'))

export default () => (
  <Switch>
    <Route
      path='/'
      render={() => (
        <Suspense fallback={null}>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
          </Switch>
        </Suspense>
      )}
    />
  </Switch>
)
