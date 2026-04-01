interface QuoteBlockProps {
  children: string;
  cite?: string;
}

export function QuoteBlock({ children, cite }: QuoteBlockProps) {
  return (
    <blockquote className="my-10 p-8 pl-[2.2rem] border-l-4 border-narrativa-vermelho bg-narrativa-cinza-claro relative pullquote-deco">
      <p className="text-[clamp(1.1rem,2vw,1.4rem)] italic text-narrativa-preto leading-[1.5]">
        {children}
      </p>
      {cite && (
        <cite className="block font-sans not-italic text-[0.72rem] tracking-[0.1em] uppercase text-narrativa-vermelho mt-4 font-bold">
          {cite}
        </cite>
      )}
    </blockquote>
  );
}
