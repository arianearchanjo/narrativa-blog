'use server'

import { revalidatePath } from 'next/cache'
import { withPermission } from '@/lib/permissions/permission'
import { logAction } from '@/lib/audit-log'
import { prisma } from '@/lib/prisma'

export const deleteLotacao = withPermission(
	'delete',
	async (ctx, lotacaoId: string) => {
		try {
			await prisma.lotacoes.delete({
				where: { id: lotacaoId, organizationId: ctx.organizationId },
			})

			revalidatePath('/dashboard-owner/settings')
			return { success: true, data: null }
		} catch (error) {
			await logAction({
				action: 'DELETE',
				entity: 'LOTACAO',
				entityId: lotacaoId,
				userId: ctx.userId,
				userName: ctx.userName,
				userEmail: ctx.userEmail,
				organizationId: ctx.organizationId,
				description: `Falha ao remover lotação: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
			})
			console.error('deleteLotacao error:', error)
			return { success: false, error: 'Erro ao remover lotação' }
		}
	},
	{ module: 'owner' },
)
