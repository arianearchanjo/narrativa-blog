import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, FolderTree, Users, Mail } from 'lucide-react'

interface MetricsProps {
  data: {
    totalArticles: number
    totalCategories: number
    totalSubscribers: number
    activeUsers: number
  }
}

export function Metrics({ data }: MetricsProps) {
  const metrics = [
    { label: 'Total de Artigos', value: data.totalArticles, icon: FileText, color: 'text-blue-500' },
    { label: 'Categorias Ativas', value: data.totalCategories, icon: FolderTree, color: 'text-emerald-500' },
    { label: 'Newsletter', value: data.totalSubscribers, icon: Mail, color: 'text-amber-500' },
    { label: 'Usuários Recentes', value: data.activeUsers, icon: Users, color: 'text-indigo-500' },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <Card key={m.label}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{m.label}</CardTitle>
            <m.icon className={`h-4 w-4 ${m.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{m.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
