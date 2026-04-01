import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { organization, username } from 'better-auth/plugins'
import { ROLES } from '@/generated/prisma/enums'
import { prisma } from './prisma'

interface BetterAuthUser {
  id: string
  role?: string
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'mysql',
  }),
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'author',
      },
    },
  },
  plugins: [organization(), username()],
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          const authUser = user as unknown as BetterAuthUser

          // Após criar o usuário, buscamos a organização e o vinculamos
          try {
            const organization = await prisma.organization.findFirst()

            if (organization) {
              const rawRole = authUser.role
              const finalRole =
                typeof rawRole === 'string'
                  ? (rawRole.toUpperCase() as ROLES)
                  : ROLES.AUTHOR

              await prisma.member.upsert({
                where: {
                  userId_organizationId: {
                    userId: authUser.id,
                    organizationId: organization.id,
                  },
                },
                create: {
                  userId: authUser.id,
                  role: finalRole,
                  organizationId: organization.id,
                },
                update: {
                  role: finalRole,
                },
              })
            } else {
              console.warn(
                'Nenhuma organização encontrada para vincular o novo usuário.',
              )
            }
          } catch (error) {
            console.error('Erro ao criar membro após cadastro:', error)
          }
        },
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  rateLimit: {
    window: 10,
    max: 100,
    pages: {
      signIn: true,
      signUp: true,
      '/login': true,
    },
  },
})
