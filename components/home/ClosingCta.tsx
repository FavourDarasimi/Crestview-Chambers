import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { FIRM } from "@/lib/site";

export default function ClosingCta() {
  return (
    <section aria-labelledby="new-mandates" className="py-16 sm:py-20">
      <div className="rounded-2xl bg-ink px-6 py-12 text-on-ink shadow-menu sm:px-10 sm:py-14 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-on-ink sm:text-[11px]">
              <span aria-hidden className="h-px w-8 shrink-0 bg-accent" />
              New Mandates
            </p>
            <h2
              id="new-mandates"
              className="mt-6 max-w-[18ch] font-serif text-[1.9rem] leading-[1.1] font-bold tracking-[-0.022em] text-balance sm:text-[2.4rem]"
            >
              Tell us what happened,{" "}
              <span className="font-normal italic text-on-ink/70">
                and when it needs answering.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <p className="max-w-[44ch] text-sm leading-relaxed text-pretty text-on-ink/80 sm:text-base">
              A partner reads every enquiry. Where we cannot act, we say so on
              the first call and point you somewhere better suited rather than
              billing for the introduction.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Speak to a partner
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={15}
                  color="currentColor"
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={`mailto:${FIRM.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-on-ink underline underline-offset-4 hover:no-underline"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={15}
                  color="currentColor"
                  strokeWidth={1.8}
                />
                {FIRM.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
