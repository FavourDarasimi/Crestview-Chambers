"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  JusticeScale01Icon,
  GavelIcon,
  Shield01Icon,
  Award01Icon,
  Globe02Icon,
  Building01Icon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";

export default function Hero() {
  return (
    <section className="relative w-full pt-12 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-24 overflow-hidden bg-white">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Prestige Kicker / Status Badge */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-zinc-200/90 bg-white/95 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] backdrop-blur-md hover:border-zinc-400 hover:shadow-sm transition-all duration-200 group max-w-full"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-900"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-900 uppercase whitespace-nowrap">
            Institutional Counsel
          </span>
          <span className="text-zinc-300">•</span>
          <Link
            href="/about"
            className="text-[11px] sm:text-xs text-zinc-500 font-medium group-hover:text-black transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            <span>Chambers Global Band 1</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={12}
              color="currentColor"
              strokeWidth={2}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 sm:mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif font-bold tracking-tight text-black leading-[1.07] max-w-4xl"
        >
          Precision in Counsel. <br />
          <span className="font-serif italic font-normal text-zinc-700 inline-block mt-1">
            Authority in Advocacy.
          </span>
        </motion.h1>

        {/* Contextual Sub-headline */}
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-zinc-600 font-sans max-w-2xl leading-relaxed"
        >
          Crestview Chambers provides institutional counsel and decisive courtroom representation for high-stakes commercial disputes, sovereign transactions, and international governance.
        </motion.p>

        {/* Dual Actions: Primary & Secondary CTAs with Law-Themed Hover Micro-Animations */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Schedule Consultation with Scales of Justice Balance Physics */}
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-sm sm:text-base text-white bg-black hover:bg-zinc-900 active:scale-[0.98] shadow-md hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 overflow-hidden"
          >
            {/* Subtle legal luster reflection sweep on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none" />

            <span className="tracking-wide">Schedule Consultation</span>

            {/* Scales of Justice Icon that tips and balances into equilibrium on hover */}
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
              <div
                className="group-hover-scale-balance transition-transform"
                style={{ transformOrigin: "50% 20%" }}
              >
                <HugeiconsIcon
                  icon={JusticeScale01Icon}
                  size={18}
                  color="#ffffff"
                  strokeWidth={1.8}
                />
              </div>
            </div>
          </Link>

          {/* Secondary CTA: Explore Disciplines with Courtroom Gavel Decisive Strike */}
          <Link
            href="/practice"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-medium text-sm sm:text-base text-zinc-900 bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-400 active:scale-[0.98] shadow-xs hover:shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 overflow-hidden"
          >
            <span>Explore Disciplines</span>

            {/* Gavel Icon that raises and strikes the sound block on hover */}
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-100 text-black group-hover:bg-zinc-200 transition-colors shrink-0">
              <div
                className="group-hover-gavel-strike transition-transform"
                style={{ transformOrigin: "20% 85%" }}
              >
                <HugeiconsIcon
                  icon={GavelIcon}
                  size={16}
                  color="currentColor"
                  strokeWidth={1.8}
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Client Discretion & Trust Guarantees */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-xs text-zinc-500 font-sans"
        >
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Shield01Icon} size={14} color="#52525b" strokeWidth={1.8} />
            <span>Strict Attorney-Client Privilege</span>
          </div>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={CheckmarkBadge01Icon} size={14} color="#52525b" strokeWidth={1.8} />
            <span>Direct Senior Partner Oversight</span>
          </div>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Globe02Icon} size={14} color="#52525b" strokeWidth={1.8} />
            <span>Transatlantic & Cross-Border Desk</span>
          </div>
        </motion.div>
      </div>

      {/* Architectural Image Showcase with Museum-Grade Framing & Floating Glass Cards */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-[1400px] mx-auto mt-12 sm:mt-16 md:mt-20 px-2 sm:px-4"
      >
        {/* Architectural Precision Enclosure */}
        <div className="relative p-2 sm:p-3 bg-zinc-100/70 border border-zinc-200/90 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]">
          {/* Corner Precision Crosshairs */}
          <div className="absolute top-4 left-4 text-zinc-400 font-mono text-xs select-none pointer-events-none z-20">
            +
          </div>
          <div className="absolute top-4 right-4 text-zinc-400 font-mono text-xs select-none pointer-events-none z-20">
            +
          </div>
          <div className="absolute bottom-4 left-4 text-zinc-400 font-mono text-xs select-none pointer-events-none z-20">
            +
          </div>
          <div className="absolute bottom-4 right-4 text-zinc-400 font-mono text-xs select-none pointer-events-none z-20">
            +
          </div>

          <div className="relative w-full aspect-[2.1/1] min-h-[320px] sm:min-h-[440px] md:min-h-[540px] lg:min-h-[640px] overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-950">
            {/* Main Architectural Image */}
            <Image
              src="/hero-building.jpeg"
              alt="Crestview Chambers Architectural Headquarters"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 hover:scale-[1.01]"
            />

            {/* Subtle Vignettes for Atmospheric Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top & Bottom Soft Edge Fade */}
            <div className="absolute inset-x-0 top-0 h-10 sm:h-16 bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

            {/* Floating Glass Chip Top-Left: Active Headquarters */}
            <div className="absolute top-3 sm:top-6 left-3 sm:left-6 z-20 max-w-[220px] sm:max-w-xs">
              <div className="bg-white/90 backdrop-blur-md border border-white/60 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:bg-white hover:shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-zinc-900 uppercase">
                    Chambers Quadrangle
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-600 leading-snug hidden sm:block">
                  Presiding institutional seat for international arbitration, high-value mergers, and commercial advocacy.
                </p>
              </div>
            </div>

            {/* Floating Glass Chip Bottom-Left: Global Desk Hubs */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 hidden md:block">
              <div className="bg-black/80 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl shadow-xl text-white">
                <div className="flex items-center gap-2.5 text-xs font-mono tracking-wider text-zinc-300">
                  <HugeiconsIcon icon={Building01Icon} size={15} color="#e4e4e7" strokeWidth={1.8} />
                  <span>LONDON</span>
                  <span className="text-zinc-500">•</span>
                  <span>NEW YORK</span>
                  <span className="text-zinc-500">•</span>
                  <span>GENEVA</span>
                  <span className="text-zinc-500">•</span>
                  <span>SINGAPORE</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Chip Bottom-Right: Accolade / Band 1 */}
            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 z-20 max-w-[220px] sm:max-w-sm">
              <div className="bg-white/95 backdrop-blur-md border border-white/80 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl text-left">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={Award01Icon} size={16} color="#ffffff" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-black tracking-tight">
                      Ranked Band 1 Chambers Global
                    </p>
                    <p className="text-[11px] text-zinc-500 leading-tight mt-0.5 hidden sm:block">
                      Leading institutional counsel for complex cross-border transactions & high-court disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
