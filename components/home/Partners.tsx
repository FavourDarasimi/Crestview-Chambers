import Link from "next/link";
import { ATTORNEYS, getPracticeArea, initials } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const FEATURED = ATTORNEYS.slice(0, 3);

export default function Partners() {
  return (
    <section aria-labelledby="partners" className="border-t border-rule py-16 sm:py-20">
      <SectionHeading
        id="partners"
        kicker="Attorneys"
        title={
          <>
            The partner{" "}
            <span className="font-normal italic text-muted">holds the file.</span>
          </>
        }
        action={{ label: "All partners", href: "/attorneys" }}
      />

      <ul className="mt-10 grid gap-px border border-rule bg-rule lg:grid-cols-3">
        {FEATURED.map((attorney) => {
          const practice = getPracticeArea(attorney.practiceSlug);

          return (
            <li key={attorney.email} className="flex flex-col bg-paper p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink font-serif text-sm font-bold text-on-ink"
                >
                  {initials(attorney.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg leading-snug font-semibold text-ink">
                    {attorney.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-faint sm:text-[11px]">
                    {attorney.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-pretty text-muted">
                {attorney.focus}
              </p>

              <div className="mt-auto flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-rule pt-5 text-xs">
                {practice ? (
                  <Link
                    href={`/practice/${practice.slug}`}
                    className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
                  >
                    {practice.short}
                  </Link>
                ) : null}
                <span className="text-faint">{attorney.admitted}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
