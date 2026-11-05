import type { Metadata } from "next";
import PageHeader from "@/components/page/PageHeader";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights & Briefs | Crestview Chambers",
  description:
    "Short-form analysis on sanctions perimeter, model liability, non-dom residence and arbitration procedure, written for boards rather than for other lawyers.",
};

type Brief = {
  title: string;
  category: string;
  date: string;
  summary: string;
  readMinutes: number;
};

// Dates are ISO so they sort; rendered with an explicit locale for stability.
const BRIEFS: Brief[] = [
  {
    title: "Designation mid-transaction: what the closing conditions do not cover",
    category: "Regulatory Risk",
    date: "2026-10-28",
    summary:
      "Most acquisition agreements allocate sanctions risk to the buyer between signing and closing. Few define what happens when the target's counterparty is designated during a funded earn-out.",
    readMinutes: 9,
  },
  {
    title: "Model liability under the EU AI Act after the first conformity decisions",
    category: "Technology",
    date: "2026-10-09",
    summary:
      "Deployer obligations are now settled in form but not in practice. The procurement terms that survive scrutiny are the ones that allocate verification cost, not those that allocate fault.",
    readMinutes: 12,
  },
  {
    title: "Non-dom residence: three years of case law in one decision",
    category: "Private Wealth",
    date: "2026-09-22",
    summary:
      "The tribunal's treatment of workplace attendance rewrites the practical test for families who assumed continuity of residence was a matter of days counted.",
    readMinutes: 7,
  },
  {
    title: "Interim relief in LCIA arbitrations seated outside London",
    category: "Dispute Resolution",
    date: "2026-08-30",
    summary:
      "Emergency arbitrator awards remain difficult to enforce where the assets sit in jurisdictions that have not settled their approach to the seat's supervisory court.",
    readMinutes: 11,
  },
  {
    title: "Liquidity rules and the securitisation retention exemption",
    category: "Banking & Finance",
    date: "2026-08-14",
    summary:
      "Synthetic risk transfer structures are being re-underwritten against a retention test the supervisory guidance never formally amended.",
    readMinutes: 10,
  },
  {
    title: "Minority protections that a board can actually enforce",
    category: "Corporate & M&A",
    date: "2026-07-31",
    summary:
      "Reserved matters clauses routinely fail because the veto attaches to a decision the board is free to restructure. drafting the obligation as a funding condition performs better.",
    readMinutes: 8,
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        kicker="Insights & Briefs"
        title="Analysis for boards, not for other lawyers."
        lede="We publish rarely and only where the position has changed. Each brief states the practical consequence in its first paragraph, because that is what a non-executive director needs before a meeting."
      />

      <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
        {BRIEFS.map((brief) => (
          <li
            key={brief.date + brief.title}
            className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-10"
          >
            <div className="flex flex-row gap-4 sm:flex-col sm:gap-3">
              <p className="text-[11px] tracking-[0.14em] text-zinc-900 uppercase">
                {brief.category}
              </p>
              <p className="text-xs text-zinc-500">
                {formatDate(brief.date)}
                <span className="mx-2 text-zinc-300">•</span>
                {brief.readMinutes} min
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg leading-snug font-semibold text-balance text-black sm:text-xl">
                {brief.title}
              </h2>
              <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-pretty text-zinc-600">
                {brief.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
        <h2 className="font-serif text-lg font-semibold text-black">
          Full briefs are circulated to clients
        </h2>
        <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-zinc-600">
          We do not publish the working papers, because several are prepared
          against live instructions and would read differently without the
          privileged context. If a subject above is relevant to a decision you
          are taking, write to us and we will send the full note.
        </p>
        <a
          href={`mailto:${FIRM.email}?subject=Request%20for%20full%20brief`}
          className="mt-5 inline-block text-sm font-semibold text-black underline underline-offset-4 hover:no-underline"
        >
          {FIRM.email}
        </a>
      </div>
    </>
  );
}
