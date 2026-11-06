import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import RequestedPath from "@/components/page/RequestedPath";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | Crestview Chambers",
  description:
    "The page requested is not part of the Crestview Chambers site. A standing index of where the work actually lives.",
};

const INDEX = [
  {
    href: "/practice",
    label: "Practice areas",
    note: "Takeovers, disputes, finance, intellectual property, private wealth, regulation.",
  },
  {
    href: "/about",
    label: "Our chambers",
    note: "How the firm is organised, and how it came to be organised that way.",
  },
  {
    href: "/attorneys",
    label: "Attorneys",
    note: "Partners and associates, with the disciplines each of them holds.",
  },
  {
    href: "/insights",
    label: "Insights & briefs",
    note: "Notes on decisions and consultations we think are worth reading.",
  },
  {
    href: "/offices",
    label: "Global offices",
    note: "Where we are admitted to practise and where the benches sit.",
  },
  {
    href: "/portal",
    label: "Client portal",
    note: "Access is issued by the partner holding your file, never requested here.",
  },
  {
    href: "/contact",
    label: "Consultation",
    note: "Describe the problem in your own words. A partner reads every enquiry.",
  },
];

export default function NotFound() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft sm:text-[11px]">
            <span aria-hidden className="h-px w-8 shrink-0 bg-accent" />
            Error 404
          </p>

          <h1 className="mt-5 max-w-[16ch] font-serif text-[2.35rem] leading-[1.08] font-bold tracking-[-0.022em] text-balance text-ink sm:text-[2.9rem] lg:text-[3.35rem]">
            That page is not{" "}
            <span className="font-normal italic text-muted">on file.</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-[0.95rem] leading-relaxed text-pretty text-muted sm:text-base lg:text-[1.05rem]">
            Nothing was deleted and no matter of yours is involved — the
            address simply does not correspond to anything this site publishes.
            Everything it does publish is in the index; the note underneath
            covers the one case where you may have done nothing wrong.
          </p>

          <div className="mt-8 rounded-xl border border-rule bg-ink-deep px-4 py-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-faint sm:text-[11px]">
              Address you asked for
            </p>
            <p className="mt-2 font-mono text-sm leading-snug text-ink">
              <RequestedPath />
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Front of the site
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={15}
                color="currentColor"
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={`mailto:${FIRM.email}?subject=Broken%20link%20on%20your%20site`}
              className="text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
            >
              Tell us about a broken link
            </a>
          </div>
        </div>

        <nav aria-labelledby="site-index" className="min-w-0">
          <h2
            id="site-index"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]"
          >
            What this site publishes
          </h2>
          <ul className="mt-6 border-b border-rule">
            {INDEX.map((entry, index) => (
              <li key={entry.href} className="border-t border-rule">
                <Link
                  href={entry.href}
                  className="group flex items-start gap-4 py-4 transition-colors hover:bg-surface sm:gap-5 sm:px-2 sm:-mx-2"
                >
                  <span className="pt-0.5 font-mono text-xs text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ink">
                        {entry.label}
                      </span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={13}
                        color="var(--accent)"
                        strokeWidth={2}
                        className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </span>
                    <span className="mt-1 block max-w-[46ch] text-xs leading-relaxed text-pretty text-faint">
                      {entry.note}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <section className="mt-16 max-w-[70ch] border-t border-rule pt-8">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]">
          If you followed a link we sent you
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">
          Circulars, PDFs and email footers are typeset by hand, and the
          occasional one carries an address we later reorganised. Write to{" "}
          <a
            href={`mailto:${FIRM.email}`}
            className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
          >
            {FIRM.email}
          </a>{" "}
          or call the switchboard on{" "}
          <a
            href={`tel:${FIRM.switchboard.replace(/[^+\d]/g, "")}`}
            className="font-mono text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
          >
            {FIRM.switchboard}
          </a>
          , and whoever takes it will find the document you were aiming at.
        </p>
      </section>
    </div>
  );
}
