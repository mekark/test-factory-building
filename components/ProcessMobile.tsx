"use client";

import { Space_Grotesk } from "next/font/google";

// Step numbers use Space Grotesk, as in the design.
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

/* ============================================================
   MOBILE "OUR PROCESS" (Figma "Landing Page", 390 × 1233)
   Shown below 1280px only; the desktop section is untouched.
   ============================================================ */

/* ============================================================
   STEP DATA
   `box` / `img` are the insets of the glyph inside the 24px icon frame and of
   the SVG's built-in padding (copied from Figma). Widths and line heights are
   the Figma text boxes, which decide where each title and body wraps.
   ============================================================ */

type Step = {
  number: string;
  numberColor: string;
  title: string;
  description: string;
  icon?: string;
  box?: string;
  img?: string;
  textWidth: number;
  titleLeading: string;
  descLeading: string;
  descWidth?: number;
};

const STEPS: Step[] = [
  {
    number: "01",
    numberColor: "#ff8f92",
    title: "Understanding Your Production Vision",
    description:
      "We study your manufacturing process, production targets, site constraints, and future expansion needs so the project begins with a clear operational foundation.",
    icon: "/process/mobile/clipboard-check.svg",
    box: "inset-[8.33%_16.67%]",
    img: "inset-[-5%_-6.25%]",
    textWidth: 279,
    titleLeading: "leading-[25px]",
    descLeading: "leading-[20px]",
    descWidth: 279,
  },
  {
    number: "02",
    numberColor: "#ff8f92",
    title: "Smart Factory Design & Engineering",
    description:
      "We shape layout logic, structural direction, service coordination, and delivery planning into a build-ready engineering path for efficient industrial execution.",
    icon: "/process/mobile/drafting-compass.svg",
    box: "inset-[12.5%]",
    img: "inset-[-5.56%]",
    textWidth: 236,
    titleLeading: "leading-[22px]",
    descLeading: "leading-[18px]",
    descWidth: 236,
  },
  {
    number: "03",
    numberColor: "#ff8f92",
    title: "Building the Industrial Backbone",
    description:
      "Civil works, foundations, steel framing, and primary infrastructure are executed with disciplined sequencing to create a strong operational base.",
    icon: "/process/mobile/factory.svg",
    textWidth: 284,
    titleLeading: "leading-[22px]",
    descLeading: "leading-[18px]",
    descWidth: 279,
  },
  {
    number: "04",
    numberColor: "#ff8f92",
    title: "Integrating Plant Utilities & Systems",
    description:
      "Electrical systems, piping, mechanical services, and water treatment infrastructure are integrated so the facility works as one coordinated plant environment.",
    icon: "/process/mobile/wrench.svg",
    textWidth: 280,
    titleLeading: "leading-[22px]",
    descLeading: "leading-[18px]",
    descWidth: 280,
  },
  {
    number: "05",
    numberColor: "#ffa5a8",
    title: "Ready for Production",
    description:
      "Testing, commissioning, final checks, and closeout are completed so the facility is handed over ready for safe and stable manufacturing operations.",
    icon: "/process/mobile/circle-check.svg",
    box: "inset-[8.33%]",
    img: "inset-[-5%]",
    textWidth: 283,
    titleLeading: "leading-[22px]",
    descLeading: "leading-[18px]",
    descWidth: 283,
  },
  {
    // Step 06 is an unfinished placeholder in the Figma design: empty tile, "-" title and body.
    number: "06",
    numberColor: "#ff8f92",
    title: "-",
    description: "-",
    textWidth: 236,
    titleLeading: "leading-[22px]",
    descLeading: "leading-[18px]",
  },
];

export default function ProcessMobile() {
  return (
    /* ==========================================================
       MOBILE FRAME — #f9f6f7, one 350px column with 20px side padding
       ========================================================== */
    <div className="bg-[#f9f6f7] px-5 pb-[29px] pt-[30px] font-sans xl:hidden">
      <div className="mx-auto flex w-full max-w-[350px] flex-col items-center gap-6">
        {/* ---------- Heading + sub-heading ---------- */}
        <div className="flex w-full max-w-[324px] flex-col items-start gap-3">
          <h2 className="w-full text-[28px] font-bold leading-[34px] text-[#0f172a]">
            Our Process
          </h2>
          <p className="w-full text-[14px] font-normal leading-[20px] text-[#64748b]">
            A connected five-step project path that moves from production
            intent to engineering, execution, systems integration, and
            production-ready handover.
          </p>
        </div>

        {/* ---------- Steps: icon tile on the left, text on the right ---------- */}
        <div className="relative flex w-full flex-col items-start gap-5">
          {/* Connector line behind all six tiles (centre of the 50px tile). It starts inside
              the first tile and ends at the middle of the last one (54px above the bottom:
              the last step is 79px tall and its tile is 50px, so tile centre = 79 - 25). */}
          <div
            aria-hidden
            className="absolute bottom-[54px] left-[24.33px] top-[12px] z-0 w-[1.333px] bg-[#e4dfe0]"
          />

          {STEPS.map((step) => (
            <article key={step.number} className="relative z-10 flex w-full items-start gap-4">
              {/* Icon tile: white card, 8px radius, #e4dfe0 hairline */}
              <div className="relative size-[50px] shrink-0">
                <div className="absolute left-0 top-0 size-[50px] rounded-[8px] border-[0.917px] border-solid border-[#e4dfe0] bg-white" />
                {step.icon ? (
                  <div className="absolute left-1/2 top-1/2 size-[24px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
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
                ) : null}
              </div>

              {/* Number, title and description */}
              <div
                className="flex min-w-0 flex-col items-start justify-center gap-2"
                style={{ width: step.textWidth, maxWidth: "calc(100% - 66px)" }}
              >
                <p
                  className={`${spaceGrotesk.className} text-[18px] font-bold leading-[normal]`}
                  style={{ color: step.numberColor }}
                >
                  {step.number}
                </p>
                <div className="flex w-full flex-col items-start gap-2">
                  <h3
                    className={`w-full text-[18px] font-bold text-[#0f172a] ${step.titleLeading}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`max-w-full text-[14px] font-normal text-[#64748b] ${step.descLeading}`}
                    style={{ width: step.descWidth }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- Footer placeholder: short pink rule + "text" label (as in the design) ---------- */}
        <div className="flex flex-col items-center gap-3">
          <div aria-hidden className="h-[1.333px] w-[165px] bg-[#ffdcdd]" />
          <p className="text-center text-[20px] font-bold leading-[normal] text-[#9a9a9a]">
            text
          </p>
        </div>
      </div>
    </div>
  );
}
