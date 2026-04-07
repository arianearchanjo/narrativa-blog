import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AlertCircle, History } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { LogDetailDialog } from './_components/log-detail-dialog'
import { LogFilters } from './_components/log-filters'
import { LogPagination } from './_components/log-pagination'
import {
  getAuditLogEntities,
  getAuditLogs,
} from './_data-access/get-audit-logs'

interface Props {
  searchParams: Promise<{
    page?: string
    action?: string
    entity?: string
  }>
}

export default async function AuditLogsPage({ searchParams }: Props) {
  const params = await searchParams
  const page = Number(params.page) || 1
  const action = params.action
  const entity = params.entity

  const [result, entitiesResult] = await Promise.all([
    getAuditLogs({ page, action, entity }),
    getAuditLogEntities(),
  ])

  if (!result.success || !result.data) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
        <AlertCircle className="h-5 w-5 shrink-0" />
        <p className="text-sm">{result.error || 'Erro ao carregar logs'}</p>
      </div>
    )
  }

  const { logs, totalPages, total } = result.data
  const entities = entitiesResult.success ? entitiesResult.data : []

  return (
    <div className="flex flex-col gap-8 px-4 py-6">
      {/* Cabeçalho */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-card shadow-sm">
          <History className="h-6 w-6 text-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Logs de Auditoria
          </h1>
          <p className="text-sm text-muted-foreground">
            Histórico completo de ações realizadas no Narrativa Blog · {total}{' '}
            registros
          </p>
        </div>
      </div>

      <LogFilters entities={entities || []} />

      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="px-4 py-3 font-medium">Data</TableHead>
              <TableHead className="px-4 py-3 font-medium">Usuário</TableHead>
              <TableHead className="px-4 py-3 font-medium">Ação</TableHead>
              <TableHead className="px-4 py-3 font-medium">Módulo</TableHead>
              <TableHead className="px-4 py-3 font-medium">Entidade</TableHead>
              <TableHead className="px-4 py-3 font-medium text-right">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                  {format(new Date(log.createdAt), 'dd/MM/yyyy HH:mm', {
                    locale: ptBR,
                  })}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-medium">{log.userName}</span>
                    <span className="text-xs text-muted-foreground">
                      {log.userEmail}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-secondary text-secondary-foreground">
                    {log.action}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-3 font-mono text-[10px] text-muted-foreground">
                  {log.entity}
                </TableCell>
                <TableCell className="px-4 py-3 text-muted-foreground">
                  {log.entityName || '-'}
                </TableCell>
                <TableCell className="px-4 py-3 text-right">
                  <LogDetailDialog
                    before={log.before}
                    after={log.after}
                    entityName={log.entityName}
                    entityId={log.entityId}
                    action={log.action}
                  />
                </TableCell>
              </TableRow>
            ))}
            {logs.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="px-4 py-12 text-center text-muted-foreground italic"
                >
                  Nenhum registro de auditoria encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <LogPagination
        page={page}
        totalPages={totalPages}
        total={total}
        pageSize={20}
      />
    </div>
  )
}
