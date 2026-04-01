import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ROLES } from './enum'
import type { Action, PermissionResult } from './types'

// Permissões padrão por módulo para facilitar o controle
const ROLE_MODULE_PERMISSIONS: Partial<
  Record<ROLES, { moduleKey: string; actions: Action[] }[]>
> = {
  [ROLES.EDITOR]: [
    { moduleKey: 'articles', actions: ['read', 'create', 'update', 'delete'] },
    { moduleKey: 'categories', actions: ['read', 'create', 'update'] },
    { moduleKey: 'newsletter', actions: ['read', 'update'] },
  ],
  [ROLES.AUTHOR]: [
    { moduleKey: 'articles', actions: ['read', 'create', 'update'] },
    { moduleKey: 'categories', actions: ['read'] },
  ],
}

/**
 * Retorna a role do usuário globalmente (User.role) ou dentro de uma organização
 */
export async function getMemberRole(userId?: string) {
  let finalUserId = userId

  if (!finalUserId) {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
    finalUserId = session?.user?.id
  }

  if (!finalUserId) return null

  const user = await prisma.user.findUnique({
    where: { id: finalUserId },
    select: { role: true },
  })

  // Retorna a role mapeada para o Enum ROLES
  return (user?.role?.toUpperCase() as ROLES) ?? null
}

/**
 * Verifica se o usuário tem permissão para uma ação em um módulo
 */
export async function checkPermission(
  action: Action,
  moduleKey: string,
): Promise<PermissionResult> {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session?.user) {
    return { allowed: false, error: 'Usuário não autenticado' }
  }

  const userRole = (session.user.role?.toUpperCase() as ROLES) ?? ROLES.AUTHOR

  // 1️⃣ OWNER e ADMIN — bypass total (Podem tudo em qualquer lugar)
  if (userRole === ROLES.OWNER || userRole === ROLES.ADMIN) {
    return {
      allowed: true,
      userId: session.user.id,
      organizationId: '', // Mantemos por compatibilidade com types
      role: userRole,
      userName: session.user.name,
      userEmail: session.user.email,
    }
  }

  // 2️⃣ Permissões padrão por role (Configuradas acima)
  const roleDefaults = ROLE_MODULE_PERMISSIONS[userRole]
  if (roleDefaults) {
    const match = roleDefaults.find((d) => d.moduleKey === moduleKey)
    if (match?.actions.includes(action)) {
      return {
        allowed: true,
        userId: session.user.id,
        organizationId: '',
        role: userRole,
        userName: session.user.name,
        userEmail: session.user.email,
      }
    }
  }

  // 3️⃣ Sem permissão
  return {
    allowed: false,
    error: `Sem permissão para ${action} no módulo ${moduleKey}`,
  }
}
