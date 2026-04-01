import { AlertCircle, Shield, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { PermissionSelector } from './_components/permission-selector'
import { getMembersWithPermissions } from './_data-access/get-members-permissions'

// Módulos específicos do Narrativa Blog
const BLOG_MODULES = [
	{ key: 'articles', label: 'Artigos' },
	{ key: 'categories', label: 'Categorias' },
	{ key: 'newsletter', label: 'Newsletter' },
	{ key: 'site', label: 'Configurações do Site' },
	{ key: 'owner', label: 'Administração' },
]

export default async function PermissionsPage() {
	const result = await getMembersWithPermissions()

	if (!result.success) {
		return (
			<div className="flex min-h-svh items-center justify-center p-4">
				<div className="flex max-w-md items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
					<AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
					<p className="text-sm">{result.error}</p>
				</div>
			</div>
		)
	}

	const members = result.data ?? []

	return (
		<div className="flex min-h-svh flex-col gap-6 px-4 py-6">
			{/* Header */}
			<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
				<div className="flex items-start gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
						<Shield className="h-6 w-6 text-primary" />
					</div>
					<div>
						<h1 className="text-2xl font-bold tracking-tight md:text-3xl text-foreground">
							Gerenciar Permissões
						</h1>
						<p className="mt-1 text-muted-foreground">
							Configure o nível de acesso da equipe do Narrativa Blog
						</p>
					</div>
				</div>
			</div>

			{/* Selector */}
			{members.length > 0 ? (
				<PermissionSelector members={members as any} modules={BLOG_MODULES} />
			) : (
				<Card>
					<CardContent className="flex flex-col items-center justify-center py-12">
						<Users className="mb-4 h-12 w-12 text-muted-foreground/50" />
						<p className="font-medium text-center text-muted-foreground">
							Nenhum membro encontrado
						</p>
						<p className="mt-1 text-center text-muted-foreground text-sm">
							Adicione membros à equipe para gerenciar permissões
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	)
}
