"use client";

import { useEffect } from "react";

// Sets --mobile-zoom (viewport / 390, capped at 1.5) read by `.mobile-col`
// in globals.css, so the 390px mobile Figma column fills wider phones.
const MOBILE_WIDTH = 390;
const MAX_ZOOM = 1.5;

export default function MobileZoom() {
  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const width = root.clientWidth;
      root.style.setProperty(
        "--mobile-zoom",
        String(Math.min(Math.max(width / MOBILE_WIDTH, 1), MAX_ZOOM)),
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
}
