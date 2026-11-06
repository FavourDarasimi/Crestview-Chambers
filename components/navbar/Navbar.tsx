"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  JusticeScale01Icon,
  ArrowRight01Icon,
  ArrowDown01Icon,
  Menu01Icon,
  Cancel01Icon,
  Briefcase01Icon,
} from "@hugeicons/core-free-icons";
import { MOBILE_NAV_LINKS, NAV_LINKS, PRACTICE_AREAS } from "@/lib/site";

type DrawerLinkProps = {
  href: string;
  label: string;
  current: boolean;
  onClose: () => void;
};

function DrawerLink({ href, label, current, onClose }: DrawerLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClose}
      aria-current={current ? "page" : undefined}
      className={`relative block rounded-lg py-2.5 pl-5 pr-3.5 text-sm font-medium transition-colors ${
        current ? "text-accent" : "text-ink-soft hover:text-ink hover:bg-surface"
      }`}
    >
      {current ? (
        <span
          aria-hidden
          className="absolute inset-y-1.5 left-0 w-[2px] rounded-full bg-accent"
        />
      ) : null}
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePracticeExpanded, setMobilePracticeExpanded] = useState(false);

  // A nav entry stands for its whole section, so /practice/corporate-ma still
  // reads as Practice Areas. The root has to be exact or it matches everything.
  const isCurrent = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for compact sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut (Escape to close dropdown / mobile menu)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPracticeOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Hover delay handlers for mega-menu
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPracticeOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setPracticeOpen(false);
    }, 160);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-paper shadow-nav border-b border-rule"
          : "bg-paper border-b border-rule-soft"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-18" : "h-20 sm:h-22"
          }`}
        >
          {/* Brand Logo & Monogram (Black & White Modern Minimalist) */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -ml-1 transition-transform active:scale-[0.99]"
            aria-label="Crestview Chambers Home"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-ink text-on-ink shadow-card border border-ink group-hover:bg-ink-raised transition-colors duration-200">
              <HugeiconsIcon
                icon={JusticeScale01Icon}
                size={24}
                color="var(--on-ink)"
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.16em] text-xl sm:text-2xl font-bold text-ink leading-none">
                CRESTVIEW
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[10px] tracking-[0.24em] font-semibold text-muted uppercase leading-none">
                  CHAMBERS
                </span>
                <span className="text-[8px] text-whisper">•</span>
                <span className="text-[9px] tracking-wider text-faint font-sans uppercase leading-none hidden sm:inline">
                  Attorneys at Law
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (Black & White Theme) */}
          <nav
            className="hidden xl:flex items-center gap-1"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const current = isCurrent(link.href);
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setPracticeOpen((prev) => !prev)}
                      className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        practiceOpen
                          ? "text-ink bg-surface-2"
                          : current
                            ? "text-accent"
                            : "text-body hover:text-ink hover:bg-surface"
                      }`}
                      aria-expanded={practiceOpen}
                      aria-haspopup="true"
                      aria-current={current ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      <motion.div
                        animate={{ rotate: practiceOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HugeiconsIcon
                          icon={ArrowDown01Icon}
                          size={15}
                          color="currentColor"
                          strokeWidth={1.8}
                        />
                      </motion.div>
                      {current ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-3.5 bottom-1 h-px bg-accent"
                        />
                      ) : null}
                    </button>

                    {/* Practice Areas Mega Menu Dropdown */}
                    <AnimatePresence>
                      {practiceOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[780px] z-50 pointer-events-auto"
                        >
                          <div className="bg-paper rounded-2xl shadow-menu border border-rule overflow-hidden p-6 ring-1 ring-ink/5">
                            {/* Header row inside dropdown */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-rule-soft">
                              <div>
                                <h3 className="text-xs uppercase tracking-widest font-semibold text-ink-soft">
                                  Legal Practice Disciplines
                                </h3>
                                <p className="text-sm text-faint mt-0.5">
                                  Specialized counsel across major global commercial sectors.
                                </p>
                              </div>
                              <Link
                                href="/practice"
                                onClick={() => setPracticeOpen(false)}
                                aria-current={
                                  pathname === "/practice" ? "page" : undefined
                                }
                                className="group flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-deep transition-colors"
                              >
                                <span className={pathname === "/practice" ? "underline underline-offset-4" : undefined}>
                                  View all {PRACTICE_AREAS.length} practices
                                </span>
                                <HugeiconsIcon
                                  icon={ArrowRight01Icon}
                                  size={14}
                                  color="currentColor"
                                  strokeWidth={2}
                                  className="transition-transform group-hover:translate-x-0.5"
                                />
                              </Link>
                            </div>

                            {/* 2-Column Practice Areas Grid */}
                            <div className="grid grid-cols-2 gap-3">
                              {PRACTICE_AREAS.map((area) => {
                                const href = `/practice/${area.slug}`;
                                const onThisPage = pathname === href;
                                return (
                                <Link
                                  key={area.slug}
                                  href={href}
                                  onClick={() => setPracticeOpen(false)}
                                  aria-current={onThisPage ? "page" : undefined}
                                  className={`group flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-200 ${
                                    onThisPage
                                      ? "border-accent/30"
                                      : "hover:bg-surface border-transparent hover:border-rule"
                                  }`}
                                >
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                                      onThisPage
                                        ? "bg-accent text-on-ink"
                                        : "bg-surface-2 text-ink-soft group-hover:bg-ink group-hover:text-on-ink"
                                    }`}
                                  >
                                    <HugeiconsIcon
                                      icon={area.icon}
                                      size={18}
                                      color="currentColor"
                                      strokeWidth={1.8}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4
                                      className={`text-sm font-semibold transition-colors ${
                                        onThisPage
                                          ? "text-accent"
                                          : "text-ink"
                                      }`}
                                    >
                                      {area.title}
                                    </h4>
                                    <p className="text-xs text-faint line-clamp-2 mt-0.5 leading-relaxed">
                                      {area.blurb}
                                    </p>
                                  </div>
                                </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    current ? "text-accent" : "text-body hover:text-ink hover:bg-surface"
                  }`}
                >
                  {link.label}
                  {current ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-3.5 bottom-1 h-px bg-accent"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions & CTA (Black & White Theme, Search Removed) */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/contact"
              aria-current={isCurrent("/contact") ? "page" : undefined}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-on-ink bg-accent hover:bg-accent-deep active:scale-[0.98] shadow-card transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <span className="relative tracking-wide">
                Book Consultation
                {isCurrent("/contact") ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-1.5 h-px bg-on-ink/60"
                  />
                ) : null}
              </span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                color="var(--on-ink)"
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2.5 rounded-lg text-ink hover:bg-surface-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
                size={24}
                color="currentColor"
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Navigation (Black & White Theme) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-scrim backdrop-blur-xs xl:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm sm:max-w-md bg-paper shadow-2xl flex flex-col xl:hidden border-l border-rule overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-rule-soft">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-ink text-on-ink flex items-center justify-center">
                    <HugeiconsIcon
                      icon={JusticeScale01Icon}
                      size={20}
                      color="var(--on-ink)"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-base text-ink tracking-wider">
                      CRESTVIEW
                    </span>
                    <span className="block text-[9px] font-semibold text-faint tracking-widest uppercase">
                      CHAMBERS
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-faint hover:text-ink hover:bg-surface-2"
                  aria-label="Close mobile menu"
                >
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    size={22}
                    color="currentColor"
                    strokeWidth={1.8}
                  />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="p-5 flex-1 space-y-4">
                {/* Mobile Practice Areas Accordion */}
                <div className="border border-rule rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobilePracticeExpanded((prev) => !prev)}
                    className="w-full flex items-center justify-between p-3.5 bg-surface text-ink font-semibold text-sm hover:bg-surface-2 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HugeiconsIcon
                        icon={Briefcase01Icon}
                        size={18}
                        color="var(--ink)"
                        strokeWidth={1.8}
                      />
                      Practice Areas
                    </span>
                    <motion.div
                      animate={{ rotate: mobilePracticeExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        size={16}
                        color="currentColor"
                        strokeWidth={1.8}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobilePracticeExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="divide-y divide-rule-soft bg-paper"
                      >
                        {PRACTICE_AREAS.map((area) => {
                          const onThisPage =
                            pathname === `/practice/${area.slug}`;
                          return (
                          <Link
                            key={area.slug}
                            href={`/practice/${area.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={onThisPage ? "page" : undefined}
                            className="relative flex items-start gap-3 p-3 pl-4 transition-colors hover:bg-surface"
                          >
                            {onThisPage ? (
                              <span
                                aria-hidden
                                className="absolute inset-y-0 left-0 w-[2px] bg-accent"
                              />
                            ) : null}
                            <HugeiconsIcon
                              icon={area.icon}
                              size={16}
                              color={
                                onThisPage ? "var(--accent)" : "var(--faint)"
                              }
                              strokeWidth={1.8}
                              className="mt-0.5 shrink-0"
                            />
                            <div>
                              <p
                                className={`text-xs font-semibold ${
                                  onThisPage ? "text-accent" : "text-ink"
                                }`}
                              >
                                {area.title}
                              </p>
                              <p className="text-[11px] text-faint line-clamp-1">
                                {area.blurb}
                              </p>
                            </div>
                          </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Links */}
                <div className="space-y-1">
                  <DrawerLink
                    href="/practice"
                    label="All Practice Areas"
                    current={pathname === "/practice"}
                    onClose={() => setMobileMenuOpen(false)}
                  />
                  {MOBILE_NAV_LINKS.map((navItem) => (
                    <DrawerLink
                      key={navItem.href}
                      href={navItem.href}
                      label={navItem.label}
                      current={isCurrent(navItem.href)}
                      onClose={() => setMobileMenuOpen(false)}
                    />
                  ))}
                </div>

                {/* Book a Consultation Button */}
                <div className="pt-4 border-t border-rule-soft">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isCurrent("/contact") ? "page" : undefined}
                    className="relative w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-accent hover:bg-accent-deep text-on-ink font-medium text-sm active:scale-[0.99] transition-all shadow-card"
                  >
                    <span className="relative">
                      Book a Consultation
                      {isCurrent("/contact") ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-0 -bottom-1.5 h-px bg-on-ink/60"
                        />
                      ) : null}
                    </span>
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      color="var(--on-ink)"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
