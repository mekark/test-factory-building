"use client";

import { Space_Grotesk } from "next/font/google";

// Step numbers use Space Grotesk, as in the design.
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

/* ============================================================
   MOBILE "OUR PROCESS" (Figma "Process Step", 390 × 794)
   Shown below 1280px only; the desktop section is separate.
   ============================================================ */

/* ============================================================
   STEP DATA
   `box` / `img` are the insets of the glyph inside the 20px icon frame and of
   the SVG's built-in padding (copied from Figma).
   ============================================================ */

type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
  box: string;
  img: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Site & Project Feasibility",
    description: "Geotechnical, regulatory, and budget checks.",
    icon: "/process/mobile/clipboard-check.svg",
    box: "inset-[8.33%_16.66%_8.34%_16.67%]",
    img: "inset-[-4.5%_-5.62%]",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description: "In-house engineering, plant layout and utility planning.",
    icon: "/process/mobile/drafting-compass.svg",
    box: "inset-[12.5%]",
    img: "inset-[-5%]",
  },
  {
    number: "03",
    title: "Civil Works & Foundations",
    description:
      "Disciplined sequencing of civil works, steel framing and infrastructure.",
    icon: "/process/mobile/hard-hat.svg",
    box: "inset-[16.67%_8.33%_20.84%_8.33%]",
    img: "inset-[-6%_-4.5%_-6.01%_-4.5%]",
  },
  {
    number: "04",
    title: "MEP Integration",
    description:
      "Electrical systems, piping, mechanical works and utility services.",
    icon: "/process/mobile/cable.svg",
    box: "inset-[12.5%_8.33%]",
    img: "inset-[-5%_-4.5%]",
  },
  {
    number: "05",
    title: "Quality Validation",
    description: "Inspection, installation & compliance checks.",
    icon: "/process/mobile/shield-check.svg",
    box: "inset-[8.33%_16.67%_8.32%_16.67%]",
    img: "inset-[-4.5%_-5.63%]",
  },
  {
    number: "06",
    title: "Handover & After-Sales",
    description: "Snag clearance, documentation, and support.",
    icon: "/process/mobile/handshake.svg",
    box: "inset-[12.5%_8.33%_12%_8.33%]",
    img: "inset-[-4.97%_-4.5%]",
  },
];

export default function ProcessMobile() {
  return (
    /* ==========================================================
       MOBILE FRAME — white, one 350px column with 20px side padding
       ========================================================== */
    <div className="mobile-col bg-white px-5 pb-[52px] pt-8 font-sans xl:hidden">
      <div className="mx-auto flex w-full max-w-[350px] flex-col items-start gap-[14px]">
        {/* ---------- Heading + sub-heading ---------- */}
        <div className="flex w-full flex-col items-start gap-[6px]">
          <h2 className="w-full text-[28px] font-bold leading-[34px] text-[#0f172a]">
            Our <span className="text-[#ed1d23]">Turnkey Factory</span>{" "}
            Construction
          </h2>
          <p className="w-full text-[14px] font-normal leading-[20px] text-[#64748b]">
            From the first consultation to final handover, our factory
            construction services follow a proven 6-step process, whether you
            are building a new plant or planning a factory expansion.
          </p>
        </div>

        {/* ---------- Timeline: numbered dashed circle + card per step ---------- */}
        <ol className="relative flex w-full flex-col gap-[26px]">
          {STEPS.map((step, index) => (
              <li key={step.number} className="relative flex w-full items-center gap-[17px]">
                {/* Preserve the exported timeline's native geometry. */}
                {index === 0 && (
                  <img
                    src="/process/mobile/timeline.svg"
                    alt=""
                    className="pointer-events-none absolute left-[15.5px] top-[43.5px] max-w-none"
                  />
                )}

                {/* Step number in a dashed circle */}
                <span
                  className={`${spaceGrotesk.className} relative z-10 flex size-[33px] shrink-0 items-center justify-center rounded-full border border-dashed border-[#bcbcbc] bg-white pb-2 pl-2 pr-[9px] pt-[7px] text-[14px] font-bold leading-[normal] text-[#080808]`}
                >
                  {step.number}
                </span>

                {/* Card: icon + title + description */}
                <div className="relative z-10 flex min-w-0 flex-1 items-center gap-[10px] rounded-[6px] bg-[#fffcfc] py-[6px] pl-[10px] pr-[9px] drop-shadow-[-1px_1px_3px_rgba(30,30,30,0.1)]">
                  <div className="relative size-[20px] shrink-0 overflow-clip">
                    <div className={`absolute ${step.box}`}>
                      <div className={`absolute ${step.img}`}>
                        <img
                          src={step.icon}
                          alt=""
                          className="block max-w-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-px">
                    <h3 className={`w-full text-[16px] font-semibold text-[#0f172a] ${index === 0 ? "leading-[24px]" : "leading-[normal]"}`}>
                      {step.title}
                    </h3>
                    <p className="w-full text-[12px] font-normal leading-[20px] text-[#64748b]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
