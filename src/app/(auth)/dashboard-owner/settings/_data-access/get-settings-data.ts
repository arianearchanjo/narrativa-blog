'use server'

import { checkPermission } from '@/lib/permissions/check-permission'
import { prisma } from '@/lib/prisma'
import { ROLES } from '@/lib/permissions/enum'

export interface MemberItem {
	id: string
	userId: string
	role: ROLES
	user: {
		id: string
		name: string
		email: string
		image?: string | null
	}
}

export async function getSettingsData() {
	try {
		// 1. Validamos se quem está acessando é OWNER ou ADMIN
		const permission = await checkPermission('read', 'owner')
		if (!permission.allowed) {
			return { success: false, error: 'Acesso negado' }
		}

		// 2. Buscamos a única organização e todos os usuários que não são membros dela
		const organization = await prisma.organization.findFirst({
			include: {
				members: {
					include: {
						user: {
							select: { id: true, name: true, email: true, image: true },
						},
					},
				},
			},
		})

		if (!organization) {
			return { success: false, error: 'Organização não encontrada' }
		}

		const nonMembers = await prisma.user.findMany({
			where: {
				members: {
					none: { organizationId: organization.id },
				},
			},
			select: { id: true, name: true, email: true, image: true },
		})

		const members: MemberItem[] = organization.members.map((m) => ({
			id: m.id,
			userId: m.userId,
			role: m.role as ROLES,
			user: {
				id: m.user.id,
				name: m.user.name,
				email: m.user.email,
				image: m.user.image,
			},
		}))

		return {
			success: true,
			data: {
				id: organization.id,
				name: organization.name,
				slug: organization.slug,
				logo: organization.logo ?? '',
				members,
				nonMembers,
			},
		}
	} catch (error) {
		console.error('getSettingsData error:', error)
		return { success: false, error: 'Erro ao buscar dados das configurações' }
	}
}
