import { type NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { ROLES } from './lib/permissions/enum'
import { hasRoutePermission } from './lib/permissions/route-matcher'

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Obtém a sessão do Better Auth usando a API direta
  // Passamos os headers para que a biblioteca consiga ler os cookies de sessão
  const session = await auth.api.getSession({
    headers: request.headers,
  })

  // 2. Se o usuário já está logado e tenta ir para o login, manda para a Home
  if (session && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // 3. Proteção de Rotas de Dashboard
  const isDashboardRoute = pathname.startsWith('/dashboard')

  if (isDashboardRoute) {
    // Se não estiver logado, redireciona para login
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Validação de Roles
    // Tipagem local para evitar 'any' enquanto o TS sincroniza
    interface SessionUser {
      role?: string
    }
    const sessionUser = session.user as unknown as SessionUser
    const userRole = (sessionUser.role?.toUpperCase() as ROLES) ?? ROLES.AUTHOR
    if (!hasRoutePermission(pathname, userRole)) {
      console.warn(
        `Acesso negado: ${session.user.email} (${userRole}) tentou acessar ${pathname}`,
      )
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  // Monitoramos as rotas de auth e todos os dashboards
  matcher: [
    '/login',
    '/dashboard/:path*',
    '/dashboard-owner/:path*',
    '/dashboard-editor/:path*',
    '/dashboard-author/:path*',
    '/api/auth/:path*',
  ],
}
