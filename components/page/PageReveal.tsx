"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STAGGER = 70;
const MAX_DELAY = 280;
const EDGE = 0.9;

/**
 * Holds the blocks under the fold until they are scrolled into view. Blocks
 * already on screen are left to the CSS entrance animation in globals.css, so
 * the copy is visible from the first paint whether or not this script runs.
 */
export default function PageReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector("main");
    // Under reduced motion the stylesheet shows everything at once, so nothing
    // is held and there is no movement left for it to undo.
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let waiting = Array.from(main.children).filter((child) => {
      const block = child as HTMLElement;
      if (block.dataset.reveal === "off") return false;
      if (block.getBoundingClientRect().top < window.innerHeight) return false;
      block.dataset.reveal = "held";
      return true;
    }) as HTMLElement[];
    if (waiting.length === 0) return;

    let frame = 0;

    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    // A sweep reads positions rather than waiting for a change in them, so a
    // jump that carries a section clean over the top of the viewport — an
    // anchor, the End key, a restored scroll position — still releases it.
    const sweep = () => {
      frame = 0;
      const arriving = waiting.filter(
        (block) => block.getBoundingClientRect().top < window.innerHeight * EDGE,
      );
      arriving.forEach((block, index) => {
        block.style.animationDelay = `${Math.min(index * STAGGER, MAX_DELAY)}ms`;
        delete block.dataset.reveal;
      });
      if (arriving.length > 0) {
        waiting = waiting.filter((block) => !arriving.includes(block));
      }
      if (waiting.length === 0) stop();
    };

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(sweep);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // A route can render already scrolled, before any scroll event is seen.
    sweep();

    return stop;
  }, [pathname]);

  return null;
}
