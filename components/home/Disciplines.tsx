import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { PRACTICE_AREAS } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Disciplines() {
  return (
    <section aria-labelledby="disciplines" className="border-t border-rule py-16 sm:py-20">
      <SectionHeading
        id="disciplines"
        kicker="Practice Areas"
        title={
          <>
            Six disciplines,{" "}
            <span className="font-normal italic text-muted">
              one standard of counsel.
            </span>
          </>
        }
        action={{ label: "All practice areas", href: "/practice" }}
      />

      <ul className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_AREAS.map((area, index) => (
          <li key={area.slug}>
            <Link
              href={`/practice/${area.slug}`}
              className="group flex h-full flex-col bg-paper p-6 transition-colors hover:bg-surface sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-soft transition-colors group-hover:text-accent">
                  <HugeiconsIcon
                    icon={area.icon}
                    size={20}
                    color="currentColor"
                    strokeWidth={1.6}
                  />
                </span>
              </div>

              <h3 className="mt-6 font-serif text-lg leading-snug font-semibold text-balance text-ink sm:text-xl">
                {area.title}
              </h3>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-pretty text-muted">
                {area.blurb}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
