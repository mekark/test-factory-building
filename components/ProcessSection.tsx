"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { useRef } from "react";
import ProcessMobile from "./ProcessMobile";
import { useCanvasZoom } from "./useCanvasZoom";

// Inter: sub-heading. Space Grotesk: the red step numbers (both per Figma).
const inter = Inter({ subsets: ["latin"], weight: ["400"] });
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
  iconSize: number;
  box?: string;
  img?: string;
  gap: number; // space between icon tile and text block
  titleWidth?: number; // Figma fixes some title widths, which decides where they wrap
  titleLeading: number;
  descWidth?: number;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Understanding Your Production Vision",
    description:
      "We study your manufacturing process, production targets, site constraints, and future expansion needs so the project begins with a clear operational foundation.",
    icon: "/process/clipboard-check.svg",
    iconSize: 40,
    box: "inset-[8.33%_16.67%]",
    img: "inset-[-4.13%_-5.16%]",
    gap: 53,
    titleLeading: 24,
  },
  {
    number: "02",
    title: "Smart Factory Design & Engineering",
    description:
      "We shape layout logic, structural direction, service coordination, and delivery planning into a build-ready engineering path for efficient industrial execution.",
    icon: "/process/drafting-compass.svg",
    iconSize: 40,
    box: "inset-[12.5%]",
    img: "inset-[-4.58%_-4.58%_-4.59%_-4.58%]",
    gap: 53,
    titleWidth: 221,
    titleLeading: 24,
  },
  {
    number: "03",
    title: "Building the Industrial Backbone",
    description:
      "Civil works, foundations, steel framing, and primary infrastructure are executed with disciplined sequencing to create a strong operational base.",
    icon: "/process/factory.svg",
    iconSize: 40,
    gap: 53,
    titleLeading: 22.667,
  },
  {
    number: "04",
    title: "Integrating Plant Utilities & Systems",
    description:
      "Electrical systems, piping, mechanical services, and water treatment infrastructure are integrated so the facility works as one coordinated plant environment.",
    icon: "/process/wrench.svg",
    iconSize: 41,
    gap: 54,
    titleWidth: 271,
    titleLeading: 24,
  },
  {
    number: "05",
    title: "Ready for Production",
    description:
      "Testing, commissioning, final checks, and closeout are completed so the facility is handed over ready for safe and stable manufacturing operations.",
    icon: "/process/circle-check.svg",
    iconSize: 40,
    box: "inset-[8.33%]",
    img: "inset-[-4.13%]",
    gap: 53,
    titleLeading: 24,
    descWidth: 271,
  },
  {
    // Step 06 is an unfinished placeholder in the Figma design ("-" title and body).
    number: "06",
    title: "-",
    description: "-",
    icon: "/process/calendar-check.svg",
    iconSize: 40,
    box: "inset-[8.33%_12.5%_12.5%_12.5%]",
    img: "inset-[-4.34%_-4.58%]",
    gap: 54,
    titleWidth: 162,
    titleLeading: 24,
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

      {/* ---------- Desktop layout (1280px and up): unchanged ---------- */}
      <div className="hidden xl:block">
        {/* ---------- Design canvas (zoomed to the viewport on desktop) ---------- */}
        <div
          ref={canvasRef}
          className="canvas-zoom mx-auto w-full px-5 py-14 sm:px-8 sm:py-16 xl:w-[1920px] xl:p-[80px]"
        >
          <div className="flex flex-col items-start gap-[32px] sm:gap-[40px] xl:gap-[50px]">
            {/* ---------- Heading + sub-heading ---------- */}
            <div className="flex flex-col items-start gap-[12px] xl:gap-[16px]">
              <h2 className="text-[40px] font-bold leading-[1.15] text-[#0f172a] sm:text-[54px] xl:w-[1015px] xl:text-[66px] xl:leading-[73.333px]">
                Our Process
              </h2>
              <p
                className={`${inter.className} text-[16px] font-normal leading-[1.5] text-[#64748b] sm:text-[18px] xl:whitespace-nowrap xl:text-[24px] xl:leading-[20px]`}
              >
                A connected five-step project path that moves from production
                intent to engineering, execution, systems integration, and
                production-ready handover.
              </p>
            </div>

            {/* ---------- Steps grid: 6 columns on desktop, bottom rule beneath ---------- */}
            <div className="grid w-full grid-cols-1 gap-x-[28px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(6,minmax(0,1fr))] xl:gap-y-[30px]">
              {STEPS.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col items-start"
                  style={{ gap: step.gap }}
                >
                  {/* Icon tile: white card, 18px radius, #e4dfe0 hairline */}
                  <div className="relative h-[92px] w-[100px] shrink-0">
                    <div className="absolute left-0 top-[-0.33px] h-[92px] w-[100px] rounded-[18px] border-[0.917px] border-solid border-[#e4dfe0] bg-white" />
                    <div
                      className="absolute left-1/2 top-[calc(50%-0.33px)] -translate-x-1/2 -translate-y-1/2"
                      style={{ width: step.iconSize, height: step.iconSize }}
                    >
                      {step.box ? (
                        <div className={`absolute ${step.box}`}>
                          <div className={`absolute ${step.img}`}>
                            <img
                              src={step.icon}
                              alt=""
                              className="block size-full max-w-none"
                            />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={step.icon}
                          alt=""
                          className="absolute inset-0 block size-full max-w-none"
                        />
                      )}
                    </div>
                  </div>

                  {/* Step number, title and description */}
                  <div className="flex w-full flex-col items-start gap-[12px]">
                    <p
                      className={`${spaceGrotesk.className} text-[26px] font-bold leading-[22px] text-[#ed1d23] ${step.number === "06" ? "ml-px" : ""}`}
                    >
                      {step.number}
                    </p>
                    <h3
                      className="max-w-full text-[21px] font-bold text-black"
                      style={{
                        lineHeight: `${step.titleLeading}px`,
                        width: step.titleWidth,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`max-w-full text-[18px] font-normal leading-[22.667px] text-[#64748b] ${step.number === "06" ? "flex min-h-[45.333px] items-center" : ""}`}
                      style={{ width: step.descWidth }}
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}

              {/* Bottom rule spanning all six columns (Figma "Line" SVG) */}
              <div className="relative col-span-full hidden h-0 xl:block">
                <img
                  src="/process/line.svg"
                  alt=""
                  className="absolute inset-x-0 top-[-0.67px] block h-[1.333px] w-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
