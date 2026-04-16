import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/fade-up";

export function HeroHome() {
  const secondaryItems = [
    { slug: "a-antecipacao-como-estrategia", title: "A antecipação como estratégia política", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop" },
    { slug: "o-discurso-como-ferramenta", title: "O discurso como ferramenta de poder", image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=800&auto=format&fit=crop" },
    { slug: "aliancas-sob-novas-condicoes", title: "Alianças sob novas condições", image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section
      className="bg-narrativa-preto relative overflow-hidden hero-grid-lines min-h-[400px] flex items-center px-[3rem] lg:px-[4rem] py-[3rem]"
      aria-label="Artigo em destaque"
    >
      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        {/* Container Grid: align-items: stretch garante que todas as colunas comecem no mesmo topo */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1.2fr] gap-[2.5rem] items-stretch w-full">
          
          {/* Coluna 1: Bloco de Texto (Esquerda) */}
          <div className="flex flex-col justify-center text-left lg:pr-[2rem] align-self-stretch">
            <FadeUp>
              <h1 className="font-heading text-[2rem] font-black text-narrativa-branco leading-[1.1] mb-5 tracking-[-0.02em]">
                Entre o discurso e o
                <br />
                <em className="italic text-narrativa-dourado">
                  movimento silencioso
                </em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-[1rem] text-white/50 max-w-[440px] leading-[1.7] font-light">
                A versão oficial é de normalidade. Mas como quase sempre na
                política, o que se diz em público não revela completamente o que se
                constrói nos bastidores.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-[1.5rem] flex flex-col gap-3">
                <Button
                  asChild
                  className="w-fit bg-narrativa-vermelho hover:bg-[#8c0d1c] text-narrativa-branco text-[0.95rem] font-bold tracking-[0.14em] uppercase px-[1.4rem] py-[0.7rem] h-auto rounded-none"
                >
                  <Link href="/artigo/entre-o-discurso-e-o-movimento-silencioso">
                    Leia mais
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </Button>
                <span className="text-[0.85rem] tracking-[0.1em] text-white/25 uppercase font-medium">
                  31 de março de 2025
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Coluna 2: Imagem Principal (Centro) */}
          <FadeUp delay={0.3} className="w-full max-h-[320px] overflow-hidden align-self-stretch">
            <Link 
              href="/artigo/entre-o-discurso-e-o-movimento-silencioso" 
              className="relative block w-full h-[320px] overflow-hidden group rounded-[6px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop"
                alt="Matéria em destaque"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </Link>
          </FadeUp>

          {/* Coluna 3: Matérias Secundárias (Direita) */}
          <div className="flex flex-col justify-between align-self-stretch lg:pl-4">
            {secondaryItems.map((item, i) => (
              <FadeUp key={item.slug} delay={0.4 + (i * 0.1)} className="flex-1 flex items-center">
                <Link href={`/artigo/${item.slug}`} className="flex items-center gap-[1.2rem] group w-full">
                  <div className="relative w-[95px] h-[95px] flex-shrink-0 overflow-hidden rounded-[4px] bg-narrativa-cinza-claro">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[0.95rem] font-bold text-white/90 leading-[1.3] group-hover:text-narrativa-vermelho transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-[0.7rem] tracking-[0.05em] uppercase text-white/20 font-medium">
                      Matéria Política
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
