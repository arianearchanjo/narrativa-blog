import { prisma } from '@/lib/prisma'

export async function getDashboardData() {
  const [totalArticles, totalCategories, totalSubscribers, recentMembers] = await Promise.all([
    prisma.article.count(),
    prisma.category.count(),
    prisma.subscriber.count(),
    prisma.user.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        image: true,
      }
    })
  ])

  return {
    metrics: {
      totalArticles,
      totalCategories,
      totalSubscribers,
      activeUsers: recentMembers.length // Exemplo simples
    },
    recentMembers
  }
}
