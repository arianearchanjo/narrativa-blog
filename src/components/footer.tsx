import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-narrativa-preto text-white/50 px-[clamp(1.5rem,5vw,4rem)] pt-12 pb-8 mt-20 border-t-[3px] border-narrativa-vermelho">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[1.5fr_1fr_1fr] gap-12 pb-10 border-b border-white/10 max-md:grid-cols-2 max-sm:grid-cols-1">
        {/* Logo col */}
        <div>
          <Link href="/" className="flex flex-col gap-[0.1rem] leading-none mb-6">
            <span className="font-heading text-[1.75rem] font-black tracking-[0.08em] text-narrativa-branco uppercase">
              NARRATIVA<span className="text-narrativa-vermelho">.</span>
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 font-light">
              política, poder e versão
            </span>
          </Link>
          <p className="text-[0.85rem] text-white/35 leading-[1.7] mt-4 font-light">
            Matéria política com profundidade.
            <br />
            O que está por trás do discurso público.
          </p>
        </div>

        {/* Seções */}
        <nav aria-label="Seções do site">
          <h4 className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold mb-4">
            Seções
          </h4>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/", label: "Início" },
              { href: "/#posts", label: "Matérias" },
              { href: "/#bastidores", label: "Bastidores" },
              { href: "/sobre", label: "Sobre" },
              { href: "/contato", label: "Contato" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.85rem] text-white/40 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Temas */}
        <nav aria-label="Temas">
          <h4 className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold mb-4">
            Temas
          </h4>
          <ul className="flex flex-col gap-2">
            {["Curitiba", "Paraná", "Nacional", "Poder & Discurso"].map(
              (t) => (
                <li key={t}>
                  <Link
                    href="#"
                    className="text-[0.85rem] text-white/40 hover:text-white transition-colors"
                  >
                    {t}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center pt-6 flex-wrap gap-4">
        <p className="text-[0.7rem] tracking-[0.08em] text-white/20">
          © 2026 <span className="text-narrativa-vermelho">narrativa.blog.br</span> —
          Todos os direitos reservados.
        </p>
        <p className="text-[0.7rem] tracking-[0.08em] text-white/20">
          política, poder e <span className="text-narrativa-vermelho">versão</span>
        </p>
      </div>
    </footer>
  );
}
