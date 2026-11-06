"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HandoffSuccess({
  href,
  onEdit,
}: {
  href: string;
  onEdit: () => void;
}) {
  const reduceMotion = useReducedMotion() === true;
  const t = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: EASE };

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

        <h2
          ref={heading}
          tabIndex={-1}
          data-testid="success-heading"
          className="font-serif text-[1.7rem] leading-[1.12] font-bold tracking-[-0.02em] text-balance text-ink focus-visible:outline-none sm:text-[2rem]"
        >
          Opening your mail client.
        </h2>
      </div>

      <motion.p
        variants={item}
        transition={t}
        className="max-w-[52ch] text-sm leading-relaxed text-pretty text-body sm:text-base"
      >
        Send it there and a partner reads every enquiry within one business
        day. Nothing is held on this page — if no window appeared, the button
        below opens the note again.
      </motion.p>

      <motion.div
        variants={item}
        transition={t}
        className="flex flex-wrap items-center gap-x-5 gap-y-4"
      >
        <a
          href={href}
          className="group inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
        >
          Open it again
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
          onClick={onEdit}
          className="text-sm text-accent underline underline-offset-4 hover:text-accent-deep hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
        >
          Edit the answers
        </button>
      </motion.div>
    </motion.div>
  );
}
