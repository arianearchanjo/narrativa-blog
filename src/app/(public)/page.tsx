import { ArticleCard } from '@/components/article-card'
import { HeroHome } from '@/components/hero-home'
import { Pagination } from '@/components/pagination-nav'
import { SectionTitle } from '@/components/section-title'
import { SeparatorSection } from '@/components/separator-section'
import { SidebarHome } from '@/components/sidebar-home'

const postsRecentes = [
  {
    tag: 'Paraná',
    title: 'Entre o discurso e o movimento silencioso',
    subtitle:
      'A version oficial é de normalidade. Mas como quase sempre na política, o que se diz em público não revela completamente o que se constrói nos bastidores.',
    date: '31 mar 2025',
    readTime: '7 min de leitura',
    slug: 'entre-o-discurso-e-o-movimento-silencioso',
    imageIndex: 1,
  },
  {
    tag: 'Brasil',
    title:
      'A antecipação como estratégia: o movimento que não aparece em coletivas',
    subtitle:
      'A política raramente reage apenas ao agora — ela se antecipa ao que pode vir. E é nesse intervalo que os arranjos se formam.',
    date: '22 mar 2025',
    readTime: '9 min de leitura',
    slug: 'a-antecipacao-como-estrategia',
    imageIndex: 2,
  },
  {
    tag: 'Curitiba',
    title:
      'O discurso como ferramenta: quando estabilidade é a mensagem, não o estado',
    subtitle:
      'Ao afirmar estabilidade, busca-se produzi-la. Ao evitar conflitos, tenta-se contê-los antes que se tornem visíveis.',
    date: '14 mar 2025',
    readTime: '5 min de leitura',
    slug: 'o-discurso-como-ferramenta',
    imageIndex: 3,
  },
  {
    tag: 'Alianças',
    title:
      'Alianças sob novas condições: o que não é rompido, mas opera diferente',
    subtitle:
      'Alianças que não foram rompidas, mas que passaram a operar sob novas condições. O descompasso entre o que se anuncia e o que se articula.',
    date: '05 mar 2025',
    readTime: '6 min de leitura',
    slug: 'aliancas-sob-novas-condicoes',
    imageIndex: 4,
  },
  {
    tag: 'Curitiba',
    title: 'A gramática do silêncio: o que as notas oficiais não dizem',
    subtitle:
      'Muitas vezes, a notícia mais importante de uma nota oficial está naquilo que ela evita mencionar. O silêncio como ferramenta de gestão de crise.',
    date: '28 fev 2025',
    readTime: '8 min de leitura',
    slug: 'a-gramatica-do-silencio',
    imageIndex: 1,
  },
  {
    tag: 'Paraná',
    title: 'O mapa da influência: quem realmente orbita o centro do poder',
    subtitle:
      'Para além dos cargos nomeados, existe um círculo de influência que opera fora do organograma tradicional. Mapeamos os novos interlocutores.',
    date: '20 fev 2025',
    readTime: '10 min de leitura',
    slug: 'o-mapa-da-influencia',
    imageIndex: 2,
  },
  {
    tag: 'Brasil',
    title: 'O horizonte de 2026: os movimentos que antecipam a sucessão',
    subtitle:
      'Embora o calendário aponte para o futuro, as peças do tabuleiro sucessório já começaram a se mover. Quem ganha espaço na reorganização.',
    date: '12 fev 2025',
    readTime: '12 min de leitura',
    slug: 'o-horizonte-de-2026',
    imageIndex: 3,
  },
  {
    tag: 'Narrativa',
    title: 'Versão e contraversão: a disputa narrativa nas redes sociais',
    subtitle:
      'Como os fatos políticos são lapidados antes de chegarem ao público. A engenharia por trás das "verdades" digitais.',
    date: '05 fev 2025',
    readTime: '6 min de leitura',
    slug: 'versao-e-contraversao',
    imageIndex: 4,
  },
  {
    tag: 'Rito',
    title: 'O peso do institucional: quando o rito protege a decisão',
    subtitle:
      'Em momentos de incerteza, o apego ao rito e à burocracia serve como escudo para decisões políticas complexas.',
    date: '28 jan 2025',
    readTime: '7 min de leitura',
    slug: 'o-peso-do-institucional',
    imageIndex: 1,
  },
  {
    tag: 'Paraná',
    title: 'O tabuleiro paranaense e sua posição no cenário nacional',
    subtitle:
      'Como as articulações locais no Paraná estão sendo observadas por Brasília e quais os reflexos dessa relação nas alianças nacionais.',
    date: '20 jan 2025',
    readTime: '9 min de leitura',
    slug: 'tabuleiro-paranaense',
    imageIndex: 2,
  },
]

