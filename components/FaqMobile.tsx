"use client";

import Image from "next/image";
import { useState } from "react";
import { FAQS } from "./faqData";

/* ============================================================
   MOBILE FAQ (Figma "faq-mobile", 390 × 1396)
   Shown below 1280px only; the desktop FAQ is untouched.
   Every row looks the same: typed number, 12px gap, a divider after each row.
   The questions and answers come from the same list as the desktop FAQ;
   the desktop-only fields (width / align / literal) are not used here.
   ============================================================ */

// A few questions start with a space in the design; it shows as a small indent.
const LEADING_SPACE_ROWS = new Set([1, 3, 4, 7, 9]);

function Divider() {
  // 1px #e2e2e2 rule, reaching 11px past the left edge of the 350px list.
  // The box has zero height (the line sits just above it), exactly like Figma,
  // so dividers don't add to the row spacing.
  return (
    <div aria-hidden className="relative h-0 w-[calc(100%+11px)] shrink-0 self-end">
      <span className="absolute inset-x-0 -top-px h-px bg-[#e2e2e2]" />
    </div>
  );
}

export default function FaqMobile() {
  // One answer open at a time; the first is open by default (as in the design).
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    /* ==========================================================
       MOBILE FRAME — full-width #f9f6f7 with one 390px column
       ========================================================== */
    <div className="bg-[#f9f6f7] font-sans xl:hidden">
      <div className="mobile-col flex flex-col items-start gap-6 px-5 py-8">
        {/* ======================================================
            INTRO — label, heading, placeholder text, illustration
            ====================================================== */}
        <div className="flex w-full flex-col items-start gap-[21px]">
          <div className="flex flex-col items-start gap-3 px-5 py-[6px]">
            {/* Section label: short red bar + "FAQ" */}
            <div className="flex items-center gap-[10.667px]">
              <span aria-hidden className="h-[2.667px] w-[26.667px] shrink-0 bg-[#c4161c]" />
              <span className="whitespace-nowrap text-[14.667px] font-extrabold uppercase leading-[normal] tracking-[2.6667px] text-[#c4161c]">
                FAQ
              </span>
            </div>

            {/* Heading on two lines */}
            <h2 className="w-[309px] max-w-full text-[28px] font-bold leading-[32px] text-[#070506]">
              Frequently Asked
              <br />
              Questions
            </h2>

            {/* Sub-heading: the Figma design only has the placeholder "Text" here */}
            <p className="text-[14px] font-medium leading-[15px] text-[#64748b]">Text</p>
          </div>

          {/* Factory illustration (square, transparent background) */}
          <div className="relative aspect-square w-full max-w-[350px]">
            <Image
              src="/faq/factory.webp"
              alt="Illustration of an industrial factory building with a tall chimney"
              fill
              sizes="350px"
              className="object-cover"
            />
          </div>
        </div>

        {/* ======================================================
            ACCORDION LIST
            ====================================================== */}
        <ul className="flex w-full flex-col items-end gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = index + 1;

            return (
              <li key={faq.q} className="flex w-full flex-col items-end gap-3">
                <div className="flex w-full flex-col items-start overflow-hidden">
                  {/* Question row (a button, so it works with keyboard and screen readers) */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-m-answer-${index}`}
                    className="flex w-full cursor-pointer items-center gap-4 text-left"
                  >
                    <span
                      className={`min-w-0 flex-1 whitespace-pre-wrap text-[16px] font-medium leading-[24px] transition-colors duration-300 ${isOpen ? "text-[#c4161c]" : "text-[#080808]"}`}
                    >
                      {/* Row 1 has no space after its number in the design */}
                      {index === 0
                        ? `${number}.${faq.q}`
                        : `${LEADING_SPACE_ROWS.has(index) ? " " : ""}${number}. ${faq.q}`}
                    </span>

                    {/* Toggle: grey "+" when closed; red circle turned into a "×" when open */}
                    {isOpen ? (
                      <span className="flex size-[33.941px] shrink-0 items-center justify-center">
                        <span className="flex size-6 rotate-45 items-center justify-center rounded-full bg-[#c4161c] text-[21.333px] font-normal leading-[normal] text-[#f5f5f5]">
                          +
                        </span>
                      </span>
                    ) : (
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f0f0f0] text-[21.333px] font-normal leading-[normal] text-[#9a9a9a]">
                        +
                      </span>
                    )}
                  </button>

                  {/* Answer: slides open/closed (grid-rows trick, no fixed height) */}
                  <div
                    id={`faq-m-answer-${index}`}
                    className={`grid w-full transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-[10px] text-[14px] font-medium leading-[20px] text-[#5a5a5a]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>

                <Divider />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
