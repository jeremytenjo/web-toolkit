import React from 'react'
import {
  BrowserRouter as BrowserRouterReactRouter,
  useHistory as useHistoryReactRouter,
  useLocation as useLocationReactRouter,
  Redirect as RedirectReactRouter,
  Switch as SwitchReactRouter,
} from 'react-router-dom'

import CustomRouteReactRouter from './route'

// Components
export const BrowserRouter = (props) => <BrowserRouterReactRouter {...props} />
export const Route = (props) => <CustomRouteReactRouter {...props} />
export const Redirect = (props) => <RedirectReactRouter {...props} />
export const Switch = (props) => <SwitchReactRouter {...props} />

// hooks
export const useHistory = useHistoryReactRouter
export const useLocation = useLocationReactRouter
