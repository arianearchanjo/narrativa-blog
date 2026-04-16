import Link from "next/link";
import { FadeUp } from "@/components/fade-up";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default async function ContatoPage() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section
        className="bg-narrativa-preto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(4rem,8vw,7rem)]"
        aria-label="Contato"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-narrativa-vermelho mb-6">
            Contato
          </p>
          <FadeUp>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-black text-narrativa-branco tracking-[-0.02em] leading-[1.05] mb-6 whitespace-pre-line">
              Fale com a{"\n"}Narrativa.
            </h1>
          </FadeUp>
          <p className="text-[clamp(1rem,2vw,1.1rem)] text-white/50 font-light max-w-[600px] leading-[1.65]">
            Sugestões, pautas ou parcerias — use o formulário abaixo ou envie direto para o nosso e-mail.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Content */}
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5rem)]">
        <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1">
          {/* LEFT COLUMN — Contact form */}
          <FadeUp>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nome" className="text-[0.7rem] uppercase tracking-[0.1em] font-bold text-narrativa-preto">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  className="rounded-none border-narrativa-cinza-linha px-4 py-6 text-[0.9rem] focus-visible:ring-0 focus-visible:border-narrativa-preto transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.1em] font-bold text-narrativa-preto">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu @email.com"
                  className="rounded-none border-narrativa-cinza-linha px-4 py-6 text-[0.9rem] focus-visible:ring-0 focus-visible:border-narrativa-preto transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="assunto" className="text-[0.7rem] uppercase tracking-[0.1em] font-bold text-narrativa-preto">
                  Assunto
                </Label>
                <Input
                  id="assunto"
                  type="text"
                  placeholder="Sobre o que você quer falar?"
                  className="rounded-none border-narrativa-cinza-linha px-4 py-6 text-[0.9rem] focus-visible:ring-0 focus-visible:border-narrativa-preto transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="mensagem" className="text-[0.7rem] uppercase tracking-[0.1em] font-bold text-narrativa-preto">
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  className="rounded-none border-narrativa-cinza-linha px-4 py-3 text-[0.9rem] w-full focus-visible:ring-0 focus-visible:border-narrativa-preto transition-colors resize-none"
                />
              </div>

              <Button
                type="button"
                className="w-full rounded-none bg-narrativa-preto hover:bg-narrativa-vermelho text-narrativa-branco font-bold tracking-[0.14em] uppercase py-7 transition-colors cursor-pointer"
              >
                Enviar mensagem
              </Button>
            </form>
          </FadeUp>

          {/* RIGHT COLUMN — Contact info */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-10">
              {/* Block 1 */}
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold mb-2">
                  E-mail de Contato
                </p>
                <h3 className="font-bold text-[1.2rem] text-narrativa-preto mb-1">
                  contato@narrativa.blog.br
                </h3>
                <p className="text-[0.95rem] text-narrativa-cinza-texto font-light leading-[1.6]">
                  Para sugestões, pautas, correções, parcerias comerciais ou qualquer outro assunto relacionado à Narrativa.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-narrativa-vermelho font-bold mb-2">
                  Sobre o projeto
                </p>
                <h3 className="font-bold text-[1rem] text-narrativa-preto mb-1">
                  Conheça a Narrativa
                </h3>
                <p className="text-[0.9rem] text-narrativa-cinza-texto font-light leading-[1.6]">
                  Um blog de matéria política com foco no que está por trás do discurso público — o que é dito, o que é evitado e o que se constrói em silêncio.
                </p>
                <Link
                  href="/sobre"
                  className="text-[0.68rem] tracking-[0.14em] uppercase font-bold text-narrativa-vermelho border-b border-narrativa-vermelho pb-px mt-3 inline-block transition-opacity hover:opacity-80"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
