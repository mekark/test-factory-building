"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import FactoryAdvantageMobile from "./FactoryAdvantageMobile";
import { useCanvasZoom } from "./useCanvasZoom";

/* ============================================================
   CONTENT DATA — six accordion rows (Figma "Frame 271")
   ============================================================ */

const POINTS = [
  {
    label: "Turnkey Factory Construction",
    description:
      "We take single-point accountability from design to handover. As a Turnkey Factory Construction Company and factory shed construction company, we ensure that our engineering, manufacturing, procurement and erection are done under one umbrella, which ensures that your project stays on track and within budget.",
  },
  {
    label: "In-House Structural Engineers",
    description:
      "As an industrial factory building contractor, we use BIM-based structural analysis to design every structure accurately before work begins. This makes us a dependable factory building contractor for large plants, with fewer on-site design changes.",
  },
  {
    label: "Foundations & Structures Designed for Your Loads",
    description:
      "We customise the design for your machinery, overhead cranes, mezzanines and floor loads. As a factory construction contractor, we size footings, pedestals and crane gantry supports for safe load transfer and vibration control.",
  },
  {
    label: "Factory Expansion Without Disrupting Production",
    description:
      "As your industrial construction contractor, Mekark connects design, civil works, structural steel, MEP and project execution through one EPC delivery model.",
  },
  {
    label: "Fully Automated Steel Production",
    description:
      "Factory extensions and manufacturing plant expansion can be considered during the original engineering, reducing what needs to be reworked when the facility grows.",
  },
  {
    label: "Safe Construction & Pre-Handover Inspection",
    description:
      "ISO 9001:2015 and CE-certified processes support fabrication quality with documentation your project and compliance teams can verify.",
  },
] as const;

/* ============================================================
   FACTORY ADVANTAGE SECTION
   ============================================================ */

export default function FactoryAdvantageSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  // One row open at a time; all rows start closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useCanvasZoom(canvasRef);

  return (
    /* ==========================================================
       SECTION WRAPPER — 1920×865 design canvas
       ========================================================== */
    <section className="overflow-hidden bg-white font-sans">
      {/* ---------- Mobile / tablet layout (below 1280px): separate component, see FactoryAdvantageMobile.tsx ---------- */}
      <FactoryAdvantageMobile />

      {/* ---------- Desktop layout (1280px and up) ---------- */}
      <div className="hidden xl:block">
        {/* ---------- Design canvas (zoomed to the viewport on desktop) ---------- */}
        <div
          ref={canvasRef}
          className="canvas-zoom relative mx-auto h-[865.333px] w-[1920px]"
        >
          {/* ======================================================
              PHOTO LAYERS — factory photo, red L-shaped panel + gradient
              ====================================================== */}
          {/* Layer 1: full-bleed factory photo with the "we build factories" billboard */}
          <div className="absolute left-0 top-[-0.33px] h-[865.333px] w-[1920px] overflow-hidden">
            <Image
              src="/advantage/factory-bg.webp"
              alt="Mekark factory under construction with a billboard reading: we build factories, you build future"
              width={1000}
              height={640}
              sizes="1920px"
              className="pointer-events-none absolute left-[-0.01%] top-[-38.54%] h-[142%] w-full max-w-none"
            />
          </div>

          {/* Layers 2–4: red L-shaped panel + light-to-red gradient on its top edge */}
          <div className="absolute left-[1004px] top-[-0.33px] h-[568px] w-[916px] bg-[#e60f1a]" />
          <div className="absolute left-[1047px] top-[514px] h-[224px] w-[873px] bg-[#e60f1a]" />
          <Image
            src="/advantage/panel-overlay.webp"
            alt=""
            width={916}
            height={399}
            sizes="916px"
            className="pointer-events-none absolute left-[1004px] top-[-3px] h-[398.667px] w-[916px] max-w-none object-cover"
          />

          {/* ======================================================
              COPY — heading + sub-heading
              ====================================================== */}
          <div className="absolute left-[1099px] top-[40.33px] flex w-[782.667px] flex-col items-start justify-center gap-[25px] py-[6px]">
            <h2 className="w-full text-[53.333px] font-extrabold leading-[60px] tracking-[-1.3333px] text-[#030303]">
              Why Top Industries
              <br />
              Choose Mekark
            </h2>
            <p className="whitespace-nowrap text-[21.333px] font-normal leading-[28px] text-[#424242]">
              India&apos;s Leading Industrial Factory Construction &amp; Expansion
              Company
            </p>
          </div>

          {/* ======================================================
              ACCORDION — six right-aligned rows, scrolls when a row is open
              ====================================================== */}
          <div className="absolute left-[1099px] top-[216px] h-[523px] w-[750px]">
            <ul className="flex h-full w-full flex-col items-end gap-[10px] overflow-y-auto overflow-x-clip [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {POINTS.map((point, i) => {
                const isOpen = openIndex === i;
                const isLast = i === POINTS.length - 1;
                return (
                  <li
                    key={point.label}
                    className={`w-[718px] shrink-0 text-white ${isLast ? "" : "border-b-[1.333px] border-solid border-[#e58282]"}`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-start pb-[13.333px] pr-[19px] pt-[12px] text-left"
                    >
                      <span className="w-[37px] shrink-0 text-[24px] font-bold leading-[29.867px]">
                        {i + 1}.
                      </span>
                      <span className="block w-[492px] shrink-0 text-[24px] font-bold leading-[29.867px]">
                        {point.label}
                      </span>
                      <img
                        src="/advantage/chevron.svg"
                        alt=""
                        width={30}
                        height={30}
                        className={`ml-auto block size-[30px] shrink-0 transition-transform duration-300 ${isOpen ? "-rotate-90" : "rotate-90"}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="w-[632px] pb-[14px] pl-[37px] text-[17px] font-medium leading-normal text-white">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Soft fade at the bottom of the scroll area (Figma "Rectangle 24") */}
            <Image
              src="/advantage/list-fade.webp"
              alt=""
              width={750}
              height={73}
              sizes="750px"
              className="pointer-events-none absolute bottom-0 left-0 h-[73px] w-[750px] max-w-none object-cover"
            />
          </div>

          {/* Layer 6: person cutout, on top of every other layer */}
          <div className="pointer-events-none absolute left-[816px] top-0 h-[865px] w-[328px] overflow-hidden">
            <Image
              src="/advantage/person-2.webp"
              alt=""
              width={1440}
              height={649}
              sizes="1920px"
              className="absolute left-[-248.78%] top-[-0.04%] h-[100.04%] w-[585.37%] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
