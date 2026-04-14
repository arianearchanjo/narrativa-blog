# Narrativa Blog

Um blog moderno construído com Next.js, Prisma e Better-auth.

## 🚀 Como rodar o projeto

### 1. Instalar dependências
Certifique-se de usar o **pnpm**:
```bash
pnpm install
```

### 2. Configurar o Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais (use o `.env.example` se houver):
```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
BETTER_AUTH_SECRET="sua_chave_secreta"
BETTER_AUTH_URL="http://localhost:3000"
```

### 3. Banco de Dados
Gere o cliente do Prisma e sincronize o schema:
```bash
npx prisma generate
npx prisma db push
```

### 4. Iniciar o Desenvolvimento
```bash
pnpm dev
```
O projeto estará rodando em [http://localhost:3000](http://localhost:3000).

## 🛠 Scripts Disponíveis
- `pnpm dev`: Roda em modo desenvolvimento.
- `pnpm build`: Gera a build de produção.
- `pnpm start`: Inicia o servidor de produção.
- `pnpm lint`: Verifica erros de linting com Biome.
- `pnpm format`: Formata o código automaticamente.
