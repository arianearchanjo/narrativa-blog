'use client'

import { Building2, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { updateOrganization } from '../_actions/update-organization'
import { Members } from './members'
import { OrganizationForm } from './organization-form'

interface Props {
	defaultValues: any
	members: any[]
	nonMembers: { id: string; name: string; email: string; image?: string | null }[]
}

const triggerClass =
	'relative h-11 rounded-none border-b-2 border-transparent px-4 font-medium text-muted-foreground transition-colors hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'

export function SettingsPanel({
	defaultValues,
	members,
	nonMembers,
}: Props) {
	const router = useRouter()
	const [status, setStatus] = useState(defaultValues.status || 'ACTIVE')
	const [isPendingStatus, startStatusTransition] = useTransition()

	const handleStatusChange = (newStatus: 'ACTIVE' | 'INACTIVE') => {
		setStatus(newStatus)
		startStatusTransition(async () => {
			try {
				const result = await updateOrganization({
					...defaultValues,
					status: newStatus,
				})
				if (result.success) {
					toast.success('Status atualizado!')
					router.refresh()
				} else {
					setStatus(defaultValues.status)
					toast.error(result.error || 'Erro ao atualizar status')
				}
			} catch {
				setStatus(defaultValues.status)
				toast.error('Erro ao atualizar status')
			}
		})
	}

	return (
		<Tabs defaultValue="info" className="w-full">
			<div className="mb-8 border-b">
				<TabsList className="h-auto w-full justify-start gap-0 rounded-none border-0 bg-transparent p-0">
					<TabsTrigger value="info" className={triggerClass}>
						<Building2 className="mr-2 h-4 w-4" />
						Organização
					</TabsTrigger>

					<TabsTrigger value="membros" className={triggerClass}>
						<Users className="mr-2 h-4 w-4" />
						Membros
						<Badge
							variant="secondary"
							className="ml-2 px-1.5 py-0 text-[10px] font-bold"
						>
							{members.length}
						</Badge>
					</TabsTrigger>
				</TabsList>
			</div>

			{/* ── Organização ── */}
			<TabsContent value="info" className="mt-0 outline-none">
				<div className="mb-8 flex flex-col gap-4 rounded-xl border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
					<Button
						variant="outline"
						disabled={isPendingStatus}
						onClick={() =>
							handleStatusChange(status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE')
						}
						className="h-9 shrink-0 px-4 font-medium sm:self-center"
					>
						<span
							className={cn(
								'mr-2 h-2 w-2 rounded-full',
								status === 'ACTIVE'
									? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'
									: 'bg-muted-foreground/50',
							)}
						/>
						{isPendingStatus
							? 'Atualizando...'
							: status === 'ACTIVE'
								? 'Organização Ativa'
								: 'Organização Inativa'}
					</Button>
				</div>
				<div className="px-1">
					<OrganizationForm
						key={status}
						defaultValues={{ ...defaultValues, status }}
					/>
				</div>
			</TabsContent>

			{/* ── Membros ── */}
			<TabsContent value="membros" className="mt-0">
				<Members initialMembers={members} initialNonMembers={nonMembers} />
			</TabsContent>
		</Tabs>
	)
}
