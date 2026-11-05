type PageHeaderProps = {
  kicker: string;
  title: string;
  lede?: string;
};

/** Reuses the hero's type scale so inner pages read as one family with it. */
export default function PageHeader({ kicker, title, lede }: PageHeaderProps) {
  return (
    <header className="pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pt-24">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-900 sm:text-[11px]">
        {kicker}
      </p>
      <h1 className="mt-5 font-serif text-[2.35rem] leading-[1.08] font-bold tracking-[-0.022em] text-balance text-black sm:text-[2.9rem] lg:text-[3.35rem]">
        {title}
      </h1>
      {lede ? (
        <p className="mt-6 max-w-[58ch] text-[0.95rem] leading-relaxed text-pretty text-zinc-600 sm:text-base lg:text-[1.05rem]">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
