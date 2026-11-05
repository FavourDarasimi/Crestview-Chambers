import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page/PageHeader";
import { FIRM, OFFICES, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Global Offices | Crestview Chambers",
  description:
    "Four principal seats — London, New York, Geneva and Singapore — with switchboard numbers, addresses and business-hour time zones.",
};

export default function OfficesPage() {
  return (
    <>
      <PageHeader
        kicker="Global Offices"
        title="Four seats. No branch network."
        lede="Each office is a partnership entity with its own regulatory perimeter, not a branch of another. That determines who can advise you on what, and it is the first question to ask when a matter spans more than one of them."
      />

      <ul className="grid gap-px border border-rule bg-rule lg:grid-cols-2">
        {OFFICES.map((office) => (
          <li key={office.city} className="bg-paper p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl font-bold text-ink">
                {office.city}
              </h2>
              <span className="font-mono text-xs text-faint">
                {office.hours}
              </span>
            </div>
            <p className="mt-2 text-[11px] tracking-[0.14em] text-faint uppercase">
              {office.role}
            </p>

            <address className="mt-6 text-sm leading-relaxed text-body not-italic">
              {office.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <a
              href={telHref(office.phone)}
              className="mt-4 inline-block font-mono text-sm text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
            >
              {office.phone}
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-14 grid gap-8 border-t border-rule pt-10 sm:grid-cols-2">
        <div>
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]">
            Out-of-hours
          </h2>
          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted">
            A duty partner answers within the seat&apos;s business hours and
            within two hours outside them. For enforcement action, dawn raids
            or a counterparty designation, use the crisis line rather than the
            switchboard.
          </p>
          <a
            href={`mailto:${FIRM.emergencyEmail}`}
            className="mt-4 inline-block text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
          >
            {FIRM.emergencyEmail}
          </a>
        </div>

        <div>
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]">
            Sending documents
          </h2>
          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted">
            Do not email privileged material before an engagement letter is in
            place. Existing clients should use the{" "}
            <Link
              href="/portal"
              className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
            >
              secure client portal
            </Link>
            , which is the only channel we treat as confidential by default.
          </p>
        </div>
      </section>
    </>
  );
}
