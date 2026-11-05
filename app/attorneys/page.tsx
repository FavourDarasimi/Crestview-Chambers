import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page/PageHeader";
import { ATTORNEYS, FIRM, getPracticeArea, initials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Attorneys | Crestview Chambers",
  description:
    "Senior partners across cross-border transactions, commercial litigation and arbitration, financial regulation, technology, private wealth and regulatory risk.",
};

export default function AttorneysPage() {
  return (
    <>
      <PageHeader
        kicker="Attorneys"
        title="The partners who hold your file."
        lede="Every mandate is led by one of the following. We publish the partner rather than the department, because that is the person who will be in the room when the decision is made."
      />

      <ul className="grid gap-px border border-rule bg-rule lg:grid-cols-2">
        {ATTORNEYS.map((attorney) => {
          const practice = getPracticeArea(attorney.practiceSlug);

          return (
            <li key={attorney.email} className="bg-paper p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink font-serif text-sm font-bold text-on-ink"
                >
                  {initials(attorney.name)}
                </span>
                <div className="min-w-0">
                  <h2 className="font-serif text-lg leading-snug font-semibold text-ink sm:text-xl">
                    {attorney.name}
                  </h2>
                  <p className="mt-1 text-[11px] tracking-[0.14em] text-faint uppercase">
                    {attorney.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-[54ch] text-sm leading-relaxed text-pretty text-muted">
                {attorney.focus}
              </p>

              <dl className="mt-6 space-y-3 border-t border-rule pt-5 text-xs">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 tracking-[0.12em] text-faint uppercase">
                    Practice
                  </dt>
                  <dd className="min-w-0 text-ink-soft">
                    {practice ? (
                      <Link
                        href={`/practice/${practice.slug}`}
                        className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
                      >
                        {practice.title}
                      </Link>
                    ) : null}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 tracking-[0.12em] text-faint uppercase">
                    Admitted
                  </dt>
                  <dd className="min-w-0 text-ink-soft">{attorney.admitted}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 tracking-[0.12em] text-faint uppercase">
                    Direct
                  </dt>
                  <dd className="min-w-0">
                    <a
                      href={`mailto:${attorney.email}`}
                      className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
                    >
                      {attorney.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 text-sm text-faint">
        Recruiting at partner level only. Vacancies are circulated to existing
        clients first; write to{" "}
        <a
          href={`mailto:${FIRM.email}`}
          className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
        >
          {FIRM.email}
        </a>{" "}
        to be notified.
      </p>
    </>
  );
}
