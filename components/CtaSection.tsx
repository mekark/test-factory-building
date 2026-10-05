"use client";

import Image from "next/image";
import { useRef } from "react";
import { PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_HREF } from "../lib/contact";
import CtaMobile from "./CtaMobile";
import { useCanvasZoom } from "./useCanvasZoom";
import {
  EnquiryValues,
  INDUSTRY_TYPES,
  SQFT_OPTIONS,
  useEnquiryForm,
} from "./useEnquiryForm";

/* ============================================================
   CONTENT DATA
   ============================================================ */

// "Lead includes" ticks, two per row. Row 2's first item has a fixed width in Figma.
const INCLUDES = [
  ["Turnkey Execution", "Industrial Civil Works"],
  ["MEP & Utilities", "Tanks & Infrastructure"],
] as const;

/* ============================================================
   FORM FIELD STYLES (Figma: #f0f0f0 fill, #e2e2e2 1px stroke, 8px radius)
   ============================================================ */

const LABEL_CLASS =
  "block text-[14px] font-bold leading-[normal] tracking-[0.3px] text-[#5a5a5a]";

const FIELD_CLASS =
  "block w-full rounded-[8px] border border-solid border-[#e2e2e2] bg-[#f0f0f0] font-normal text-[#18181b] outline-none transition-colors placeholder:text-[#757575] focus:border-[#c4161c]";

const ERROR_CLASS =
  "pointer-events-none absolute left-0 top-full mt-px text-[11px] leading-[13px] text-[#dc2626]";

/* ============================================================
   CTA SECTION
   ============================================================ */

