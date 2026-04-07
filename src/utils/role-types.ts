export const ROLE_LABELS: Record<string, string> = {
  OWNER: 'Proprietário',
  ADMIN: 'Administrador',
  EDITOR: 'Editor',
  AUTHOR: 'Autor',
  USER: 'Usuário',
}

export const ROLE_COLORS: Record<string, string> = {
  OWNER: 'bg-red-500/10 text-red-500 border-red-500/20',
  ADMIN: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  EDITOR: 'bg-green-500/10 text-green-500 border-green-500/20',
  AUTHOR: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  USER: 'bg-slate-500/10 text-slate-500 border-slate-500/20',
}

export const PERMISSION_LABELS = {
  canCreate: {
    label: 'Criar',
    description: 'Permite criar novos registros',
  },
  canRead: {
    label: 'Visualizar',
    description: 'Permite visualizar registros',
  },
  canUpdate: {
    label: 'Editar',
    description: 'Permite editar registros existentes',
  },
  canDelete: {
    label: 'Excluir',
    description: 'Permite remover registros',
  },
}

export const DEFAULT_PERMISSIONS = {
  canCreate: false,
  canRead: true,
  canUpdate: false,
  canDelete: false,
}
