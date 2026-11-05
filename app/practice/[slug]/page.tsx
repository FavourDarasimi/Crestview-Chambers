import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page/PageHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { FIRM, PRACTICE_AREAS, getPracticeArea } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }));
}

// Every slug is known at build time, so an unknown one should 404 rather than
// attempt an on-demand render that could only call notFound().
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};

  return {
    title: `${area.title} | Crestview Chambers`,
    description: area.blurb,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) notFound();

  const others = PRACTICE_AREAS.filter((candidate) => candidate.slug !== slug);

  return (
    <>
      <PageHeader kicker="Practice Area" title={area.title} lede={area.summary} />

      <div className="grid gap-12 border-t border-zinc-200 pt-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        <section aria-labelledby="capabilities">
          <h2
            id="capabilities"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-900 sm:text-[11px]"
          >
            What we are instructed to do
          </h2>
          <ul className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
            {area.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-4 py-4 text-sm leading-relaxed text-zinc-800 sm:text-[0.95rem]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-4 shrink-0 bg-zinc-400"
                />
                {capability}
              </li>
            ))}
          </ul>
        </section>

        <aside className="space-y-10">
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-900 sm:text-[11px]">
              Sector focus
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {area.sectors.map((sector) => (
                <li
                  key={sector}
                  className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-700"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="font-serif text-lg font-semibold text-black">
              Discuss a matter
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Initial conversations are held by a partner, not an intake
              function. Tell us what has happened and what you need to be true
              in ninety days.
            </p>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black"
            >
              <span className="border-b border-transparent pb-px transition-colors group-hover:border-black">
                Book a consultation
              </span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={14}
                color="currentColor"
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <p className="mt-4 text-xs text-zinc-500">
              Or write to{" "}
              <a
                href={`mailto:${FIRM.email}`}
                className="underline underline-offset-2 hover:no-underline"
              >
                {FIRM.email}
              </a>
              .
            </p>
          </div>
        </aside>
      </div>

      <section aria-labelledby="related" className="mt-16 border-t border-zinc-200 pt-10">
        <h2
          id="related"
          className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-900 sm:text-[11px]"
        >
          Adjacent disciplines
        </h2>
        <ul className="mt-6 grid gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/practice/${other.slug}`}
                className="group flex h-full items-start gap-3 bg-white p-5 transition-colors hover:bg-zinc-50"
              >
                <HugeiconsIcon
                  icon={other.icon}
                  size={17}
                  color="#71717a"
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm leading-snug font-medium text-black">
                  {other.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