export default function CtaSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);

  const { values, errors, submitError, isSubmitting, handleChange, handleSubmit } =
    useEnquiryForm();

  // Error ring for invalid fields.
  const invalid = (field: keyof EnquiryValues) =>
    errors[field] ? "!border-[#dc2626]" : "";

  // Selects show their placeholder in grey until a value is chosen.
  const selectTone = (field: keyof EnquiryValues) =>
    values[field] ? "text-[#18181b]" : "text-[#757575]";

  return (
    /* ==========================================================
       SECTION WRAPPER — 1920×1034 design canvas
       ========================================================== */
    <section id="contact" className="overflow-hidden bg-[#c4161c] font-sans">
      {/* ---------- Mobile / tablet layout (below 1280px): separate component, see CtaMobile.tsx ---------- */}
      <CtaMobile />

      {/* ---------- Desktop layout (1280px and up): unchanged ---------- */}
      <div className="hidden xl:block">
        {/* ---------- Design canvas (zoomed to the viewport on desktop) ---------- */}
        <div
          ref={canvasRef}
          className="canvas-zoom relative isolate mx-auto w-full overflow-hidden px-5 py-14 sm:px-8 sm:py-16 xl:h-[1034px] xl:w-[1920px] xl:p-0"
        >
          {/* ---------- Background: industrial pipework photo, mirrored ---------- */}
          <div className="absolute inset-0 -z-20 -scale-x-100 xl:inset-auto xl:bottom-[0.33px] xl:left-0 xl:h-[1132px] xl:w-[2019.025px]">
            <Image
              src="/cta/bg.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 2020px, 100vw"
              className="object-cover"
            />
          </div>

          {/* ---------- Background: red wash that fades to the photo on the right ---------- */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(237,32,36,0.94),rgba(237,32,36,0.86))] xl:inset-x-0 xl:bottom-auto xl:top-[-0.33px] xl:h-[1034px] xl:bg-[linear-gradient(180deg,rgba(4,11,17,0.09)_36.265%,rgba(4,10,16,0.197)_70.394%,rgba(4,9,15,0.38)_100%),linear-gradient(90deg,rgb(237,32,36)_0%,rgba(237,32,36,0.98)_21.195%,rgba(237,32,36,0.68)_55.672%,rgba(8,8,8,0)_93.011%)]"
          />

          {/* ======================================================
              CONTENT — copy + contact cards on the left, enquiry form on the right
              ====================================================== */}
          <div className="relative flex flex-col gap-12 xl:absolute xl:left-[106.67px] xl:top-[82.19px] xl:flex-row xl:items-center xl:gap-[181px]">
            {/* ====================================================
                LEFT COLUMN
                ==================================================== */}
            <div className="flex w-full flex-col items-start gap-[20px] xl:w-[837.333px] xl:shrink-0">
              {/* Heading + intro paragraph */}
              <div className="flex w-full flex-col items-start gap-[16px] xl:gap-[25.467px]">
                <h2 className="w-full text-[36px] font-extrabold leading-[1.15] text-[#212226] sm:text-[52px] xl:text-[80px] xl:leading-[81.6px]">
                  Start Your Factory Construction Project
                </h2>
                <p className="w-full text-[17px] font-medium leading-[1.55] text-white sm:text-[20px] xl:text-[24px] xl:leading-[37.333px]">
                  Speak with our team about your manufacturing facility, industrial
                  plant, utility infrastructure, or heavy engineering project
                  requirements. We deliver turnkey solutions with a focus on
                  execution quality, safety, and long-term operational value.
                </p>
              </div>

              {/* Lead prompt, tick list and the two contact cards */}
              <div className="flex w-full flex-col items-start gap-[24px]">
                {/* Prompt + ticks (fixed 201.48px block on desktop) */}
                <div className="relative w-full xl:h-[201.48px]">
                  <p className="w-full text-[18px] font-bold leading-[1.5] text-[#212226] sm:text-[20px] xl:text-[24px] xl:leading-[36px]">
                    Discuss your manufacturing facility, industrial plant, or heavy
                    infrastructure requirement with our team.
                  </p>
                  <ul className="mt-5 flex flex-col gap-[14px] xl:absolute xl:left-0 xl:top-[84px] xl:mt-0 xl:w-full xl:pt-[12.147px]">
                    {INCLUDES.map((row) => (
                      <li
                        key={row[0]}
                        className="flex flex-wrap items-start gap-x-[30px] gap-y-[14px]"
                      >
                        {row.map((label, i) => (
                          <div
                            key={label}
                            className={`flex items-center gap-[16px] ${i === 0 ? "xl:min-w-[230px]" : ""}`}
                          >
                            {/* Tick badge: half-transparent red circle with a ✓ */}
                            <span className="flex size-[37.333px] shrink-0 items-center justify-center rounded-full bg-[rgba(196,22,28,0.5)] text-[17.333px] font-semibold leading-[normal] text-[#171717]">
                              ✓
                            </span>
                            <span className="whitespace-nowrap text-[16px] font-semibold leading-[normal] text-white xl:text-[20px]">
                              {label}
                            </span>
                          </div>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact cards (Call Now + WhatsApp), each 120px tall plus a 12px lead-in */}
                <div className="flex w-full flex-col gap-[16px] xl:w-[837.333px] xl:gap-[21.333px]">
                  {/* Call Now */}
                  <div className="flex w-full items-end xl:h-[132px] xl:w-[693.333px]">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex h-[104px] w-full items-center gap-[16px] rounded-[29.333px] border-[1.333px] border-solid border-black/5 bg-[#212121] pl-[18px] pr-[20px] transition-colors hover:bg-[#2b2b2b] xl:h-[120px] xl:gap-[22.67px] xl:pl-[25.33px] xl:pr-[27px]"
                    >
                      <span className="flex size-[56px] shrink-0 items-center justify-center rounded-[22px] bg-[#cc000a] xl:size-[64px] xl:rounded-[24px]">
                        <img src="/cta/phone.svg" alt="" width={26.667} height={26.667} className="block size-[26.667px] max-w-none" />
                      </span>
                      <span className="flex flex-col items-start">
                        <span className="text-[14px] font-bold uppercase leading-[21.333px] text-[#a9a9a9] xl:text-[16px]">
                          Call Now
                        </span>
                        <span className="text-[19px] font-extrabold leading-[32px] text-white xl:text-[21.333px]">
                          {PHONE_DISPLAY}
                        </span>
                      </span>
                      <img src="/cta/arrow.svg" alt="" width={26.667} height={26} className="ml-auto block h-[26px] w-[26.667px] max-w-none" />
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex w-full items-end xl:h-[132px] xl:w-[693.333px]">
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[104px] w-full items-center gap-[16px] rounded-[29.333px] border-[1.333px] border-solid border-black/5 bg-[#212121] p-[18px] transition-colors hover:bg-[#2b2b2b] xl:h-[120px] xl:gap-[21.333px] xl:p-[28px]"
                    >
                      <span className="flex size-[56px] shrink-0 items-center justify-center rounded-[22px] bg-[#cc000a] xl:size-[64px] xl:rounded-[24px]">
                        <img src="/cta/whatsapp.webp" alt="" width={38.667} height={38.667} className="block size-[38.667px] max-w-none object-cover" />
                      </span>
                      <span className="text-[20px] font-bold leading-[27.46px] text-white xl:text-[26px]">
                        WhatsApp Us Now
                      </span>
                      <img src="/cta/arrow.svg" alt="" width={26.667} height={26} className="ml-auto block h-[26px] w-[26.667px] max-w-none" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================================================
                RIGHT COLUMN — white "Request Your Project Blueprint" form card
                ==================================================== */}
            <form
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              className="flex w-full flex-col items-center gap-[21px] rounded-[28.998px] border border-solid border-[#e2e2e2] bg-white px-5 py-8 drop-shadow-[0px_24px_40px_rgba(0,0,0,0.06)] sm:px-[46px] sm:py-[42px] xl:w-[600px] xl:shrink-0"
            >
              {/* Form header */}
              <h3 className="w-full max-w-[320px] text-center text-[21.8px] font-extrabold leading-[normal] tracking-[-0.5px] text-[#080808]">
                Request Your Project Blueprint
              </h3>
              <p className="w-full max-w-[317.333px] text-center text-[13px] font-medium leading-[normal] text-[#9a9a9a]">
                Get a custom layout, cost range &amp; 150-day timeline
              </p>

              {/* Fields */}
              <div className="flex w-full flex-col items-start gap-[12px]">
                {/* Row 1: Full Name + Project Location */}
                <div className="flex w-full flex-col gap-[12px] sm:flex-row sm:items-center sm:gap-[32px]">
                  <div className="relative flex flex-1 flex-col gap-[6px]">
                    <label htmlFor="cta-name" className={LABEL_CLASS}>
                      Full Name*
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      className={`${FIELD_CLASS} h-[43px] px-[17px] text-[12px] ${invalid("name")}`}
                    />
                    {errors.name ? <p className={ERROR_CLASS}>{errors.name}</p> : null}
                  </div>
                  <div className="relative flex flex-1 flex-col gap-[6px]">
                    <label htmlFor="cta-location" className={LABEL_CLASS}>
                      Project Location
                    </label>
                    <input
                      id="cta-location"
                      name="projectLocation"
                      type="text"
                      placeholder="Enter project location"
                      value={values.projectLocation}
                      onChange={handleChange}
                      className={`${FIELD_CLASS} h-[46px] pl-[21px] pr-[33px] text-[14px] tracking-[0.3px]`}
                    />
                  </div>
                </div>

                {/* Row 2: Mobile Number + Email Address */}
                <div className="flex w-full flex-col gap-[12px] sm:flex-row sm:items-center sm:gap-[32px]">
                  <div className="relative flex flex-1 flex-col gap-[6px]">
                    <label htmlFor="cta-phone" className={LABEL_CLASS}>
                      Mobile Number*
                    </label>
                    <input
                      id="cta-phone"
                      name="phoneNumber"
                      type="tel"
                      inputMode="tel"
                      maxLength={16}
                      placeholder="+91 98765 43210"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phoneNumber)}
                      className={`${FIELD_CLASS} h-[43px] px-[17px] text-[12px] ${invalid("phoneNumber")}`}
                    />
                    {errors.phoneNumber ? (
                      <p className={ERROR_CLASS}>{errors.phoneNumber}</p>
                    ) : null}
                  </div>
                  <div className="relative flex flex-1 flex-col gap-[6px]">
                    <label htmlFor="cta-email" className={LABEL_CLASS}>
                      Email Address
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      placeholder="abcd@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      className={`${FIELD_CLASS} h-[46px] px-[17px] text-[14px] ${invalid("email")}`}
                    />
                    {errors.email ? <p className={ERROR_CLASS}>{errors.email}</p> : null}
                  </div>
                </div>

                {/* Row 3: Industry Type + Project Sq. Ft */}
                <div className="flex w-full flex-col gap-[12px] sm:flex-row sm:items-center sm:gap-[33px]">
                  <div className="relative flex flex-1 flex-col gap-[6px]">
                    <label htmlFor="cta-industry" className={LABEL_CLASS}>
                      Industry Type*
                    </label>
                    <select
                      id="cta-industry"
                      name="industryType"
                      value={values.industryType}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.industryType)}
                      className={`${FIELD_CLASS} h-[46px] cursor-pointer appearance-none pl-[21px] pr-[33px] text-[14px] ${selectTone("industryType")} ${invalid("industryType")}`}
                    >
                      <option value="" disabled>
                        Select your Industry
                      </option>
                      {INDUSTRY_TYPES.map((option) => (
                        <option key={option} value={option} className="text-[#18181b]">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.industryType ? (
                      <p className={ERROR_CLASS}>{errors.industryType}</p>
                    ) : null}
                  </div>
                  <div className="relative flex flex-1 flex-col gap-[6px]">
                    <label htmlFor="cta-sqft" className={LABEL_CLASS}>
                      Project Sq. Ft*
                    </label>
                    <select
                      id="cta-sqft"
                      name="sqft"
                      value={values.sqft}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.sqft)}
                      className={`${FIELD_CLASS} h-[46px] cursor-pointer appearance-none pl-[21px] pr-[33px] text-[14px] ${selectTone("sqft")} ${invalid("sqft")}`}
                    >
                      <option value="" disabled>
                        Select Sq. Ft Requirement
                      </option>
                      {SQFT_OPTIONS.map((option) => (
                        <option key={option} value={option} className="text-[#18181b]">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.sqft ? <p className={ERROR_CLASS}>{errors.sqft}</p> : null}
                  </div>
                </div>

                {/* Row 4: Requirement Details (full width) */}
                <div className="flex w-full flex-col gap-[6px]">
                  <label htmlFor="cta-requirements" className={LABEL_CLASS}>
                    Requirement Details
                  </label>
                  <textarea
                    id="cta-requirements"
                    name="requirements"
                    rows={1}
                    placeholder="Enter requirement details"
                    value={values.requirements}
                    onChange={handleChange}
                    className={`${FIELD_CLASS} h-[46px] resize-none py-[13px] pl-[21px] pr-[33px] text-[14px] leading-[19px]`}
                  />
                </div>
              </div>

              {/* Submit + reassurance note */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-[58px] w-full items-center justify-center rounded-[8px] bg-[#c4161c] px-[36px] py-[18px] text-center text-[16px] font-extrabold leading-[normal] text-[#f5f5f5] drop-shadow-[0px_8px_16px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#ad1318] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
              </button>

              <p className="w-full text-center text-[10.667px] font-medium leading-[normal] tracking-[0.3px] text-[#5a5a5a]">
                100% Transparent Consultation with single point project support
              </p>

              {/* Submission error (only shown when the API call fails) */}
              {submitError ? (
                <p role="alert" className="text-center text-[12px] text-[#dc2626]">
                  {submitError}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
