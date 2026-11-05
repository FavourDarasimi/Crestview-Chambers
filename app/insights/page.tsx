import type { Metadata } from "next";
import PageHeader from "@/components/page/PageHeader";
import { BRIEFS, FIRM, formatBriefDate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights & Briefs | Crestview Chambers",
  description:
    "Short-form analysis on sanctions perimeter, model liability, non-dom residence and arbitration procedure, written for boards rather than for other lawyers.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        kicker="Insights & Briefs"
        title="Analysis for boards, not for other lawyers."
        lede="We publish rarely and only where the position has changed. Each brief states the practical consequence in its first paragraph, because that is what a non-executive director needs before a meeting."
      />

      <ul className="divide-y divide-rule border-y border-rule">
        {BRIEFS.map((brief) => (
          <li
            key={brief.date + brief.title}
            className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-10"
          >
            <div className="flex flex-row gap-4 sm:flex-col sm:gap-3">
              <p className="text-[11px] tracking-[0.14em] text-ink-soft uppercase">
                {brief.category}
              </p>
              <p className="text-xs text-muted">
                {formatBriefDate(brief.date)}
                <span className="mx-2 text-whisper">•</span>
                {brief.readMinutes} min
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg leading-snug font-semibold text-balance text-ink sm:text-xl">
                {brief.title}
              </h2>
              <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-pretty text-muted">
                {brief.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 border border-accent/25 bg-accent-tint p-6 sm:p-8">
        <h2 className="font-serif text-lg font-semibold text-ink">
          Full briefs are circulated to clients
        </h2>
        <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted">
          We do not publish the working papers, because several are prepared
          against live instructions and would read differently without the
          privileged context. If a subject above is relevant to a decision you
          are taking, write to us and we will send the full note.
        </p>
        <a
          href={`mailto:${FIRM.email}?subject=Request%20for%20full%20brief`}
          className="mt-5 inline-block text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
        >
          {FIRM.email}
        </a>
      </div>
    </>
  );
}
