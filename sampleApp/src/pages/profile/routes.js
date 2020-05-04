import React, { Suspense } from 'react'
import { Route, Switch } from '@tenjojeremy/web-toolkit/navigation/router'

import ProfileTemplate from '.'

export default () => (
  <Route
    path='/profile'
    render={() => (
      <ProfileTemplate>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path='/' render={() => <div>Profile</div>} />
          </Switch>
        </Suspense>
      </ProfileTemplate>
    )}
  />
)
