import type { ReactNode } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

type SectionHeadingProps = {
  id: string;
  kicker: string;
  title: ReactNode;
  action?: { label: string; href: string };
};

export default function SectionHeading({
  id,
  kicker,
  title,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
      <div className="min-w-0">
        <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft sm:text-[11px]">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent" />
          {kicker}
        </p>
        <h2
          id={id}
          className="mt-5 max-w-[24ch] font-serif text-[1.75rem] leading-[1.12] font-bold tracking-[-0.02em] text-balance text-ink sm:text-[2.1rem]"
        >
          {title}
        </h2>
      </div>

      {action ? (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-2 pb-1 text-xs font-semibold text-accent"
        >
          <span className="border-b border-transparent pb-px transition-colors group-hover:border-accent">
            {action.label}
          </span>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={14}
            color="currentColor"
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      ) : null}
    </div>
  );
}
