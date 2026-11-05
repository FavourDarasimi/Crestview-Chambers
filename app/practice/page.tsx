import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page/PageHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { PRACTICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas | Crestview Chambers",
  description:
    "Six disciplines: cross-border M&A, commercial litigation and arbitration, banking and financial regulation, technology, private wealth, and regulatory risk.",
};

export default function PracticeIndexPage() {
  return (
    <>
      <PageHeader
        kicker="Practice Areas"
        title="Six disciplines, one standard of counsel."
        lede="We practise where the questions are jurisdictional and the exposure is quantifiable. Each discipline below is led by senior partners who remain on the file throughout."
      />

      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {PRACTICE_AREAS.map((area, index) => (
          <Link
            key={area.slug}
            href={`/practice/${area.slug}`}
            className="group flex flex-col justify-between gap-8 bg-paper p-6 transition-colors hover:bg-surface sm:p-8"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-ink transition-colors group-hover:bg-ink group-hover:text-on-ink">
                  <HugeiconsIcon
                    icon={area.icon}
                    size={19}
                    color="currentColor"
                    strokeWidth={1.8}
                  />
                </div>
                <span className="flex flex-col items-end gap-2.5">
                  <span className="text-[10px] tracking-[0.16em] text-faint uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px w-6 bg-accent" />
                </span>
              </div>

              <h2 className="mt-6 font-serif text-xl leading-snug font-semibold text-balance text-ink sm:text-2xl">
                {area.title}
              </h2>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-pretty text-muted">
                {area.blurb}
              </p>
            </div>

            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent">
              <span className="border-b border-transparent pb-px transition-colors group-hover:border-accent group-hover:text-accent-deep">
                View discipline
              </span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={14}
                color="currentColor"
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-sm text-faint">
        Not sure which discipline your matter falls under?{" "}
        <Link
          href="/contact"
          className="font-medium text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
        >
          Speak to the intake team
        </Link>
        .
      </p>
    </>
  );
}
