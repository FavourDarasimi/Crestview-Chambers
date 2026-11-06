"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Copy01Icon } from "@hugeicons/core-free-icons";
import { FIRM } from "@/lib/site";
import type { Draft } from "./consultationFields";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DraftSuccess({
  draft,
  href,
  onEdit,
}: {
  draft: Draft;
  href: string;
  onEdit: () => void;
}) {
  const reduceMotion = useReducedMotion() === true;
  const t = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: EASE };

  const [copied, setCopied] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const root = useRef<HTMLDivElement>(null);

  // The form is replaced in place, so a keyboard user's position would
  // otherwise vanish with it. The panel is also shorter than the form it
  // swaps out, which pushes the heading above the sticky header unless the
  // composition is brought back to the top of the view.
  useEffect(() => {
    root.current?.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    });
    heading.current?.focus({ preventScroll: true });
  }, [reduceMotion]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Clipboard is blocked without focus or permission; the mailto handoff
      // below still works, so there is nothing to recover from here.
      setCopied(false);
    }
  }

  return (
    <motion.div
      ref={root}
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 scroll-mt-24"
    >
      <div className="flex items-center gap-5">
        <svg
          aria-hidden
          viewBox="0 0 48 48"
          className="h-12 w-12 shrink-0 overflow-visible"
        >
          <motion.circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={t}
          />
          <motion.path
            d="M15 24.5 L21.5 31 L33.5 18"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={reduceMotion ? t : { ...t, delay: 0.18 }}
          />
        </svg>

        <div>
          <h2
            ref={heading}
            tabIndex={-1}
            data-testid="success-heading"
            className="font-serif text-[1.7rem] leading-[1.12] font-bold tracking-[-0.02em] text-balance text-ink focus-visible:outline-none sm:text-[2rem]"
          >
            Drafted, not sent.
          </h2>
          <motion.p
            variants={item}
            transition={t}
            className="mt-2 text-[11px] tracking-[0.14em] text-faint uppercase"
          >
            Addressed to {FIRM.email}
          </motion.p>
        </div>
      </div>

      <motion.p
        variants={item}
        transition={t}
        className="max-w-[52ch] text-sm leading-relaxed text-pretty text-body sm:text-base"
      >
        Nothing has left this page. The note below is already written — open it
        in your mail client and it goes out as an ordinary message, which you
        can still edit before it does.
      </motion.p>

      <motion.div
        variants={item}
        transition={t}
        className="border border-rule bg-paper p-5 sm:p-6"
      >
        <p className="text-[10px] tracking-[0.14em] text-faint uppercase">
          Subject
        </p>
        <p className="mt-1.5 font-serif text-base text-ink">{draft.subject}</p>
        <div className="mt-5 border-t border-rule pt-5">
          <p className="text-[10px] tracking-[0.14em] text-faint uppercase">
            Body
          </p>
          <pre className="mt-2 max-h-64 overflow-auto text-[0.8rem] leading-relaxed whitespace-pre-wrap text-muted font-sans">
            {draft.body}
          </pre>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        transition={t}
        className="flex flex-wrap items-center gap-x-5 gap-y-4"
      >
        <a
          href={href}
          className="group inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
        >
          Open in mail client
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={15}
            color="currentColor"
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>

        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-xl border border-rule-firm px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
        >
          <HugeiconsIcon
            icon={Copy01Icon}
            size={15}
            color="currentColor"
            strokeWidth={1.8}
          />
          {copied ? "Copied" : "Copy the note"}
        </button>

        <button
          type="button"
          onClick={onEdit}
          className="text-sm text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
        >
          Edit the answers
        </button>
      </motion.div>
    </motion.div>
  );
}
