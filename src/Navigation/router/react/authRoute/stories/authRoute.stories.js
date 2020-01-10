import React from 'react'
import { storiesOf } from '@storybook/react'

import useAuth from '../../../../../Authentication/useAuth'
import { useHistory, Switch } from '../../index'
import AuthRoute from '../index'

import Store from './store'

const PublicPage = () => <div data-cy='page-public'>Public Page</div>
const PrivatePage1 = () => <div data-cy='page-private1'>Private Page 1</div>
const PrivatePage2 = () => <div data-cy='page-private2'>Private Page 2</div>
const LoginPage = () => <div data-cy='page-login'>Login Page</div>

const Example = () => {
  const { push } = useHistory()
  const { signIn, signOut, signingIn, user, error } = useAuth()

  return (
    <>
      <button data-cy='button-public' onClick={() => push('/')}>
        Public Page
      </button>
      <button data-cy='button-private1' onClick={() => push('/privatePage1')}>
        Private Page 1
      </button>
      <button data-cy='button-private2' onClick={() => push('/privatePage2')}>
        Private Page 2
      </button>
      <button data-cy='button-login' onClick={() => push('/account/login')}>
        Login Page
      </button>
      <br />
      <br />

      <Switch>
        <AuthRoute component={PublicPage} exact path='/' />

        <AuthRoute component={PrivatePage1} path='/privatePage1' isPrivate />

        <AuthRoute component={PrivatePage2} path='/privatePage2' isPrivate />

        <AuthRoute component={LoginPage} path='/account/login' />
      </Switch>

      <br />
      <button
        data-cy='button-signin'
        onClick={() =>
          signIn({
            credentials: { email: 'tenjojeremy@gmail.com', password: 'testpass' },
          })
        }
      >
        Sign in
      </button>

      <button data-cy='button-signout' onClick={() => signOut()}>
        Sign Out
      </button>
      <br />
      <br />
      <br />
      {signingIn && 'signing In...'}
      <span data-cy='signinStatus' style={{ color: user ? 'green' : 'orange' }}>
        ({user ? 'Signed In' : 'Signed Out'})
      </span>

      <br />
      <br />
      <br />
      {error && <span style={{ color: '#b71c1c' }}>{error}</span>}
    </>
  )
}

const Story = () => (
  <Store>
    <Example />
  </Store>
)

storiesOf('Routing|React/Route', module).add('AuthRoute', () => <Story />)
