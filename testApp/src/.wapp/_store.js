import React, { cloneElement } from 'react'

import { AuthProvider } from '../.wapp/_user/auth.state.js'
import { NotificationsProvider } from '../.wapp/_firebase/notifications/notifications.state.js'
import { IsOnlineProvider } from '../.wapp/_network/isOnline.state.js'
import { ExampleProvider } from '../general/example.state.js'

const providers = [
  <AuthProvider key={1} />,
  <NotificationsProvider key={2} />,
  <IsOnlineProvider key={3} />,
  <ExampleProvider key={4} />,
]

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children,
  )

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={providers}>{children}</ProviderComposer>
)

export default ContextProvider
