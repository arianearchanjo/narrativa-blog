# Relacionamentos do Schema Prisma

## Visao Geral

```
User
 ├── 1:N ── Session       (cascade delete)
 ├── 1:N ── Account       (cascade delete)
 └── 1:N ── Article       (cascade delete)
                ├── N:1 ── Category   (set null on delete)
                └── N:M ── Tag        (via ArticleTag, cascade delete)

Independentes: Verification, Subscriber, SiteConfig, Page
```

---

## Relacionamentos Detalhados

### User → Session (1:N)

| Campo FK | Referencia | On Delete |
|----------|------------|-----------|
| `Session.userId` | `User.id` | Cascade |

Um usuario pode ter varias sessoes ativas. Ao deletar o usuario, todas as sessoes sao removidas.

---

### User → Account (1:N)

| Campo FK | Referencia | On Delete |
|----------|------------|-----------|
| `Account.userId` | `User.id` | Cascade |

Um usuario pode ter varias contas de provedores (Google, GitHub, email/senha, etc.). Ao deletar o usuario, todas as contas sao removidas.

---

### User → Article (1:N)

| Campo FK | Referencia | On Delete |
|----------|------------|-----------|
| `Article.authorId` | `User.id` | Cascade |

Um usuario (autor) pode ter varios artigos. Ao deletar o usuario, todos os artigos dele sao removidos.

---

### Article → Category (N:1)

| Campo FK | Referencia | On Delete |
|----------|------------|-----------|
| `Article.categoryId` | `Category.id` | SetNull |

Cada artigo pertence a no maximo uma categoria (campo opcional). Ao deletar a categoria, o `categoryId` do artigo vira `null` — o artigo **nao** e deletado.

---

### Article ↔ Tag (N:M via ArticleTag)

| Campo FK | Referencia | On Delete |
|----------|------------|-----------|
| `ArticleTag.articleId` | `Article.id` | Cascade |
| `ArticleTag.tagId` | `Tag.id` | Cascade |

Relacao muitos-para-muitos. A tabela pivo `ArticleTag` usa chave primaria composta `(articleId, tagId)`. Ao deletar um artigo ou uma tag, os vinculos na tabela pivo sao removidos.

---

## Modelos Independentes

| Modelo | Descricao |
|--------|-----------|
| **Verification** | Tokens de verificacao de email (Better Auth) |
| **Subscriber** | Assinantes da newsletter |
| **SiteConfig** | Configuracoes do site em formato chave/valor |
| **Page** | Paginas estaticas (sobre, contato, etc.) |

---

## Diagrama ER

```
┌──────────┐       ┌───────────┐
│   User   │1────N│  Session   │
│          │       └───────────┘
│          │       ┌───────────┐
│          │1────N│  Account   │
│          │       └───────────┘
│          │       ┌───────────┐      ┌────────────┐      ┌─────────┐
│          │1────N│  Article   │N───1│  Category   │      │Verificat│
└──────────┘       │           │      └────────────┘      │  ion    │
                   │           │                          └─────────┘
                   │           │      ┌────────────┐      ┌─────────┐
                   │           │N───N│    Tag      │      │Subscrib │
                   └───────────┘      └────────────┘      │  er     │
                         │                  │              └─────────┘
                         └──────┬───────────┘              ┌─────────┐
                          ┌─────┴──────┐                   │SiteConf │
                          │ ArticleTag │                   │  ig     │
                          │  (pivot)   │                   └─────────┘
                          └────────────┘                   ┌─────────┐
                                                           │  Page   │
                                                           └─────────┘
```
