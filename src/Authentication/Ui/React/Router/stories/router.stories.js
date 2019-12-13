import React from 'react'
import { storiesOf } from '@storybook/react'
import { useHistory, Switch } from 'react-router-dom'

import Route from '../route'
import useAuth from '../../UseAuth/useAuth.index'

import Store from './store'

const PublicPage = () => <div>Public Page</div>
const PrivatePage1 = () => <div>Private Page 1</div>
const PrivatePage2 = () => <div>Private Page 2</div>
const LoginPage = () => <div>Login Page: Needs Authenticaion</div>

const Example = () => {
  const { push } = useHistory()
  const { signIn, signOut, signingIn, user } = useAuth()

  return (
    <>
      <button onClick={() => push('/')}>Public Page</button>
      <button onClick={() => push('/privatePage1')}>Private Page 1</button>
      <button onClick={() => push('/privatePage2')}>Private Page 2</button>
      <button onClick={() => push('/login')}>Login Page</button>
      <br />
      <br />

      <button
        onClick={() =>
          signIn({
            credentials: { email: 'tenjojeremy@gmail.com', password: 'testpass' },
          })
        }
      >
        Sign in
      </button>
      <button onClick={() => signOut()}>Sign Out</button>

      <br />
      <br />

      <Switch>
        <Route component={PublicPage} authState={useAuth} exact path='/' />

        <Route
          component={PrivatePage1}
          authState={useAuth}
          path='/privatePage1'
          isPrivate
        />

        <Route
          component={PrivatePage2}
          authState={useAuth}
          path='/privatePage2'
          isPrivate
        />

        <Route component={LoginPage} authState={useAuth} path='/login' />
      </Switch>

      {signingIn && 'signing In...'}

      {user && 'Logged In success'}
    </>
  )
}

const Story = () => (
  <Store>
    <Example />
  </Store>
)

storiesOf('Routing|React-Router', module).add('Route', () => <Story />)
