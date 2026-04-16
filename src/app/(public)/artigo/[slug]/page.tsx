import Link from "next/link";
import Image from "next/image";
import { ReadingProgress } from "@/components/reading-progress";
import { QuoteBlock } from "@/components/quote-block";
import { HighlightPhrase } from "@/components/highlight-phrase";
import { NewsletterWidget } from "@/components/newsletter-widget";
import { FadeUp } from "@/components/fade-up";

const relatedArticles = [
  {
    title: "A antecipação como estratégia política",
    date: "22 mar 2025",
    slug: "a-antecipacao-como-estrategia",
  },
  {
    title: "Discurso como ferramenta de poder",
    date: "14 mar 2025",
    slug: "o-discurso-como-ferramenta",
  },
  {
    title: "Alianças sob novas condições",
    date: "05 mar 2025",
    slug: "aliancas-sob-novas-condicoes",
  },
];

const articleTags = ["Paraná", "Poder", "Discurso", "Bastidores", "Alianças"];

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  void slug;

  return (
    <>
      <ReadingProgress />

      {/* Hero / Cabeçalho Escuro */}
      <header className="bg-narrativa-preto px-[clamp(1.5rem,5vw,4rem)] py-[3rem] lg:py-[4rem]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[3rem] items-center">
          
          {/* Coluna Esquerda: Conteúdo */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold"
              >
                ← Voltar
              </Link>
              <span className="text-white/15">|</span>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold">
                Matéria Política · Paraná
              </span>
            </div>

            <FadeUp>
              <h1 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-black text-narrativa-branco leading-[1.08] mb-6 tracking-[-0.02em]">
                Entre o discurso
                <br />
                e o movimento
                <br />
                silencioso
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-[clamp(1rem,1.5vw,1.15rem)] text-white/50 leading-[1.6] font-light max-w-[600px] border-l-2 border-narrativa-vermelho pl-5">
                A versão oficial é de normalidade. Mas como quase sempre na
                política, o que se diz em público não revela completamente o que
                se constrói nos bastidores.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-8 flex-wrap">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-narrativa-vermelho flex items-center justify-center text-[0.85rem] font-bold text-narrativa-branco shrink-0">
                    N
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[0.78rem] font-bold text-narrativa-branco tracking-[0.04em]">
                      Redação Narrativa
                    </span>
                    <span className="text-[0.65rem] text-white/35 tracking-[0.08em] uppercase">
                      30 de março de 2025
                    </span>
                  </div>
                </div>
                <span className="text-[0.65rem] tracking-[0.1em] uppercase text-white/30">
                  7 min de leitura
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Coluna Direita: Imagem de Capa */}
          <FadeUp delay={0.3} className="w-full">
            <div className="relative w-full h-[250px] lg:h-[380px] overflow-hidden rounded-[8px]">
              <Image
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop"
                alt="Imagem de capa da matéria"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeUp>

        </div>
      </header>

      {/* Body */}
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="py-[clamp(3rem,6vw,5rem)]">
          <div className="grid grid-cols-[1fr_280px] gap-20 items-start max-md:grid-cols-1">
            {/* Article text */}
            <article className="max-w-[680px] article-drop-cap">
              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                A versão oficial é de normalidade.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                O discurso público insiste em estabilidade, alinhamento
                institucional e compromisso com agendas que, ao menos no papel,
                seguem previsíveis. Mas, como quase sempre na política, o que se
                diz em público não revela completamente o que se constrói nos
                bastidores.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                No Paraná, o cenário recente tem sido marcado por uma
                movimentação silenciosa — daquelas que não aparecem em
                coletivas, nem em notas oficiais, mas que se manifestam em
                agendas paralelas, encontros reservados e mudanças sutis de
                posicionamento.
              </p>

              <QuoteBlock cite="Narrativa · Matéria Política">
                A política se organiza justamente nesse espaço: entre o que é
                anunciado e o que é articulado.
              </QuoteBlock>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Nada disso é, por si só, incomum. A política se organiza
                justamente nesse espaço: entre o que é anunciado e o que é
                articulado.
              </p>

              <h2 className="text-[clamp(1.4rem,3vw,1.9rem)] mt-10 mb-4 pt-4 border-t border-narrativa-cinza-linha">
                O ponto de atenção está no descompasso
              </h2>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Enquanto o discurso projeta continuidade, os sinais indicam
                reorganização. Lideranças que até então orbitavam o mesmo campo
                começam a recalibrar suas posições. Interlocutores mudam,
                prioridades são revistas, e alianças — ainda que não rompidas —
                passam a operar sob novas condições.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Esse tipo de movimento raramente é explicado de forma direta.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Em vez disso, ele aparece diluído em expressões genéricas:
                &ldquo;ajustes&rdquo;, &ldquo;diálogo permanente&rdquo;,
                &ldquo;reavaliação de cenário&rdquo;. Termos que, na prática,
                funcionam mais como proteção narrativa do que como explicação.
              </p>

              <HighlightPhrase>
                &ldquo;Termos que funcionam mais como proteção narrativa do que
                como explicação.&rdquo;
              </HighlightPhrase>

              <h2 className="text-[clamp(1.4rem,3vw,1.9rem)] mt-10 mb-4 pt-4 border-t border-narrativa-cinza-linha">
                O contexto local encontra o nacional
              </h2>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                E é justamente aí que o contexto local encontra o nacional.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                O que se observa no Paraná não está isolado. Há uma sintonia
                com o ambiente político mais amplo, em que a antecipação de
                cenários futuros começa a influenciar decisões presentes. A
                política, afinal, raramente reage apenas ao agora — ela se
                antecipa ao que pode vir.
              </p>

              <h3 className="text-[1.2rem] mt-8 mb-3">
                O discurso como construção de realidade
              </h3>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Nesse processo, o discurso cumpre um papel central.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Não apenas como instrumento de comunicação, mas como ferramenta
                de construção de realidade. Ao afirmar estabilidade, busca-se
                produzi-la. Ao evitar conflitos, tenta-se contê-los antes que
                se tornem visíveis.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Mas o discurso tem limites.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                Ele organiza a percepção, mas não elimina a dinâmica real do
                poder — que segue em movimento, ainda que de forma discreta.
              </p>

              <QuoteBlock cite="Narrativa · 30 mar 2025">
                O que se vê é um cenário duplo: de um lado, a narrativa pública
                de equilíbrio. De outro, a reorganização silenciosa que antecipa
                novos arranjos.
              </QuoteBlock>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                No fim, o que se vê é um cenário duplo.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                De um lado, a narrativa pública de equilíbrio. De outro, a
                reorganização silenciosa que antecipa novos arranjos.
              </p>

              <p className="text-[clamp(1rem,1.5vw,1.1rem)] leading-[1.85] text-narrativa-cinza-texto mb-6">
                E como quase sempre na política, entender o que está acontecendo
                passa menos pelo que é dito — e mais pelo que, cuidadosamente,
                não é.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-8 pt-6 border-t border-narrativa-cinza-linha items-center">
                <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-narrativa-vermelho mr-3">
                  Temas:
                </span>
                {articleTags.map((tag) => (
                  <Link
                    key={tag}
                    href="#"
                    className="inline-block border border-narrativa-cinza-linha px-3 py-1.5 text-[0.65rem] tracking-[0.1em] uppercase text-narrativa-cinza-texto hover:border-narrativa-preto hover:bg-narrativa-preto hover:text-narrativa-branco transition-all"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside
              className="sticky top-[100px] flex flex-col gap-8 max-md:static max-md:grid max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1"
              aria-label="Conteúdo relacionado"
            >
              {/* Related */}
              <div className="pb-6 border-b border-narrativa-cinza-linha">
                <p className="text-[0.63rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-narrativa-cinza-linha">
                  Leia também
                </p>
                {relatedArticles.map((a) => (
                  <Link key={a.slug} href={`/artigo/${a.slug}`} className="block">
                    <div className="flex gap-3 py-3 border-b border-narrativa-cinza-linha last:border-b-0">
                      <div className="w-14 h-14 shrink-0 bg-narrativa-cinza-claro" />
                      <div>
                        <p className="text-[0.88rem] leading-[1.3] font-bold">
                          {a.title}
                        </p>
                        <p className="text-[0.62rem] text-[#aaa] tracking-[0.08em] uppercase mt-1">
                          {a.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* About */}
              <div className="pb-6 border-b border-narrativa-cinza-linha">
                <p className="text-[0.63rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-narrativa-cinza-linha">
                  Sobre o projeto
                </p>
                <p className="text-[0.85rem] text-narrativa-cinza-texto leading-[1.65]">
                  Narrativa é um blog de matéria política com foco no que está
                  por trás do discurso público. Sem agenda, sem espetáculo.
                </p>
                <Link
                  href="/sobre"
                  className="inline-block mt-4 text-[0.68rem] tracking-[0.14em] uppercase font-bold text-narrativa-vermelho border-b border-narrativa-vermelho pb-px"
                >
                  Saiba mais →
                </Link>
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-[0.63rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold mb-4 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-narrativa-cinza-linha">
                  Newsletter
                </p>
                <NewsletterWidget buttonLabel="Assinar" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
