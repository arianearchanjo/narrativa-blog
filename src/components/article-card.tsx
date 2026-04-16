import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/fade-up";

interface ArticleCardProps {
  tag?: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  slug: string;
  imageIndex?: number;
  delay?: number;
  showTag?: boolean;
  variant?: 'default' | 'large';
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
  showTag = false,
  variant = 'default',
}: ArticleCardProps) {
  // Mapping some nice editorial images
  const images = [
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541870678-58133ad9d6b1?q=80&w=2070&auto=format&fit=crop",
  ];
  
  const imageUrl = images[(imageIndex - 1) % images.length];

  if (variant === 'large') {
    return (
      <FadeUp delay={delay}>
        <div className="group flex flex-col gap-5 pb-8 border-b border-narrativa-cinza-linha h-full">
          <Link
            href={`/artigo/${slug}`}
            className="aspect-video overflow-hidden bg-narrativa-cinza-claro relative group/img"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-narrativa-vermelho/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <div className="flex flex-col gap-3">
            <Link href={`/artigo/${slug}`}>
              <h3 className="text-[clamp(1.4rem,3vw,1.75rem)] font-black leading-[1.1] transition-colors group-hover:text-narrativa-vermelho tracking-tight">
                {title}
              </h3>
            </Link>
            <p className="text-[0.95rem] text-narrativa-cinza-texto leading-[1.6] font-light line-clamp-3">
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
        </div>
      </FadeUp>
    );
  }

  return (
    <FadeUp delay={delay}>
      <li className="grid grid-cols-[1fr_160px] gap-8 py-8 border-b border-narrativa-cinza-linha items-center group first:pt-0 max-sm:grid-cols-1 max-sm:gap-6">
        <div className="flex flex-col gap-2.5">
          {showTag && tag && (
            <Badge
              variant="outline"
              className="w-fit rounded-none border-none px-0 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-narrativa-vermelho"
            >
              {tag}
            </Badge>
          )}
          <Link href={`/artigo/${slug}`}>
            <h3 className="text-[clamp(1.15rem,2.5vw,1.45rem)] font-bold leading-[1.2] transition-colors group-hover:text-narrativa-vermelho tracking-tight">
              {title}
            </h3>
          </Link>
          <p className="text-[0.9rem] text-narrativa-cinza-texto leading-[1.6] font-light">
            {subtitle}
          </p>
          <div className="flex items-center gap-4 mt-2 flex-wrap">
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
          className="aspect-square overflow-hidden bg-narrativa-cinza-claro relative group/img max-sm:order-first max-sm:aspect-video"
          tabIndex={-1}
          aria-hidden
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-narrativa-vermelho/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>
      </li>
    </FadeUp>
  );
}
