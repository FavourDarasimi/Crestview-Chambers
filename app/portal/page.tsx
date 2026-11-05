import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page/PageHeader";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Portal | Crestview Chambers",
  description:
    "How existing Crestview Chambers clients obtain, use and recover secure portal access for privileged material.",
};

const RULES = [
  {
    title: "Credentials are issued, never requested",
    body: "Access is created by the partner holding your file and delivered to a mailbox we already hold on the engagement letter. There is no self-registration and no public sign-in page.",
  },
  {
    title: "Email is not a confidential channel",
    body: "Ordinary email can be compelled. Anything attracting legal professional privilege belongs in the portal, including drafts of board papers and instructions to counsel.",
  },
  {
    title: "Third parties get scoped access",
    body: "Auditors, financiers and insurers are given time-limited access to a defined folder set rather than copied into an existing workspace. We do this on request, usually within a day.",
  },
];

export default function PortalPage() {
  return (
    <>
      <PageHeader
        kicker="Secure Client Portal"
        title="Access is issued, not requested."
        lede="The portal is not a public product and there is no account to create here. If you are an existing client, your partner can enable access; if you are not yet instructed, start with a consultation instead."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        <section aria-labelledby="how-access-works">
          <h2
            id="how-access-works"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]"
          >
            How access works
          </h2>
          <div className="mt-6 space-y-8">
            {RULES.map((rule, index) => (
              <div key={rule.title} className="border-t border-rule pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-ink">
                    {rule.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-pretty text-muted">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-8">
          <div className="border border-accent/25 bg-accent-tint p-6">
            <h2 className="font-serif text-lg font-semibold text-ink">
              Existing clients
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Write to the partner holding your file, copying{" "}
              <a
                href={`mailto:${FIRM.email}?subject=Portal%20access`}
                className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
              >
                {FIRM.email}
              </a>
              , and state the mailbox the invitation should be sent to.
            </p>
          </div>

          <div className="border border-rule p-6">
            <h2 className="font-serif text-lg font-semibold text-ink">
              Lost your device or access
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Report it the same day. We revoke the session and re-issue out of
              band; we will never confirm a new device by email alone.
            </p>
            <a
              href={`tel:${FIRM.switchboard.replace(/[^+\d]/g, "")}`}
              className="mt-4 inline-block font-mono text-sm text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
            >
              {FIRM.switchboard}
            </a>
          </div>
        </aside>
      </div>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]">
          Not yet instructed?
        </h2>
        <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-pretty text-muted">
          The portal holds privileged material for live matters. If we are not
          acting for you, there is nothing here to reach — begin at the{" "}
          <Link
            href="/contact"
            className="text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline"
          >
            consultation page
          </Link>{" "}
          instead.
        </p>
      </section>
    </>
  );
}
