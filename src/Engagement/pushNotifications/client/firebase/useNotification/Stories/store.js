import React, { cloneElement } from 'react'

import { NotificationsProvider } from '../index'

const providers = [<NotificationsProvider key={1} service='firebase' />]

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
