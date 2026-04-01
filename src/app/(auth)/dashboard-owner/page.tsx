import { Metrics } from './_components/metrics'
import { RecentMembersList } from './_components/recent-members'
import { getDashboardData } from './_data-access/get-dashboard-data'

export default async function DashboardOwnerPage() {
  const data = await getDashboardData()

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex flex-col gap-1.5 border-b pb-6">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_1px_rgba(16,185,129,0.5)]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Sistema Ativo
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Painel do Proprietário
        </h1>
        <p className="text-sm text-muted-foreground">
          Gestão central do Narrativa Blog · Controle de Equipe e Conteúdo
        </p>
      </div>

      <Metrics data={data.metrics} />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentMembersList members={data.recentMembers} />
        
        {/* Placeholder para futuras métricas de performance ou últimos posts */}
        <div className="flex flex-col justify-center items-center border border-dashed rounded-lg p-12 bg-muted/20">
            <p className="text-sm text-muted-foreground">Novas métricas em breve...</p>
        </div>
      </div>
    </div>
  )
}
