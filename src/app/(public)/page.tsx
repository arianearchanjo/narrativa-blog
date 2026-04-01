import { ArticleCard } from '@/components/article-card'
import { HeroHome } from '@/components/hero-home'
import { Pagination } from '@/components/pagination-nav'
import { SectionTitle } from '@/components/section-title'
import { SeparatorSection } from '@/components/separator-section'
import { SidebarHome } from '@/components/sidebar-home'

const analisesRecentes = [
  {
    tag: 'Paraná',
    title: 'Entre o discurso e o movimento silencioso do poder',
    subtitle:
      'Enquanto o discurso projeta continuidade, os sinais indicam reorganização. Lideranças recalibram posições. Interlocutores mudam.',
    date: '30 mar 2025',
    readTime: '7 min de leitura',
    slug: 'entre-o-discurso-e-o-movimento-silencioso',
    imageIndex: 1,
  },
  {
    tag: 'Nacional',
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
    tag: 'Bastidores',
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
    tag: 'Poder',
    title:
      'Alianças sob novas condições: o que não é rompido, mas opera diferente',
    subtitle:
      'Alianças que não foram rompidas, mas que passaram a operar sob novas condições. O descompasso entre o que se anuncia e o que se articula.',
    date: '05 mar 2025',
    readTime: '6 min de leitura',
    slug: 'aliancas-sob-novas-condicoes',
    imageIndex: 4,
  },
]

const bastidores = [
  {
    tag: 'Versão',
    title: 'Proteção narrativa: os termos que explicam sem explicar',
    subtitle:
      '"Ajustes", "diálogo permanente", "reavaliação de cenário" — termos que funcionam mais como proteção do que como explicação.',
    date: '28 fev 2025',
    readTime: '4 min de leitura',
    slug: 'protecao-narrativa',
    imageIndex: 2,
  },
  {
    tag: 'Cenário',
    title: 'O cenário duplo: narrativa pública e reorganização silenciosa',
    subtitle:
      'De um lado, a narrativa pública de equilíbrio. De outro, a reorganização silenciosa que antecipa novos arranjos.',
    date: '20 fev 2025',
    readTime: '8 min de leitura',
    slug: 'o-cenario-duplo',
    imageIndex: 3,
  },
]

export default function Home() {
  return (
    <>
      <HeroHome />

      <div className="max-w-300 mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-[1fr_340px] gap-16 py-[clamp(3rem,6vw,5rem)] max-md:grid-cols-1 max-md:gap-12">
          {/* Main column */}
          <div>
            <section id="analises" aria-labelledby="titulo-recentes">
              <SectionTitle
                id="titulo-recentes"
                title="Análises recentes"
                showViewAll
              />
              <ol className="flex flex-col" reversed>
                {analisesRecentes.map((article, i) => (
                  <ArticleCard
                    key={article.slug}
                    {...article}
                    delay={i * 0.08}
                  />
                ))}
              </ol>
              <Pagination current={1} total={3} />
            </section>

            <SeparatorSection text="Bastidores do poder" />

            <section id="bastidores" aria-labelledby="titulo-bastidores">
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