const bastidores = [
  {
    tag: 'Narrativa',
    title: 'Proteção narrativa: os termos que explicam sem explicar',
    subtitle:
      '"Ajustes", "diálogo permanente", "reavaliação de cenário" — termos que funcionam mais como proteção do que como explicação.',
    date: '28 fev 2025',
    readTime: '4 min de leitura',
    slug: 'protecao-narrativa',
    imageIndex: 2,
  },
  {
    tag: 'Bastidores',
    title: 'O cenário duplo: narrativa pública e reorganização silenciosa',
    subtitle:
      'De um lado, a narrativa pública de equilíbrio. De outro, a reorganização silenciosa que antecipa novos arranjos.',
    date: '20 fev 2025',
    readTime: '8 min de leitura',
    slug: 'o-cenario-duplo',
    imageIndex: 3,
  },
]

const normalizeString = (str: string) => 
  str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const { page: pageParam, category } = await searchParams;
  const currentPage = Number(pageParam) || 1;
  const postsPerPage = 6;

  const filteredPosts = category 
    ? postsRecentes.filter(post => normalizeString(post.tag) === normalizeString(category))
    : postsRecentes;

  const displayCategory = category && filteredPosts.length > 0 
    ? filteredPosts[0].tag 
    : category;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIdx = (currentPage - 1) * postsPerPage;
  const endIdx = startIdx + postsPerPage;
  const currentPosts = filteredPosts.slice(startIdx, endIdx);

  return (
    <>
      <HeroHome />

      <div className="max-w-300 mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-[1fr_340px] gap-16 py-[clamp(3rem,6vw,5rem)] max-md:grid-cols-1 max-md:gap-12">
          {/* Main column */}
          <div>
            <section id="posts" aria-labelledby="titulo-recentes" className="scroll-mt-32">
              <SectionTitle 
                title={category ? `Matérias: ${displayCategory}` : "Matérias Recentes"} 
                id="titulo-recentes" 
              />
              
              {/* Featured two large articles - only on first page and when not filtering */}
              {currentPage === 1 && !category && (
                <div className="grid grid-cols-2 gap-10 mb-12 max-sm:grid-cols-1">
                  {currentPosts.slice(0, 2).map((article, i) => (
                    <ArticleCard
                      key={article.slug}
                      {...article}
                      variant="large"
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              )}

              {/* List of other articles */}
              <ol className="flex flex-col">
                {(currentPage === 1 && !category ? currentPosts.slice(2) : currentPosts).map(
                  (article, i) => (
                    <ArticleCard
                      key={article.slug}
                      {...article}
                      delay={i * 0.08}
                      showTag
                    />
                  )
                )}
              </ol>
              
              {filteredPosts.length === 0 && (
                <p className="py-20 text-center text-narrativa-cinza-texto italic">
                  Nenhuma matéria encontrada nesta categoria.
                </p>
              )}
              
              {totalPages > 1 && (
                <Pagination current={currentPage} total={totalPages} />
              )}
            </section>

            <SeparatorSection text="Bastidores do poder" />

            <section id="bastidores" aria-labelledby="titulo-bastidores" className="scroll-mt-32">
              <SectionTitle
                id="titulo-bastidores"
                title="Bastidores & Versão"
                showViewAll
              />
              <ol className="flex flex-col">
                {bastidores.map((article, i) => (
                  <ArticleCard
                    key={article.slug}
                    {...article}
                    delay={i * 0.08}
                  />
                ))}
              </ol>
            </section>
          </div>

          {/* Sidebar */}
          <SidebarHome />
        </div>
      </div>
    </>
  )
}
