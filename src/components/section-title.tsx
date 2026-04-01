import Link from "next/link";

interface SectionTitleProps {
  id?: string;
  title: string;
  showViewAll?: boolean;
}

export function SectionTitle({ id, title, showViewAll = false }: SectionTitleProps) {
  return (
    <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-narrativa-cinza-linha">
      <h2
        id={id}
        className="text-[1.35rem] font-bold  tracking-[0.02em] relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.1em] before:bottom-[0.1em] before:w-0.75 before:bg-narrativa-vermelho "
      >
        {title}
      </h2>
      {showViewAll && (
        <Link
          href="#"
          className="text-[0.68rem] tracking-[0.14em] uppercase text-narrativa-cinza-texto border-b border-narrativa-cinza-linha hover:text-narrativa-vermelho hover:border-narrativa-vermelho transition-colors"
        >
          Ver todos
        </Link>
      )}
    </div>
  );
}
