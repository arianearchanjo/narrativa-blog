import { ROUTE_PERMISSIONS } from './config'
import type { ROLES } from './enum'

function findMatchedRoute(pathname: string): string | undefined {
  return Object.keys(ROUTE_PERMISSIONS).find(
    (route) => route === pathname || pathname.startsWith(`${route}/`),
  )
}

export function hasRoutePermission(
  pathname: string,
  memberRole: ROLES,
): boolean {
  const matchedRoute = findMatchedRoute(pathname)
  if (!matchedRoute) return true
  return ROUTE_PERMISSIONS[matchedRoute].includes(memberRole)
}
