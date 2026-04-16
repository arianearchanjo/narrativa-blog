import Link from 'next/link'
import Image from 'next/image'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-narrativa-preto relative overflow-hidden flex-col justify-between p-12 hero-grid-lines">
        <div className="relative z-10">
          <Link href="/" className="flex flex-col gap-[0.1rem] leading-none">
            <span className="font-heading text-[1.75rem] font-black tracking-[0.08em] text-narrativa-branco uppercase">
              NARRATIVA<span className="text-narrativa-vermelho">.</span>
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 font-light">
              política, poder e versão
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <span className="block w-12 h-0.75 bg-narrativa-vermelho mb-6" />
          <p className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-black text-narrativa-branco leading-[1.1] mb-6">
            O que não é dito
            <br />
            também é{' '}
            <em className="italic text-narrativa-dourado">narrativa</em>.
          </p>
          <p className="text-[0.95rem] text-white/40 leading-[1.7] font-light">
            Matéria política com profundidade. O que está por trás do discurso
            público — o que é dito, o que é evitado e o que se constrói em
            silêncio.
          </p>
        </div>

        <p className="relative z-10 text-[0.65rem] tracking-[0.15em] uppercase text-white/20">
          narrativa.blog.br · matéria política · paraná · brasil
        </p>
      </div>

      {/* Right panel - form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-narrativa-branco">
        <div className="w-full max-w-100">
          {/* Mobile logo */}
          <div className="lg:hidden flex flex-col items-center mb-10">
            <Link href="/" className="flex flex-col gap-[0.1rem] leading-none items-center">
              <span className="font-heading text-[1.75rem] font-black tracking-[0.08em] text-narrativa-preto uppercase">
                NARRATIVA<span className="text-narrativa-vermelho">.</span>
              </span>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-black/40 font-light">
                política, poder e versão
              </span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
