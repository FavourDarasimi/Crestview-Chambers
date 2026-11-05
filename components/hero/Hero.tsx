"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// `as const` is required: a bare array infers number[], which is not
// assignable to framer-motion's BezierDefinition.
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  // Null on the server, so compare strictly. This value may only influence
  // `transition` — branching `initial`/`animate` or JSX on it hydrates mismatched.
  const reduceMotion = useReducedMotion() === true;
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.6, ease: EASE };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex min-h-[calc(100svh_-_3rem)] w-full items-center bg-white pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="grid w-full grid-cols-1 items-center gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-10 lg:gap-y-0">
        <div className="min-w-0 max-w-[52ch]">
          <motion.p
            variants={item}
            transition={transition}
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-900 sm:text-[11px]"
          >
            Institutional Counsel
          </motion.p>

          <motion.h1
            variants={item}
            transition={transition}
            className="mt-5 font-serif text-[2.35rem] leading-[1.08] font-bold tracking-[-0.022em] text-balance text-black sm:text-[2.9rem] lg:text-[3.35rem] 2xl:text-[3.75rem]"
          >
            Precision in Counsel.
            <span className="block font-normal italic text-zinc-600">
              Authority in Advocacy.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            transition={transition}
            className="mt-6 max-w-[46ch] text-[0.95rem] leading-relaxed text-pretty text-zinc-600 sm:text-base lg:text-[1.05rem]"
          >
            Institutional counsel and decisive advocacy in high-stakes disputes,
            sovereign transactions, and international governance.
          </motion.p>

          <motion.div variants={item} transition={transition} className="mt-9">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:text-base"
            >
              <span className="tracking-wide">Schedule Consultation</span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                color="#ffffff"
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.p
            variants={item}
            transition={transition}
            className="mt-10 text-[10px] leading-relaxed uppercase tracking-[0.16em] text-zinc-500 sm:text-[11px]"
          >
            Band 1 &middot; Chambers Global
            <span className="mx-2 text-zinc-300">|</span>
            London &middot; New York &middot; Geneva &middot; Singapore
          </motion.p>
        </div>

        {/* Negative margin cancels the root layout's right padding so the photo
            meets the viewport edge. The section must NOT carry overflow-hidden. */}
        <motion.div
          variants={item}
          transition={transition}
          className="min-w-0 -mr-4 sm:-mr-6 lg:-mr-8"
        >
          <div className="relative aspect-4/3 overflow-hidden rounded-l-2xl bg-zinc-950 sm:aspect-16/10 lg:aspect-3/2 lg:rounded-l-3xl">
            <Image
              src="/hero-building.jpeg"
              alt="Crestview Chambers — brutalist concrete chambers building"
              fill
              loading="eager"
              fetchPriority="high"
              quality={75}
              sizes="(min-width: 1024px) 56vw, (min-width: 640px) calc(100vw - 1.5rem), calc(100vw - 1rem)"
              className="object-cover object-[68%_50%]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
