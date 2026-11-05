import { OFFICES, telHref } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Seats() {
  return (
    <section aria-labelledby="seats" className="border-t border-rule py-16 sm:py-20">
      <SectionHeading
        id="seats"
        kicker="Global Offices"
        title={
          <>
            Four seats,{" "}
            <span className="font-normal italic text-muted">
              each with its own perimeter.
            </span>
          </>
        }
        action={{ label: "Office details", href: "/offices" }}
      />

      <ul className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {OFFICES.map((office) => (
          <li key={office.city} className="flex flex-col gap-3 bg-paper p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-serif text-xl font-bold text-ink">
                {office.city}
              </h3>
              <span className="font-mono text-[11px] text-faint">
                {office.hours}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.14em] text-faint sm:text-[11px]">
              {office.role}
            </p>
            <a
              href={telHref(office.phone)}
              className="mt-auto pt-4 font-mono text-sm text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
            >
              {office.phone}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
