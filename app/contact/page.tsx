import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page/PageHeader";
import { FIRM, OFFICES, PRACTICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consultation | Crestview Chambers",
  description:
    "Speak directly with a senior partner about a cross-border transaction, commercial dispute or regulatory matter.",
};

const STEPS = [
  {
    label: "First contact",
    body: "A partner reads every enquiry personally and replies within one business day. Tell us what has happened and what you need to be true in ninety days.",
  },
  {
    label: "Conflict check",
    body: "We run conflicts before any substantive call. If we cannot act, we will say so early and, where useful, point you elsewhere.",
  },
  {
    label: "Scoping call",
    body: "Forty-five minutes, no charge. You leave with an assessment of the exposure and an honest view of whether the matter is worth running.",
  },
  {
    label: "Engagement",
    body: "We set out fees as a phase estimate rather than an open hourly rate, and we confirm who is carrying each phase.",
  },
];

function toHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Book a Consultation"
        title="Speak to a partner, not an intake form."
        lede="We have deliberately not built a web form. Anything complex enough to need us is too complex to be triaged by a dropdown, and the first conversation is usually where the framing gets corrected."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <section aria-labelledby="channels">
          <h2
            id="channels"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]"
          >
            How to reach us
          </h2>

          <dl className="mt-6 divide-y divide-rule border-y border-rule">
            <div className="py-5">
              <dt className="text-xs tracking-[0.12em] text-faint uppercase">
                General counsel
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${FIRM.email}`}
                  className="font-serif text-lg text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline sm:text-xl"
                >
                  {FIRM.email}
                </a>
              </dd>
            </div>

            <div className="py-5">
              <dt className="text-xs tracking-[0.12em] text-faint uppercase">
                Enforcement, raids or designation — 24 hours
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${FIRM.emergencyEmail}`}
                  className="font-serif text-lg text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline sm:text-xl"
                >
                  {FIRM.emergencyEmail}
                </a>
              </dd>
            </div>

            <div className="py-5">
              <dt className="text-xs tracking-[0.12em] text-faint uppercase">
                London switchboard
              </dt>
              <dd className="mt-2">
                <a
                  href={toHref(FIRM.switchboard)}
                  className="font-mono text-lg text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
                >
                  {FIRM.switchboard}
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-6 max-w-[54ch] text-sm leading-relaxed text-pretty text-muted">
            Please do not send privileged or confidential material before an
            engagement letter is in place. Email is not a confidential channel
            as a matter of law;{" "}
            <Link
              href="/portal"
              className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
            >
              the client portal
            </Link>{" "}
            is the only one we treat that way.
          </p>
        </section>

        <section aria-labelledby="process">
          <h2
            id="process"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]"
          >
            What happens next
          </h2>
          <ol className="mt-6 space-y-6">
            {STEPS.map((step, index) => (
              <li key={step.label} className="grid gap-2 sm:grid-cols-[auto_1fr] sm:gap-5">
                <span className="font-mono text-xs text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 max-w-[46ch] text-sm leading-relaxed text-pretty text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section aria-labelledby="which-discipline" className="mt-16 border-t border-rule pt-10">
        <h2
          id="which-discipline"
          className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]"
        >
          Which discipline you probably need
        </h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice/${area.slug}`}
                className="text-sm text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
              >
                {area.title}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]">
          Offices
        </h2>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          {OFFICES.map((office) => (
            <li key={office.city}>
              {office.city}
              <span className="mx-2 text-whisper">•</span>
              <a
                href={toHref(office.phone)}
                className="font-mono text-xs text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
              >
                {office.phone}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
