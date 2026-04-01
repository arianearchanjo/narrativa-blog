'use server'

import { checkPermission } from '@/lib/permissions/check-permission'
import { prisma } from '@/lib/prisma'
import { ROLES } from '@/lib/permissions/enum'

export type LogFilters = {
	action?: string
	entity?: string
	page?: number
	pageSize?: number
}

export async function getAuditLogs(filters: LogFilters = {}) {
	try {
		// 1. Validamos se quem está acessando é OWNER ou ADMIN
		const permission = await checkPermission('read', 'owner')
		if (!permission.allowed) {
			return { success: false, error: 'Acesso negado' }
		}

		const { action, entity, page = 1, pageSize = 20 } = filters
		const skip = (page - 1) * pageSize

		// 2. Buscamos a organização ativa
		const organization = await prisma.organization.findFirst()
		if (!organization) {
			return { success: false, error: 'Organização não encontrada' }
		}

		const where = {
			organizationId: organization.id,
			...(action ? { action: action as any } : {}),
			...(entity ? { entity } : {}),
		}

		const [logs, total] = await Promise.all([
			prisma.auditLog.findMany({
				where,
				orderBy: { createdAt: 'desc' },
				skip,
				take: pageSize,
			}),
			prisma.auditLog.count({ where }),
		])

		return {
			success: true,
			data: {
				logs,
				total,
				page,
				totalPages: Math.ceil(total / pageSize),
			},
		}
	} catch (error) {
		console.error('getAuditLogs error:', error)
		return { success: false, error: 'Erro ao buscar logs de auditoria' }
	}
}

export async function getAuditLogEntities() {
	try {
		const permission = await checkPermission('read', 'owner')
		if (!permission.allowed) return { success: false, error: 'Acesso negado' }

		const organization = await prisma.organization.findFirst()
		if (!organization) return { success: false, error: 'Org não encontrada' }

		const result = await prisma.auditLog.findMany({
			where: { organizationId: organization.id },
			select: { entity: true },
			distinct: ['entity'],
			orderBy: { entity: 'asc' },
		})

		return {
			success: true,
			data: result.map((r) => r.entity),
		}
	} catch (error) {
		return { success: false, error: 'Erro ao buscar entidades dos logs' }
	}
}
