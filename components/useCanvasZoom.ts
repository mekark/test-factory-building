"use client";

import { RefObject, useEffect } from "react";

// Figma frames are 1920px wide. From 1280px up to that width the canvas is
// zoomed to fill the viewport (see `.canvas-zoom` in globals.css, which holds
// the first-paint fallbacks). Below 1280px the layout is the stacked mobile one.
const CANVAS_WIDTH = 1920;
const MIN_WIDTH = 1280;

export function useCanvasZoom(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const updateZoom = () => {
      const width = document.documentElement.clientWidth;
      if (width >= MIN_WIDTH && width < CANVAS_WIDTH) {
        canvas.style.setProperty("--canvas-zoom", String(width / CANVAS_WIDTH));
      } else {
        canvas.style.removeProperty("--canvas-zoom");
      }
    };

    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, [ref]);
}
