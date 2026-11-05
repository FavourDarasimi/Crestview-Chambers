import { BRIEFS, formatBriefDate } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const RECENT = BRIEFS.slice(0, 3);

export default function Briefs() {
  return (
    <section aria-labelledby="briefs" className="border-t border-rule py-16 sm:py-20">
      <SectionHeading
        id="briefs"
        kicker="Insights & Briefs"
        title={
          <>
            What changed,{" "}
            <span className="font-normal italic text-muted">
              stated plainly.
            </span>
          </>
        }
        action={{ label: "All briefs", href: "/insights" }}
      />

      <ul className="mt-10 divide-y divide-rule border-y border-rule">
        {RECENT.map((brief) => (
          <li
            key={brief.date + brief.title}
            className="grid gap-4 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] sm:gap-10"
          >
            <div className="flex flex-row gap-4 sm:flex-col sm:gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft sm:text-[11px]">
                {brief.category}
              </p>
              <p className="text-xs text-muted">
                {formatBriefDate(brief.date)}
                <span className="mx-2 text-whisper">•</span>
                {brief.readMinutes} min
              </p>
            </div>

            <div>
              <h3 className="max-w-[46ch] font-serif text-lg leading-snug font-semibold text-balance text-ink sm:text-xl">
                {brief.title}
              </h3>
              <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-pretty text-muted">
                {brief.summary}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 max-w-[64ch] text-sm leading-relaxed text-pretty text-faint">
        Briefs are published in short form. The working papers behind them are
        circulated to clients, and we send them on request.
      </p>
    </section>
  );
}
