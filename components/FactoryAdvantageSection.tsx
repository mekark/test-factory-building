"use client";

import Image from "next/image";
import { CSSProperties, useRef, useState } from "react";
import FactoryAdvantageMobile from "./FactoryAdvantageMobile";
import { useCanvasZoom } from "./useCanvasZoom";

/* ============================================================
   CONTENT DATA
   `indent` is the staggered left padding of each row in Figma (px, desktop).
   ============================================================ */

const POINTS = [
  { label: "3000+ MT High-Capacity Fabrication", width: 700 },
  { label: "Fully Automated Steel Production", width: 672 },
  { label: "Advanced CNC-Based Precision Engineering", width: 645 },
  { label: "ISO-Certified Quality Systems", width: 645 },
  { label: "30–40% Faster Project Delivery", width: 672 },
] as const;

/* ============================================================
   FACTORY ADVANTAGE SECTION
   ============================================================ */

export default function FactoryAdvantageSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
            <Image
              width={1440}
              height={649}
              sizes="1920px"
              src="/advantage/background.webp"
              alt="Mekark factory under construction with a billboard reading: we build factories, you build future"
              className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover xl:left-0 xl:top-[-0.33px] xl:h-[865.333px] xl:w-[1920px]"
            />

            {/* Layers 2–4 (desktop only): red L-shaped panel + dark gradient overlay */}
            <div className="absolute left-[1004px] top-0 hidden h-[701.333px] w-[916px] bg-[#e60f1a] xl:block" />
            <div className="absolute left-[964px] top-[554.67px] hidden h-[183px] w-[956px] bg-[#e60f1a] xl:block" />
            <Image
              width={916}
              height={399}
              sizes="916px"
              src="/advantage/overlay-new.webp"
              alt=""
              className="pointer-events-none absolute left-[1004px] top-[-2.67px] hidden h-[398.667px] w-[916px] max-w-none object-cover xl:block"
            />

            {/* Layer 6: person cutout. Sits above the red panel, so it is
                rendered after the text on desktop (see the end of this block). */}
          </div>

          {/* ======================================================
              COPY — heading, sub-heading and the five check points
              ====================================================== */}
          <div className="relative z-10 bg-[#e60f1a] bg-[linear-gradient(180deg,#2a0306_0%,#e60f1a_55%)] px-5 pb-12 pt-10 sm:px-8 sm:pt-12 xl:static xl:bg-none xl:p-0">
            {/* Heading + sub-heading stacked (22px gap) so a wrapped heading never overlaps the sub-heading */}
            <div className="xl:absolute xl:left-[1089.33px] xl:top-[49.33px] xl:flex xl:w-[783px] xl:flex-col xl:gap-[22px]">
              {/* Heading (Bold 66px, #030303) */}
              <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[40px] xl:text-[66px] xl:font-bold xl:leading-[69.333px] xl:tracking-normal xl:text-[#030303]">
                Why Industries Choose Mekark for Their Factory Buildings
              </h2>

              {/* Sub-heading (Regular 20px, #424242) */}
              <p className="mt-4 text-[16px] font-normal leading-[1.5] text-[#ffd0d3] sm:text-[18px] xl:mt-0 xl:text-[20px] xl:leading-normal xl:text-[#424242]">
                Leading the industrial construction sector with unmatched capacity
                and precision.
              </p>
            </div>

            {/* Points list: right-aligned rows with staggered widths, bottom dividers and chevrons */}
            <ul className="mt-8 flex flex-col gap-[14px] xl:absolute xl:left-[1071px] xl:top-[322px] xl:mt-0 xl:w-[750px] xl:items-end xl:gap-[10px]">
              {POINTS.map((point, i) => (
                <li
                  key={point.label}
                  className="border-b-[1.333px] border-[#e58282] text-white xl:w-[var(--row-w)]"
                  style={{ "--row-w": `${point.width}px` } as CSSProperties}
                >
                  <button
                    type="button"
                    aria-expanded={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full cursor-pointer items-center gap-[10px] text-left xl:pb-[13.333px] xl:pt-[12px]"
                  >
                    <span className="text-[18px] font-bold leading-[26px] sm:text-[22px] xl:w-[27px] xl:shrink-0 xl:text-[24px] xl:leading-[29.867px]">
                      {i + 1}.
                    </span>
                    <span className="block flex-1 text-[18px] font-bold leading-[26px] sm:text-[22px] sm:leading-[30px] xl:text-[24px] xl:leading-[29.867px]">
                      {point.label}
                    </span>
                    <img
                      src="/advantage/chevron.svg"
                      alt=""
                      width={30}
                      height={30}
                      className={`block size-[30px] shrink-0 transition-transform duration-300 ${openIndex === i ? "-rotate-90" : "rotate-90"}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-[14px] pl-[37px] pr-[40px] text-[17px] font-medium leading-normal text-white">
                        Dummy text: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Layer 6: person cutout, on top of every other layer (desktop only) */}
          <Image
            width={1440}
            height={649}
            sizes="1920px"
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
