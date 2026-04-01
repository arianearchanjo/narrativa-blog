interface HighlightPhraseProps {
  children: string;
}

export function HighlightPhrase({ children }: HighlightPhraseProps) {
  return (
    <div className="my-10 py-6 border-t border-b border-narrativa-cinza-linha text-center">
      <p className="text-[clamp(1.2rem,2.5vw,1.6rem)] italic text-narrativa-preto leading-[1.45] max-w-[520px] mx-auto">
        {children}
      </p>
    </div>
  );
}
