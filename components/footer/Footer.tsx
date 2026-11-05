import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { JusticeScale01Icon } from "@hugeicons/core-free-icons";
import { FIRM, NAV_LINKS, OFFICES, PRACTICE_AREAS } from "@/lib/site";

const LEGAL_LINKS = [
  { label: "Complaints procedure", href: "/contact" },
  { label: "Client portal", href: "/portal" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-10 lg:py-16">
          <div className="max-w-[38ch]">
          <Link
            href="/"
            className="flex w-fit items-center gap-3"
            aria-label="Crestview Chambers home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
              <HugeiconsIcon
                icon={JusticeScale01Icon}
                size={20}
                color="#ffffff"
                strokeWidth={1.8}
              />
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-lg leading-none font-bold tracking-[0.16em] text-black">
                CRESTVIEW
              </span>
              <span className="mt-1 text-[9px] leading-none font-semibold tracking-[0.24em] text-zinc-500 uppercase">
                CHAMBERS
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-pretty text-zinc-600">
            Institutional counsel and advocacy in cross-border transactions,
            high-stakes disputes and the regulation that sits between them.
          </p>
        </div>

        <nav aria-label="Practice areas">
          <h2 className="text-[10px] font-semibold tracking-[0.16em] text-zinc-900 uppercase sm:text-[11px]">
            Practice
          </h2>
          <ul className="mt-5 space-y-2.5">
            {PRACTICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice/${area.slug}`}
                  className="text-sm text-zinc-600 transition-colors hover:text-black"
                >
                  {area.title.replace(/ &.*/, "")}
                </Link>
              </li>
            ))}
            {/* The navbar's desktop item is a dropdown toggle, so this is the
                only link to the index present before any interaction. */}
            <li>
              <Link
                href="/practice"
                className="text-sm text-black underline underline-offset-4 hover:no-underline"
              >
                All practice areas
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Chambers">
          <h2 className="text-[10px] font-semibold tracking-[0.16em] text-zinc-900 uppercase sm:text-[11px]">
            Chambers
          </h2>
          <ul className="mt-5 space-y-2.5">
            {NAV_LINKS.filter((link) => !link.hasDropdown).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/portal"
                className="text-sm text-zinc-600 transition-colors hover:text-black"
              >
                Client Portal
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-[10px] font-semibold tracking-[0.16em] text-zinc-900 uppercase sm:text-[11px]">
            Offices
          </h2>
          <ul className="mt-5 space-y-2.5">
            {OFFICES.map((office) => (
              <li key={office.city} className="text-sm text-zinc-600">
                {office.city}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${FIRM.email}`}
            className="mt-5 block text-sm text-black underline underline-offset-4 hover:no-underline"
          >
            {FIRM.email}
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-zinc-200 py-7 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[70ch] space-y-2">
          <p className="text-xs leading-relaxed text-zinc-500">
            &copy; {new Date().getFullYear()} {FIRM.name}. Authorised and
            regulated as a solicitor practice in England and Wales; US work is
            undertaken through separately licensed entities.
          </p>
          <p className="text-xs leading-relaxed text-zinc-400">
            This site is a design demonstration. Firm identity, attorneys,
            offices and contact details are fictional and no instructions can
            be taken.
          </p>
        </div>
        <ul className="flex shrink-0 gap-5">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs text-zinc-500 underline underline-offset-4 hover:text-black hover:no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </footer>
  );
}
