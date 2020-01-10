import {
  Route as RouteReactRouter,
  useHistory as useHistoryReactouer,
  useLocation as useLocationReactouer,
  Redirect as RedirectReactRouter,
  Switch as SwitchReactRouter,
} from 'react-router-dom'

export const Route = () => RouteReactRouter
export const useHistory = () => useHistoryReactouer
export const useLocation = () => useLocationReactouer
export const Redirect = () => RedirectReactRouter
export const Switch = () => SwitchReactRouter
