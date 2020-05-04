import React from 'react'
import {
  BrowserRouter as BrowserRouterReactRouter,
  Route as RouteReactRouter,
  Redirect as RedirectReactRouter,
  Switch as SwitchReactRouter,
  Link as LinkReactRouter,
  useHistory as useHistoryReactRouter,
  useLocation as useLocationReactRouter,
} from 'react-router-dom'

import CustomAuthRoute from './authRoute'

// Components
export const BrowserRouter = (props) => <BrowserRouterReactRouter {...props} />
export const Route = (props) => <RouteReactRouter {...props} />
export const AuthRoute = (props) => <CustomAuthRoute {...props} />
export const Redirect = (props) => <RedirectReactRouter {...props} />
export const Switch = (props) => <SwitchReactRouter {...props} />
export const Link = (props) => <LinkReactRouter {...props} />

// hooks
export const useHistory = useHistoryReactRouter
export const useLocation = useLocationReactRouter
