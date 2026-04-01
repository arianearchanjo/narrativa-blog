import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/fade-up";

interface ArticleCardProps {
  tag: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  slug: string;
  imageIndex?: number;
  delay?: number;
}

export function ArticleCard({
  tag,
  title,
  subtitle,
  date,
  readTime,
  slug,
  imageIndex = 1,
  delay = 0,
}: ArticleCardProps) {
  return (
    <FadeUp delay={delay}>
      <li className="grid grid-cols-[1fr_140px] gap-8 py-8 border-b border-narrativa-cinza-linha items-start group first:pt-0 max-sm:grid-cols-1 max-sm:gap-4">
        <div className="flex flex-col gap-2.5">
          <Badge
            variant="outline"
            className="w-fit rounded-none border-none px-0 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-narrativa-vermelho"
          >
            {tag}
          </Badge>
          <Link href={`/artigo/${slug}`}>
            <h3 className="text-[clamp(1.15rem,2.5vw,1.45rem)] font-bold leading-[1.2] transition-colors group-hover:text-narrativa-vermelho">
              {title}
            </h3>
          </Link>
          <p className="text-[0.9rem] text-narrativa-cinza-texto leading-[1.5] font-light">
            {subtitle}
          </p>
          <div className="flex items-center gap-4 mt-1 flex-wrap">
            <span className="text-[0.65rem] tracking-[0.1em] uppercase text-[#999]">
              {date}
            </span>
            <span className="text-[0.65rem] tracking-[0.08em] uppercase text-[#bbb] before:content-['·_']">
              {readTime}
            </span>
          </div>
        </div>
        <Link
          href={`/artigo/${slug}`}
          className="aspect-[4/3] overflow-hidden bg-[#e8e4de] max-sm:order-first max-sm:aspect-video"
          tabIndex={-1}
          aria-hidden
        >
          <div className="w-full h-full bg-narrativa-cinza-claro flex items-center justify-center text-narrativa-cinza-linha text-[0.7rem] uppercase tracking-widest transition-transform duration-400 group-hover:scale-[1.04]">
            {imageIndex}
          </div>
        </Link>
      </li>
    </FadeUp>
  );
}
