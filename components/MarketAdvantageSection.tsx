"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { CSSProperties, useRef } from "react";
import MarketAdvantageMobile from "./MarketAdvantageMobile";
import { useCanvasZoom } from "./useCanvasZoom";

// Inter: body copy of cards 02 and 03. Space Grotesk: the big step numbers.
const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

/* ============================================================
   CARD DATA
   x/y/w/h place each card on the 1706.667 × 651 desktop grid; the rest of the
   numbers are the Figma paddings and gaps inside the card. Below 1280px the
   cards simply stack and these values are ignored.
   ============================================================ */

type Card = {
  number: string;
  title: string;
  description: string;
  // Desktop grid placement
  x: number;
  y: number;
  w: number;
  h: number;
  radius: string; // desktop corner rounding (the grid's outer corners only)
  // Desktop inner layout
  pt: number; // top padding
  pl: number; // left padding
  numberHeight: number; // height of the number's line box
  gapAfterNumber: number;
  gapTitleDesc: number;
  titleWidth?: number;
  descWidth?: number;
  // Look
  numberColor: string;
  bg: string;
  titleClass: string;
  descClass: string;
};

const CARDS: Card[] = [
  {
    number: "01",
    title: "3000+ MT High-Capacity Fabrication",
    description:
      "One of the highest production capacities in the region for massive scale industrial demands.",
    x: 0, y: 0, w: 837, h: 307.667,
    radius: "xl:rounded-tl-[33.333px]",
    pt: 52, pl: 40, numberHeight: 20, gapAfterNumber: 37.67, gapTitleDesc: 16,
    titleWidth: 614, descWidth: 681,
    numberColor: "#ffffff",
    bg: "#1e1e1e",
    titleClass: "text-[24px] leading-[32px] xl:text-[30px] xl:leading-[40px]",
    descClass: "text-[18px] leading-[26px] font-medium xl:text-[24px] xl:leading-[33.333px]",
  },
  {
    number: "02",
    title: "Fully Automated Steel Production",
    description:
      "Latest automation technology ensuring consistency and eliminates human error.",
    x: 869, y: 0, w: 403, h: 307,
    radius: "",
    pt: 38, pl: 40, numberHeight: 27, gapAfterNumber: 32, gapTitleDesc: 13.333,
    titleWidth: 330, descWidth: 330,
    numberColor: "#fb2c36",
    bg: "#1e1e1e",
    titleClass: "text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px]",
    descClass: `${inter.className} text-[16px] leading-[24px] xl:text-[18px] xl:leading-[26px]`,
  },
  {
    number: "03",
    title: "Advanced CNC-Based Precision Engineering",
    description: "High-accuracy fabrication for complex structural components.",
    x: 1304, y: 0, w: 402, h: 307,
    radius: "xl:rounded-tr-[33.333px]",
    pt: 40, pl: 38.67, numberHeight: 20, gapAfterNumber: 37, gapTitleDesc: 13,
    titleWidth: 324, descWidth: 324,
    numberColor: "#ffffff",
    bg: "#1e1e1e",
    titleClass: "text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px]",
    descClass: `${inter.className} text-[16px] leading-[24px] xl:text-[18px] xl:leading-[26px]`,
  },
  {
    number: "04",
    title: "ISO-Certified Quality Systems",
    description:
      "Rigorous quality protocols ensuring durability and safety compliance.",
    x: 0.33, y: 344, w: 402, h: 307,
    radius: "xl:rounded-bl-[33px]",
    pt: 34.67, pl: 38, numberHeight: 21.333, gapAfterNumber: 44, gapTitleDesc: 28,
    titleWidth: 302, descWidth: 302,
    numberColor: "#ffffff",
    bg: "#1e1e1e",
    titleClass: "text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px]",
    descClass: "text-[16px] leading-[24px] font-medium xl:text-[18px] xl:leading-[26px]",
  },
  {
    number: "05",
    title: "30–40% Faster Project Delivery",
    description:
      "Optimized workflows and in-house execution for rapid facility handover.",
    x: 434.33, y: 344, w: 403, h: 307,
    radius: "",
    pt: 34.67, pl: 39, numberHeight: 21.333, gapAfterNumber: 43, gapTitleDesc: 13.333,
    titleWidth: 324, descWidth: 324,
    numberColor: "#fb2c36",
    bg: "#1e1e1e",
    titleClass: "text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px]",
    descClass: "text-[16px] leading-[24px] font-medium xl:text-[18px] xl:leading-[26px]",
  },
  {
    // Card 06 is an unfinished placeholder in the Figma design ("Text" / dashes).
    number: "06",
    title: "Text",
    description: "--------",
    x: 869.33, y: 344, w: 837, h: 307,
    radius: "xl:rounded-br-[33.333px]",
    pt: 34.33, pl: 38, numberHeight: 21.333, gapAfterNumber: 47, gapTitleDesc: 21.333,
    numberColor: "#ffffff",
    bg: "#e50818",
    titleClass: "text-[26px] leading-[30px] xl:text-[32px]",
    descClass: "text-[20px] leading-[30px] font-medium whitespace-nowrap xl:text-[24px]",
  },
];

