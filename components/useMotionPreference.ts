"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function snapshot() {
  return window.matchMedia(query).matches;
}

export function useMotionPreference() {
  return useSyncExternalStore(subscribe, snapshot, () => true);
}
