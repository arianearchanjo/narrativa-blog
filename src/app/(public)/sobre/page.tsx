import { FadeUp } from "@/components/fade-up";
import { SectionTitle } from "@/components/section-title";
import { NewsletterWidget } from "@/components/newsletter-widget";

const pilares = [
  {
    num: "01",
    title: "Profundidade",
    text: "Análise que vai além do fato imediato. Contexto histórico, mapa de atores e consequências possíveis — não apenas o que aconteceu, mas por que aconteceu e o que pode vir.",
  },
  {
    num: "02",
    title: "Rigor",
    text: "Sem espetáculo, sem sensacionalismo. A análise política séria exige cuidado com as fontes, precisão nas afirmações e honestidade intelectual sobre o que se sabe e o que se especula.",
  },
  {
    num: "03",
    title: "Contraste",
    text: "O poder opera em camadas. A narrativa pública e a dinâmica real raramente coincidem. Colocar essas camadas em contraste é o método central deste projeto.",
  },
  {
    num: "04",
    title: "Independência",
    text: "Sem vínculo com partidos, candidatos ou governos. A Narrativa não tem agenda partidária — tem compromisso com a análise honesta e a informação qualificada.",
  },
  {
    num: "05",
    title: "Antecipação",
    text: "A política raramente reage apenas ao agora — ela se antecipa ao que pode vir. Identificar esses movimentos antes que se tornem evidentes é um dos objetivos centrais desta publicação.",
  },
  {
    num: "06",
    title: "Linguagem",
    text: "Análise política não precisa ser árida. O texto da Narrativa busca combinar precisão analítica com clareza narrativa — legível, mas sem abrir mão da profundidade.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-narrativa-preto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(4rem,8vw,7rem)]"
        aria-label="Título da página"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-narrativa-vermelho mb-6">
            Sobre o projeto
          </p>
          <FadeUp>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-black text-narrativa-branco tracking-[-0.02em] leading-[1.05]">
              O que não é dito
              <br />
              também é<span className="text-narrativa-vermelho"> narrativa</span>.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="py-[clamp(3rem,6vw,5rem)]">
          {/* Grid principal */}
          <div className="grid grid-cols-2 gap-20 items-start max-md:grid-cols-1">
            {/* Texto */}
            <div>
              <p className="text-[1.25rem] leading-[1.65] text-narrativa-preto font-light mb-5">
                <strong className="font-bold">Narrativa</strong> é um blog de
                análise política dedicado a entender o que está por trás do
                discurso público — o que é dito, o que é evitado e, sobretudo, o
                que se constrói em silêncio.
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-narrativa-cinza-texto mb-5">
                A política raramente acontece no espaço visível das coletivas de
                imprensa e notas oficiais. Ela se organiza nos encontros
                reservados, nas agendas paralelas, nas mudanças sutis de
                posicionamento que ninguém anuncia — mas que todos os atores
                envolvidos percebem.
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-narrativa-cinza-texto mb-5">
                É nesse intervalo — entre o que é anunciado e o que é articulado
                — que este projeto existe.
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-narrativa-cinza-texto mb-5">
                Com foco inicial no Paraná e sua relação com o cenário nacional,
                a Narrativa busca mapear movimentos que precedem os fatos
                públicos: reorganizações de campo, recalibramentos de aliança,
                descompassos entre discurso e dinâmica real. Não por espetáculo,
                mas por rigor analítico.
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-narrativa-cinza-texto mb-5">
                O discurso tem limites. Ele organiza a percepção, mas não
                elimina a dinâmica real do poder — que segue em movimento, ainda
                que de forma discreta. Entender esse movimento é o que nos propõe
                a Narrativa.
              </p>
            </div>

            {/* Manifesto + decorative */}
            <div>
              <div className="bg-narrativa-preto p-12 text-narrativa-branco">
                <p className="text-[1.1rem] italic leading-[1.7] text-white/70 mb-5">
                  &ldquo;A versão oficial é de normalidade. O discurso público
                  insiste em estabilidade. Mas como quase sempre na política, o
                  que se diz em público não revela completamente o que se
                  constrói nos bastidores.&rdquo;
                </p>
                <p className="text-[1.1rem] italic leading-[1.7] text-white/70">
                  <strong className="text-narrativa-branco not-italic">
                    Entender o que está acontecendo passa menos pelo que é dito —
                    e mais pelo que, cuidadosamente, não é.
                  </strong>
                </p>
              </div>

              {/* Decorative blocks */}
              <div className="grid grid-cols-2 gap-2 mt-2 max-sm:hidden">
                <div className="bg-narrativa-preto aspect-square flex items-center justify-center p-8">
                  <p className="text-[1.4rem] italic text-white/70 leading-[1.4]">
                    O poder como{" "}
                    <strong className="text-narrativa-vermelho not-italic">
                      construção
                    </strong>
                  </p>
                </div>
                <div className="bg-narrativa-vermelho aspect-square flex items-center justify-center">
                  <p className="text-[2.5rem] font-black text-white/15 tracking-[-0.02em]">
                    VERSÃO
                  </p>
                </div>
                <div className="bg-narrativa-cinza-claro aspect-[2/1] col-span-2 flex items-end p-6">
                  <p className="text-[0.68rem] tracking-[0.15em] uppercase text-[#aaa]">
                    narrativa.blog.br · análise política · paraná · brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pilares editoriais */}
          <div className="mt-16 pt-12 border-t border-narrativa-cinza-linha">
            <SectionTitle title="Pilares editoriais" />

            <div className="grid grid-cols-3 gap-10 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1">
              {pilares.map((pilar) => (
                <FadeUp key={pilar.num}>
                  <div className="pt-6 border-t-[3px] border-narrativa-cinza-linha hover:border-narrativa-vermelho transition-colors group">
                    <p className="text-[2.5rem] font-black text-narrativa-cinza-linha leading-none mb-3 group-hover:text-narrativa-vermelho transition-colors">
                      {pilar.num}
                    </p>
                    <h3 className="text-[1.15rem] font-bold mb-2">
                      {pilar.title}
                    </h3>
                    <p className="text-[0.9rem] text-narrativa-cinza-texto leading-[1.65]">
                      {pilar.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-12 bg-narrativa-cinza-claro grid grid-cols-2 gap-12 items-center max-sm:grid-cols-1">
            <div>
              <span className="block w-12 h-[3px] bg-narrativa-vermelho mb-5" />
              <h2 className="text-[1.8rem] mb-4">
                Acompanhe a Narrativa
              </h2>
              <p className="text-[0.95rem] text-narrativa-cinza-texto leading-[1.7]">
                Receba novas análises diretamente no seu e-mail. Sem algoritmo,
                sem agenda — só análise política séria.
              </p>
            </div>
            <div>
              <NewsletterWidget variant="inline" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
