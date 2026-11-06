"use client";

import { useSyncExternalStore } from "react";

/**
 * Next prerenders this page as /_not-found, so a server read of the address
 * would print that path and then mismatch on hydration. The store hands back
 * nothing until the browser has answered, which keeps the panel empty for a
 * frame instead of wrong.
 */
function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

const getPathname = () => window.location.pathname;
const getPathnameOnServer = () => null;

export default function RequestedPath() {
  const pathname = useSyncExternalStore(
    subscribe,
    getPathname,
    getPathnameOnServer,
  );

  if (!pathname) return null;

  return <span className="break-all">{pathname}</span>;
}
