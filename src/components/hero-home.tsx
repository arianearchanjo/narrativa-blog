import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/fade-up";

export function HeroHome() {
  return (
    <section
      className="bg-narrativa-preto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(4rem,8vw,7rem)] relative overflow-hidden hero-grid-lines"
      aria-label="Artigo em destaque"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-center">
          <div>
            <FadeUp>
              <h1 className="font-heading text-[clamp(2.4rem,6vw,4.5rem)] font-black text-narrativa-branco leading-[1.05] mb-6 tracking-[-0.02em]">
                Entre o discurso e o
                <br />
                <em className="italic text-narrativa-dourado">
                  movimento silencioso
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-[clamp(1rem,2vw,1.2rem)] text-white/55 max-w-[560px] leading-[1.65] mb-10 font-light">
                A versão oficial é de normalidade. Mas como quase sempre na
                política, o que se diz em público não revela completamente o que se
                constrói nos bastidores.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex items-center gap-6 flex-wrap">
                <Button
                  asChild
                  className="bg-narrativa-vermelho hover:bg-[#8c0d1c] text-narrativa-branco text-[0.72rem] font-bold tracking-[0.14em] uppercase px-8 py-6 rounded-none"
                >
                  <Link href="/artigo/entre-o-discurso-e-o-movimento-silencioso">
                    Leia mais
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </Button>
                <span className="text-[0.72rem] tracking-[0.1em] text-white/30 uppercase">
                  31 de março de 2025
                </span>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="max-lg:order-first">
            <div className="grid grid-cols-2 gap-2">
              {[
                { slug: "entre-o-discurso-e-o-movimento-silencioso", title: "Entre o discurso e o movimento silencioso", image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop" },
                { slug: "a-antecipacao-como-estrategia", title: "A antecipação como estratégia política", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop" },
                { slug: "o-discurso-como-ferramenta", title: "O discurso como ferramenta de poder", image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=800&auto=format&fit=crop" },
                { slug: "aliancas-sob-novas-condicoes", title: "Alianças sob novas condições", image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800&auto=format&fit=crop" },
              ].map((item) => (
                <Link key={item.slug} href={`/artigo/${item.slug}`} className="relative aspect-[4/3] overflow-hidden group/card block">
                  <div className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-500 group-hover/card:scale-105 group-hover/card:grayscale-0" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <p className="absolute bottom-0 left-0 right-0 p-3 text-[0.78rem] font-bold text-white leading-[1.3]">{item.title}</p>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
