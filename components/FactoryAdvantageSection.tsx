"use client";

import { CSSProperties, useRef } from "react";
import FactoryAdvantageMobile from "./FactoryAdvantageMobile";
import { useCanvasZoom } from "./useCanvasZoom";

/* ============================================================
   CONTENT DATA
   `indent` is the staggered left padding of each row in Figma (px, desktop).
   ============================================================ */

const POINTS = [
  {
    label: "3000+ MT High-Capacity Fabrication",
    indent: 13.333,
    // Row 1 is Bold with a 40px line; the rest are ExtraBold.
    textClass: "font-bold text-[#f0f0f0] xl:w-[537px] xl:leading-[40px]",
  },
  {
    label: "Fully Automated Steel Production",
    indent: 26.667,
    textClass: "font-extrabold text-white xl:w-full xl:leading-[37.333px]",
  },
  {
    label: "Advanced CNC-Based Precision Engineering",
    indent: 40,
    textClass: "font-extrabold text-white xl:w-[473.333px] xl:leading-[34px]",
  },
  {
    label: "ISO-Certified Quality Systems",
    indent: 26.667,
    textClass: "font-extrabold text-white xl:w-full xl:leading-[37.333px]",
  },
  {
    label: "30–40% Faster Project Delivery",
    indent: 13.333,
    textClass: "font-extrabold text-white xl:w-full xl:leading-[37.333px]",
  },
] as const;

/* ============================================================
   FACTORY ADVANTAGE SECTION
   ============================================================ */

export default function FactoryAdvantageSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);

  return (
    /* ==========================================================
       SECTION WRAPPER — 1920×865 design canvas
       ========================================================== */
    <section className="overflow-hidden bg-white font-sans">
      {/* ---------- Mobile / tablet layout (below 1280px): separate component, see FactoryAdvantageMobile.tsx ---------- */}
      <FactoryAdvantageMobile />

      {/* ---------- Desktop layout (1280px and up): unchanged ---------- */}
      <div className="hidden xl:block">
        {/* ---------- Design canvas (zoomed to the viewport on desktop) ---------- */}
        <div
          ref={canvasRef}
          className="canvas-zoom relative mx-auto flex w-full flex-col xl:block xl:h-[865.333px] xl:w-[1920px]"
        >
          {/* ======================================================
              PHOTO LAYERS — factory background, red panel, person cutout.
              Mobile: a banner on top. Desktop: absolutely positioned layers.
              ====================================================== */}
          <div className="relative h-[240px] w-full overflow-hidden sm:h-[380px] xl:absolute xl:inset-0 xl:h-auto xl:overflow-visible">
            {/* Layer 1: full-bleed factory photo with the "we build factories" billboard */}
            <img
              src="/advantage/background.webp"
              alt="Mekark factory under construction with a billboard reading: we build factories, you build future"
              className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover xl:left-0 xl:top-[-0.33px] xl:h-[865.333px] xl:w-[1920px]"
            />

            {/* Layers 2–4 (desktop only): red L-shaped panel + dark gradient overlay */}
            <div className="absolute left-[1004px] top-[-0.33px] hidden h-[568px] w-[916px] bg-[#e60f1a] xl:block" />
            <div className="absolute left-[1047px] top-[554px] hidden h-[128px] w-[873px] bg-[#e60f1a] xl:block" />
            <img
              src="/advantage/overlay.webp"
              alt=""
              className="pointer-events-none absolute left-[1004px] top-[-3px] hidden h-[432px] w-[916px] max-w-none object-cover xl:block"
            />

            {/* Layer 6: person cutout. Sits above the red panel, so it is
                rendered after the text on desktop (see the end of this block). */}
          </div>

          {/* ======================================================
              COPY — heading, sub-heading and the five check points
              ====================================================== */}
          <div className="relative z-10 bg-[#e60f1a] bg-[linear-gradient(180deg,#2a0306_0%,#e60f1a_55%)] px-5 pb-12 pt-10 sm:px-8 sm:pt-12 xl:static xl:bg-none xl:p-0">
            {/* Heading (ExtraBold 53.333px, tight tracking, white) */}
            <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[40px] xl:absolute xl:left-[1089.33px] xl:top-[65.67px] xl:w-[788px] xl:text-[53.333px] xl:leading-[60px] xl:tracking-[-1.3333px]">
              Why Industries Choose Mekark for Their Factory Buildings
            </h2>

            {/* Sub-heading (Regular 21.333px, #f50000) */}
            <p className="mt-4 text-[16px] font-normal leading-[1.5] text-[#ffd0d3] sm:text-[18px] xl:absolute xl:left-[1089.33px] xl:top-[210.33px] xl:mt-0 xl:w-[709.333px] xl:text-[21.333px] xl:leading-[28px] xl:text-[#f50000]">
              Leading the industrial construction sector with unmatched capacity
              and precision.
            </p>

            {/* Points list: staggered indents on desktop, flush on mobile */}
            <ul className="mt-8 flex flex-col gap-[14px] xl:absolute xl:left-[1130.67px] xl:top-[306.33px] xl:mt-0 xl:w-[569.333px] xl:gap-[13.333px]">
              {POINTS.map((point) => (
                <li
                  key={point.label}
                  className="flex items-center gap-[6.667px] xl:w-full xl:pl-[var(--indent)] xl:pr-[13.333px]"
                  style={{ "--indent": `${point.indent}px` } as CSSProperties}
                >
                  {/* Check icon in a 53.333px transparent circle */}
                  <span className="relative block size-[40px] shrink-0 rounded-full xl:size-[53.333px]">
                    <img
                      src="/advantage/check.svg"
                      alt=""
                      width={26.667}
                      height={26.667}
                      className="absolute left-1/2 top-1/2 block size-[20px] max-w-none -translate-x-1/2 -translate-y-1/2 xl:left-[13.33px] xl:top-[13.33px] xl:size-[26.667px] xl:translate-x-0 xl:translate-y-0"
                    />
                  </span>
                  <span
                    className={`block text-[18px] leading-[26px] sm:text-[22px] sm:leading-[30px] xl:w-[460.444px] xl:shrink-0 xl:text-[26px] ${point.textClass}`}
                  >
                    {point.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Layer 6: person cutout, on top of every other layer (desktop only) */}
          <img
            src="/advantage/person.webp"
            alt=""
            className="pointer-events-none absolute left-0 top-[-0.33px] hidden h-[865.333px] w-[1920px] max-w-none xl:block"
            style={{ clipPath: "inset(0 776px 0 0)" }}
          />
        </div>
      </div>
    </section>
  );
}
