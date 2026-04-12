import Link from "next/link";
import { NewsletterWidget } from "@/components/newsletter-widget";

const tags = [
  "Paraná",
  "Poder",
  "Discurso",
  "Bastidores",
  "Alianças",
  "Eleições",
  "Versão",
  "Nacional",
];

export function SidebarHome() {
  return (
    <aside className="flex flex-col gap-8" aria-label="Coluna lateral">
      {/* Sobre o blog */}
      <div className="bg-narrativa-preto p-8 text-narrativa-branco">
        <h3 className="text-[1.1rem] font-bold mb-4 pb-3 border-b border-white/15">
          Narrativa
        </h3>
        <p className="text-[0.88rem] text-white/60 leading-[1.7] font-light">
          Política com profundidade. O que está por trás do discurso
          público — o que é dito, o que é evitado e o que se constrói em
          silêncio.
        </p>
        <Link
          href="/sobre"
          className="inline-block mt-4 text-[0.68rem] tracking-[0.14em] uppercase font-bold text-narrativa-vermelho border-b border-narrativa-vermelho pb-px"
        >
          Conheça o projeto →
        </Link>
        </div>

        {/* Newsletter */}
        <div className="border border-narrativa-cinza-linha p-8">
        <h3 className="text-[1.1rem] font-bold mb-4 pb-3 border-b border-narrativa-cinza-linha">
          Receba as matérias
        </h3>
        <p className="text-[0.88rem] text-narrativa-cinza-texto leading-[1.7] font-light mb-5">
          Novas publicações diretamente no seu e-mail, sem algoritmo.
        </p>
        <NewsletterWidget />
      </div>

      {/* Quote */}
      <div className="border-l-[3px] border-narrativa-dourado pl-5 py-2">
        <p className="italic text-[0.95rem] text-narrativa-cinza-texto leading-[1.6]">
          &ldquo;Entender o que está acontecendo passa menos pelo que é dito — e
          mais pelo que, cuidadosamente, não é.&rdquo;
        </p>
      </div>

      {/* Tags */}
      <div>
        <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-narrativa-vermelho mb-3">
          Temas
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Link
              key={tag}
              href="#"
              className="inline-block border border-narrativa-cinza-linha px-3 py-1.5 text-[0.65rem] tracking-[0.1em] uppercase text-narrativa-cinza-texto hover:border-narrativa-preto hover:bg-narrativa-preto hover:text-narrativa-branco transition-all"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
