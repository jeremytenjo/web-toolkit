import React from 'react'
import { storiesOf } from '@storybook/react'
import { useHistory, Switch } from 'react-router-dom'

import Route from '../route'
import useAuth from '../../UseAuth/firebase.index'

import Store from './store'

const PublicPage = () => <div>Public Page</div>
const PrivatePage1 = () => <div>Private Page 1</div>
const PrivatePage2 = () => <div>Private Page 2</div>
const LoginPage = () => <div>Login Page: Needs Authenticaion</div>

const Story = () => {
  let history = useHistory()

  return (
    <Store>
      <button onClick={() => history.push('/')}>Public Page</button>
      <button onClick={() => history.push('/privatePage1')}>Private Page 1</button>
      <button onClick={() => history.push('/privatePage2')}>Private Page 2</button>
      <button onClick={() => history.push('/login')}>Login Page</button>
      <br />
      <br />

      <Switch>
        <Route component={PublicPage} authState={useAuth} exact path='/' />

        <Route component={PrivatePage1} authState={useAuth} path='/privatePage1' isPrivate />

        <Route component={PrivatePage2} authState={useAuth} path='/privatePage2' isPrivate />

        <Route component={LoginPage} authState={useAuth} path='/login' />
      </Switch>
    </Store>
  )
}

storiesOf('Routing|React-Router', module).add('Route', () => <Story />)
