'use server'

import { revalidatePath } from 'next/cache'
import { withPermission } from '@/lib/permissions/permission'
import { logAction } from '@/lib/audit-log'
import { prisma } from '@/lib/prisma'

export const deleteModule = withPermission(
	'delete',
	async (ctx, key: string) => {
		try {
			await prisma.modulo.delete({
				where: {
					organizationId_key: {
						organizationId: ctx.organizationId,
						key,
					},
				},
			})

			revalidatePath('/dashboard-owner/modules')
			revalidatePath('/dashboard-owner/permissions')
			return { success: true, data: null }
		} catch (error) {
			await logAction({
				action: 'DELETE',
				entity: 'MODULE',
				entityId: key,
				userId: ctx.userId,
				userName: ctx.userName,
				userEmail: ctx.userEmail,
				organizationId: ctx.organizationId,
				description: `Falha ao excluir módulo: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
			})
			console.error('Erro ao excluir módulo:', error)
			return { success: false, error: 'Erro ao excluir módulo' }
		}
	},
	{ module: 'owner' },
)
