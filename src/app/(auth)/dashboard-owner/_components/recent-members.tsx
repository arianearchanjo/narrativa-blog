import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface RecentMembersProps {
  members: any[]
}

export function RecentMembersList({ members }: RecentMembersProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Membros Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {members.map((m) => (
            <div key={m.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={m.image} />
                <AvatarFallback>{m.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium leading-none">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.email}</p>
              </div>
              <div className="ml-auto flex flex-col items-end gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                  {m.role}
                </span>
                <span className="text-[10px] text-muted-foreground/60">
                  {format(new Date(m.createdAt), "dd MMM yyyy", { locale: ptBR })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