/* ============================================================
   MARKET ADVANTAGE SECTION
   ============================================================ */

export default function MarketAdvantageSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);

  return (
    /* ==========================================================
       SECTION WRAPPER — full-bleed #040303, 1920×1024 design canvas
       ========================================================== */
    <section className="overflow-hidden bg-[#040303] font-sans">
      {/* ---------- Mobile / tablet layout (below 1280px): separate component, see MarketAdvantageMobile.tsx ---------- */}
      <MarketAdvantageMobile />

      {/* ---------- Desktop layout (1280px and up): unchanged ---------- */}
      <div className="hidden xl:block">
        {/* ---------- Design canvas (zoomed to the viewport on desktop) ---------- */}
        <div
          ref={canvasRef}
          className="canvas-zoom mx-auto w-full px-5 py-14 sm:px-8 sm:py-16 xl:w-[1920px] xl:px-[106.667px] xl:py-[80px]"
        >
          <div className="flex flex-col items-start gap-[32px] xl:gap-[50px]">
            {/* ---------- Centered heading block ---------- */}
            <div className="flex w-full flex-col items-center gap-[16px] text-center xl:w-[1705.333px] xl:gap-[21px]">
              <div className="flex w-full flex-col items-center gap-[10px] font-bold xl:w-[1488px]">
                {/* Eyebrow */}
                <p className="w-full text-[13px] font-bold uppercase leading-[21.333px] text-[#e50818] xl:text-[16px]">
                  Market advantage
                </p>
                {/* Heading: white + red highlight */}
                <h2 className="w-full text-[32px] font-bold leading-[1.2] sm:text-[48px] xl:text-[66px] xl:leading-[80px]">
                  <span className="text-white">Why Top Industries </span>
                  <span className="text-[#e50818]">Choose Mekark</span>
                </h2>
              </div>
              {/* Sub-heading */}
              <p className="w-full text-[16px] font-normal leading-[1.5] text-[#e8e8e8] sm:text-[20px] xl:w-[1488px] xl:text-[24px] xl:leading-[30px]">
                Leading the industrial construction sector with unmatched capacity
                and precision.
              </p>
            </div>

            {/* ---------- Bento grid: 3 cards over 3 cards on desktop ---------- */}
            <div className="relative grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 xl:block xl:h-[651px]">
              {CARDS.map((card) => {
                // Desktop geometry is passed through CSS variables (read by the xl: classes).
                const vars = {
                  "--x": `${card.x}px`,
                  "--y": `${card.y}px`,
                  "--w": `${card.w}px`,
                  "--h": `${card.h}px`,
                  "--pt": `${card.pt}px`,
                  "--pl": `${card.pl}px`,
                  "--tw": card.titleWidth ? `${card.titleWidth}px` : "100%",
                  "--dw": card.descWidth ? `${card.descWidth}px` : "100%",
                  backgroundColor: card.bg,
                } as CSSProperties;

                return (
                  <article
                    key={card.number}
                    style={vars}
                    className={`overflow-hidden rounded-[20px] border-[1.333px] border-solid border-black p-[28px] xl:absolute xl:left-[var(--x)] xl:top-[var(--y)] xl:h-[var(--h)] xl:w-[var(--w)] xl:rounded-none xl:pb-0 xl:pr-0 xl:pl-[var(--pl)] xl:pt-[var(--pt)] ${card.radius} ${card.number === "01" || card.number === "06" ? "sm:col-span-2" : ""}`}
                  >
                    {/* Step number: Space Grotesk 34px, wide tracking */}
                    <div
                      className="flex items-start xl:h-[var(--nh)]"
                      style={{ "--nh": `${card.numberHeight}px` } as CSSProperties}
                    >
                      <p
                        className={`${spaceGrotesk.className} text-[28px] font-bold uppercase leading-[20px] tracking-[1.6px] xl:text-[34px] ${card.numberHeight > 20 ? "xl:mt-px" : ""}`}
                        style={{ color: card.numberColor }}
                      >
                        {card.number}
                      </p>
                    </div>

                    {/* Title + description */}
                    <div
                      className="mt-[20px] flex flex-col gap-[12px] xl:mt-[var(--gn)] xl:gap-[var(--gt)]"
                      style={
                        {
                          "--gn": `${card.gapAfterNumber}px`,
                          "--gt": `${card.gapTitleDesc}px`,
                        } as CSSProperties
                      }
                    >
                      <h3
                        className={`max-w-full font-bold text-[#f0f0f0] xl:w-[var(--tw)] ${card.titleClass} ${card.number === "06" ? "text-white" : ""}`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`max-w-full xl:w-[var(--dw)] ${card.number === "06" ? "text-white" : "text-[#d6d6d6]"} ${card.descClass}`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
