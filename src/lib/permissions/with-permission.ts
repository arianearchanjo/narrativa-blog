import { checkPermission } from './check-permission'
import type {
	Action,
	ActionResponse,
	Module,
	PermissionContext,
	WithPermissionOptions,
} from './types'

export function withPermission<T extends unknown[], R>(
	action: Action,
	fn: (ctx: PermissionContext, ...args: T) => Promise<ActionResponse<R>>,
	options: WithPermissionOptions | Module,
) {
	return async (...args: T): Promise<ActionResponse<R>> => {
		// 1️⃣ Normaliza opções
		if (!options) {
			return { success: false, error: 'Módulo não informado' }
		}

		const opts: WithPermissionOptions =
			typeof options === 'string' ? { module: options } : options

		if (!opts.module) {
			return { success: false, error: 'Módulo não informado' }
		}

		// 2️⃣ Valida permissão
		const permission = await checkPermission(action, opts.module)

		if (!permission.allowed) {
			return { success: false, error: permission.error }
		}

		// 3️⃣ Contexto injetado
		const ctx: PermissionContext = {
			userId: permission.userId,
			organizationId: permission.organizationId,
			role: permission.role,
			userName: permission.userName,
			userEmail: permission.userEmail,
			log: () => {}, // Log desativado
		}

		// 4️⃣ Executa ação protegida
		const result = await fn(ctx, ...args)

		// 5️⃣ Retorno final
		return result
	}
}
