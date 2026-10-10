"use client";

import { Space_Grotesk } from "next/font/google";
import { useRef } from "react";
import ProcessMobile from "./ProcessMobile";
import { useCanvasZoom } from "./useCanvasZoom";

// Space Grotesk: the red step numbers (per Figma).
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

/* ============================================================
   CONTENT DATA
   ============================================================ */

// Each icon is a Figma export with built-in padding, so `box` is the inset of
// the visible glyph inside the 40px icon frame and `img` is the SVG's overflow
// (both copied from the design).
type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
  box: string;
  img: string;
  nudge?: boolean; // Figma offsets the icon by -0.33px on the first two tiles
  titleWidth?: number; // Figma fixes some title widths, which decides where they wrap
  titleLeading: number;
  descWidth?: number;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Site & Project Feasibility",
    description: "Geotechnical, regulatory, and budget checks.",
    icon: "/process/clipboard-check.svg",
    box: "inset-[8.33%_16.67%]",
    img: "inset-[-4.13%_-5.16%]",
    nudge: true,
    titleWidth: 270,
    titleLeading: 24,
  },
  {
    number: "02",
    title: "Design & Engineering",
    description: "In-house engineering, plant layout and utility planning.",
    icon: "/process/drafting-compass.svg",
    box: "inset-[12.5%]",
    img: "inset-[-4.58%]",
    nudge: true,
    titleWidth: 221,
    titleLeading: 24,
  },
  {
    number: "03",
    title: "Civil Works & PEB",
    description:
      "Disciplined sequencing of civil works, steel framing and infrastructure.",
    icon: "/process/hard-hat.svg",
    box: "inset-[16.67%_8.33%_20.83%_8.33%]",
    img: "inset-[-5.5%_-4.13%_-5.5%_-4.12%]",
    titleLeading: 22.667,
  },
  {
    number: "04",
    title: "MEP Integration",
    description:
      "Electrical systems, piping, mechanical works and utility services.",
    icon: "/process/cable.svg",
    box: "inset-[12.5%_8.33%]",
    img: "inset-[-4.58%_-4.13%]",
    titleWidth: 271,
    titleLeading: 24,
  },
  {
    number: "05",
    title: "Quality Validation",
    description: "Inspection, installation & compliance checks.",
    icon: "/process/shield-check.svg",
    box: "inset-[8.33%_16.67%_8.32%_16.67%]",
    img: "inset-[-4.12%_-5.16%]",
    titleLeading: 24,
    descWidth: 271,
  },
  {
    // The Figma design labels this step "05" too (a typo); it is the sixth step.
    number: "06",
    title: "Handover & After-Sales",
    description: "Snag clearance, documentation, and support.",
    icon: "/process/handshake.svg",
    box: "inset-[12.5%_8.33%_11.99%_8.33%]",
    img: "inset-[-4.55%_-4.13%]",
    titleLeading: 24,
    descWidth: 271,
  },
];

/* ============================================================
   PROCESS SECTION
   ============================================================ */

export default function ProcessSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);

  return (
    /* ==========================================================
       SECTION WRAPPER — full-bleed #f9f6f7, 1920×726 design canvas
       ========================================================== */
    <section id="process" className="overflow-hidden bg-[#f9f6f7] font-sans">
      {/* ---------- Mobile / tablet layout (below 1280px): separate component, see ProcessMobile.tsx ---------- */}
      <ProcessMobile />

      {/* ---------- Desktop layout (1280px and up) ---------- */}
      <div className="hidden xl:block">
        {/* ---------- Design canvas (zoomed to the viewport on desktop) ---------- */}
        <div
          ref={canvasRef}
          className="canvas-zoom mx-auto w-full px-5 py-14 sm:px-8 sm:py-16 xl:w-[1920px] xl:p-[80px]"
        >
          <div className="flex flex-col items-start gap-[32px] sm:gap-[40px] xl:gap-[50px]">
            {/* ---------- Heading + sub-heading ---------- */}
            <div className="flex flex-col items-start gap-[12px] xl:gap-[16px]">
              <h2 className="text-[40px] font-bold leading-[1.15] text-[#0f172a] sm:text-[54px] xl:whitespace-nowrap xl:text-[66px] xl:leading-[73.333px]">
                Our <span className="text-[#ed1d23]">Turnkey Factory</span>{" "}
                Construction Process  
              </h2>
              <p className="text-[16px] font-normal leading-[1.5] text-[#64748b] sm:text-[18px] xl:w-[1083px] xl:text-[24px] xl:leading-[32px]">
                From the first consultation to final handover, our factory
                construction services follow a{" "}
                <br className="hidden xl:block" />
                proven 6-step process, whether you are building a new plant or
                planning a factory expansion.
              </p>
            </div>

            {/* ---------- Steps grid: 6 columns on desktop ---------- */}
            <div className="grid w-full grid-cols-1 gap-x-[28px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(6,minmax(0,1fr))] xl:gap-y-[30px]">
              {STEPS.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col items-start gap-[32px]"
                >
                  {/* Icon tile: white card, 18px radius, #e4dfe0 hairline */}
                  <div className="relative h-[92px] w-[100px] shrink-0">
                    <div className="absolute left-0 top-[-0.33px] h-[92px] w-[100px] rounded-[18px] border-[0.917px] border-solid border-[#e4dfe0] bg-white" />
                    <div
                      className={`absolute left-1/2 size-[40px] -translate-x-1/2 -translate-y-1/2 overflow-clip ${step.nudge ? "top-[calc(50%-0.33px)]" : "top-1/2"}`}
                    >
                      <div className={`absolute ${step.box}`}>
                        <div className={`absolute ${step.img}`}>
                          <img
                            src={step.icon}
                            alt=""
                            className="block size-full max-w-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step number, title and description */}
                  <div className="flex w-full flex-col items-start gap-[12px]">
                    <p
                      className={`${spaceGrotesk.className} text-[26px] font-bold leading-[21.333px] text-[#ed1d23]`}
                    >
                      {step.number}
                    </p>
                    <h3
                      className="max-w-full text-[21px] font-bold text-[#1a1a1a]"
                      style={{
                        lineHeight: `${step.titleLeading}px`,
                        width: step.titleWidth,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="max-w-full text-[18px] font-normal leading-[22.667px] text-[#64748b]"
                      style={{ width: step.descWidth }}
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
