"use client";

import Image from "next/image";
import { useId, useState } from "react";

// Figma 8701:2674: the mobile design contains five rows, numbered 1–4 and 6.
const POINTS = [
  {
    number: 1,
    label: "Turnkey Factory Construction",
    description:
      "We take single-point accountability from design to handover. As a Turnkey Factory Construction Company and factory shed construction company, we ensure that our engineering, manufacturing, procurement and erection are done under one umbrella, which ensures that your project stays on track and within budget.",
  },
  {
    number: 2,
    label: "In-House Structural Engineers",
    description:
      "As an industrial factory building contractor, we use BIM-based structural analysis to design every structure accurately before work begins. This makes us a dependable factory building contractor for large plants, with fewer on-site design changes.",
  },
  {
    number: 3,
    label: "Foundations & Structures Designed for Your Loads",
    description:
      "We customise the design for your machinery, overhead cranes, mezzanines and floor loads. As a factory construction contractor, we size footings, pedestals and crane gantry supports for safe load transfer and vibration control.",
  },
  {
    number: 4,
    label: "Factory Expansion Without Disrupting Production",
    description:
      "As a turnkey factory expansion contractor and industrial building expansion contractor\nwe plan and execute factory building extensions and industrial shed extension work around your running operations. We match the new bay to the existing structure, so your factory facility expansion adds capacity with minimal downtime.",
  },
  {
    number: 6,
    label: "Safe Construction & Pre-Handover Inspection",
    description:
      "The latest automation ensures consistency and reduces human error. Our automated manufacturing process will cut, weld, and finish all members of your structure to the same specifications, ensuring consistent quality for each component.",
  },
] as const;

export default function FactoryAdvantageMobile() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionId = useId();

  return (
    <div className="mobile-col bg-[#f9f6f7] font-sans xl:hidden">
      <div className="relative h-[249px] w-full overflow-hidden">
        <Image
          src="/advantage/mobile-factory-banner.png"
          alt="Mekark factory construction site with an engineer and a billboard reading: we build factories, you build future"
          width={583}
          height={262}
          sizes="150vw"
          quality={60}
          className="pointer-events-none absolute left-0 top-[-13px] h-[262px] w-[583px] max-w-none object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-5 bg-[linear-gradient(180deg,#fffdfd_6.034%,#e60f1a_47.028%)] p-5">
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="-mb-[6px] -mt-[8px] w-full text-[28px] font-bold leading-[34px] text-[#030303]">
            Why Top Industries
            <br />
            Choose Mekark
          </h2>
          <p className="w-full text-[14px] font-normal leading-[normal] text-[#424242]">
            India&apos;s Leading Industrial Factory Construction &amp; Expansion Company
          </p>
        </div>

        <ul className="flex w-full flex-col gap-5">
          {POINTS.map((point, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${accordionId}-button-${index}`;
            const panelId = `${accordionId}-panel-${index}`;

            return (
              <li key={point.number} className="relative w-full">
                {index > 0 && (
                  <img
                    src="/advantage/mobile-divider.svg"
                    alt=""
                    className="pointer-events-none absolute -top-[11px] left-0 block max-w-full"
                  />
                )}
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`flex w-full cursor-pointer items-center justify-between text-left text-[16px] font-bold leading-[18px] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${index < 2 ? "min-h-[26px]" : "min-h-10"}`}
                >
                  <span className={`flex min-w-0 items-start ${index === 0 ? "w-[256px]" : "w-[260px]"}`}>
                    <span className="w-6 shrink-0 text-center">{point.number}.</span>
                    <span className="min-w-0 flex-1">{point.label}</span>
                  </span>
                  <span className="flex size-[26px] shrink-0 items-center justify-center">
                    <img
                      src="/advantage/mobile-chevron.svg"
                      alt=""
                      className={`block max-w-none transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "-rotate-90" : "rotate-90"}`}
                    />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="mx-auto max-w-[299px] pt-[10px]"
                >
                  <p className="whitespace-pre-line text-[14px] font-medium leading-[normal] text-white">
                    {point.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
