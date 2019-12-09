import React, { cloneElement } from 'react'

import { AuthProvider as FirebaseAuthProvider } from '../../UseAuth/firebase.index'

const providers = [<FirebaseAuthProvider key={1} />]

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
