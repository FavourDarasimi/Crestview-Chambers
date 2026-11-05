import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page/PageHeader";
import { FIRM, OFFICES, PRACTICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Chambers | Crestview Chambers",
  description:
    "A partnership-founded law firm operating from London, New York, Geneva and Singapore, structured so that senior partners retain conduct of the matters they win.",
};

const PRINCIPLES = [
  {
    title: "Partner conduct, not partner marketing",
    body: "The partner who pitches the mandate carries it. We have not built an associate-leveraged delivery model, and we do not charge for one.",
  },
  {
    title: "One opinion, internally argued first",
    body: "Cross-border questions rarely have a single right answer. Before we advise, our own regulatory, disputes and transactions groups argue against the position we intend to take.",
  },
  {
    title: "Candour about what is untested",
    body: "Where the law is unsettled — sanctions perimeter, model liability, non-dom residence — we say so, and we price the risk rather than describing it away.",
  },
];

const NUMBERS = [
  { value: String(FIRM.founded), label: "Founded, London" },
  { value: String(OFFICES.length), label: "Principal seats" },
  { value: String(PRACTICE_AREAS.length), label: "Practice disciplines" },
  { value: "Band 1", label: "Chambers Global ranking" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Our Chambers"
        title="A small partnership on purpose."
        lede={`Crestview Chambers was founded in ${FIRM.founded} on the premise that institutional clients are better served by a short chain of senior decision-makers than by a large one. We have grown deliberately and remain partnership-funded.`}
      />

      <section aria-label="Chamber at a glance" className="border-t border-zinc-200">
        <dl className="grid grid-cols-2 gap-px bg-zinc-200 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.label} className="bg-white px-5 py-7">
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-serif text-2xl font-bold text-black sm:text-3xl">
                {item.value}
              </dd>
              <p className="mt-2 text-[11px] tracking-[0.14em] text-zinc-500 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="how-we-work"
        className="grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16 lg:py-20"
      >
        <h2
          id="how-we-work"
          className="font-serif text-xl leading-snug font-semibold text-balance text-black sm:text-2xl"
        >
          How we work
        </h2>
        <div className="space-y-10">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              className="grid gap-3 border-t border-zinc-200 pt-6 sm:grid-cols-[auto_1fr] sm:gap-8"
            >
              <span className="font-mono text-xs text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold text-black">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-pretty text-zinc-600">
                  {principle.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="seats" className="border-t border-zinc-200 py-14">
        <h2
          id="seats"
          className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-900 sm:text-[11px]"
        >
          Where we sit
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICES.map((office) => (
            <li key={office.city}>
              <p className="font-serif text-lg font-semibold text-black">
                {office.city}
              </p>
              <p className="mt-1 text-sm text-zinc-600">{office.role}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-zinc-500">
          Full addresses and switchboards are on the{" "}
          <Link
            href="/offices"
            className="font-medium text-black underline underline-offset-4 hover:no-underline"
          >
            Global Offices
          </Link>{" "}
          page.
        </p>
      </section>
    </>
  );
}
