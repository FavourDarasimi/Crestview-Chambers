import Link from "next/link";
import { FIRM, FIRM_NUMBERS } from "@/lib/site";

export default function Credentials() {
  return (
    <section
      aria-labelledby="credentials"
      className="border-t border-rule py-16 sm:py-20"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft sm:text-[11px]">
            <span aria-hidden className="h-px w-8 shrink-0 bg-accent" />
            Our Chambers
          </p>
          <h2
            id="credentials"
            className="mt-5 max-w-[20ch] font-serif text-[1.75rem] leading-[1.12] font-bold tracking-[-0.02em] text-balance text-ink sm:text-[2.1rem]"
          >
            Small on purpose,{" "}
            <span className="font-normal italic text-muted">
              senior by default.
            </span>
          </h2>
          <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-pretty text-muted sm:text-base">
            {FIRM.name} was founded in {FIRM.founded} and has stayed
            partnership-funded. The figures opposite are the whole firm rather
            than a practice group, which is why the partner who takes the
            instruction is the partner who carries it.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-block text-xs font-semibold text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline sm:text-[13px]"
          >
            How we work
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-px self-start border border-rule bg-rule">
          {FIRM_NUMBERS.map((item) => (
            <li key={item.label} className="bg-paper p-6 sm:p-7">
              <span aria-hidden className="block h-px w-6 bg-accent" />
              <p className="mt-5 font-serif text-[1.75rem] leading-none font-bold text-ink sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-faint sm:text-[11px]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
