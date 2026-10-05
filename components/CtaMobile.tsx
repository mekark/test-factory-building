"use client";

import Image from "next/image";
import { PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_HREF } from "../lib/contact";
import {
  EnquiryValues,
  INDUSTRY_TYPES,
  SQFT_OPTIONS,
  useEnquiryForm,
} from "./useEnquiryForm";

/* ============================================================
   MOBILE CTA (Figma "CTA", 390 × 1194)
   Shown below 1280px only; the desktop CTA is untouched.
   ============================================================ */

// "Lead includes" ticks. Row 1 has a 20px gap; row 2 has fixed item widths and a 24px gap.
const TICKS = [
  { label: "Turnkey Execution", row: 1, width: undefined },
  { label: "Industrial Civil Works", row: 1, width: undefined },
  { label: "MEP & Utilities", row: 2, width: 150 },
  { label: "Tanks & Infrastructure", row: 2, width: 176 },
] as const;

/* ============================================================
   FIELD STYLES (Figma: #f0f0f0 fill, #e2e2e2 stroke, 8px radius)
   ============================================================ */

const FIELD_CLASS =
  "block w-full rounded-[8px] border border-solid border-[#e2e2e2] bg-[#f0f0f0] text-[12px] font-normal leading-[normal] text-[#18181b] outline-none transition-colors placeholder:text-[#757575] focus:border-[#c4161c]";

const ERROR_CLASS = "mt-1 text-[11px] leading-[13px] text-[#dc2626]";

export default function CtaMobile() {
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
       MOBILE FRAME — full-width #090909 with one 390px column
       ========================================================== */
    <div className="bg-[#090909] font-sans xl:hidden">
      <div className="relative mx-auto w-full max-w-[390px] overflow-hidden px-5 py-8">
        {/* ====================================================
            BACKGROUND — faint mirrored pipework, fade to black, red glow
            ==================================================== */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Pipework photo at 20% opacity, mirrored, shifted left so its left part shows */}
          <div className="absolute left-[-154px] top-[0.33px] h-[708px] w-[1263px] -scale-x-100 opacity-20">
            <Image
              src="/cta/bg.webp"
              alt=""
              fill
              sizes="1263px"
              className="object-cover"
            />
          </div>
          {/* Fade from clear to solid black down the page */}
          <div className="absolute left-0 top-0 h-[1596px] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_54.327%)]" />
          {/* Soft red glow in the top-right corner */}
          <div className="absolute left-[180px] top-[-61px] size-[274px] rounded-full bg-[rgba(228,0,21,0.3)] opacity-[0.93] blur-[61.667px]" />
        </div>

        {/* ====================================================
            CONTENT COLUMN (350px at 390 wide)
            ==================================================== */}
        <div className="relative flex w-full flex-col items-start gap-[22px]">
          {/* ---------- Heading + intro (two paragraphs) ---------- */}
          <div className="flex w-full flex-col items-start pl-[6px] pr-[14px] [word-break:break-word]">
            <div className="flex w-full max-w-[326px] flex-col items-start gap-3">
              <h2 className="w-full text-[28px] font-extrabold leading-[30px] text-white">
                Start Your Factory Construction Project
              </h2>
              <div className="w-full text-[14px] font-normal leading-[normal] text-white/65">
                <p>
                  Speak with our team about your manufacturing facility,
                  industrial plant, utility infrastructure, or heavy engineering
                  project requirements. We deliver turnkey solutions with a focus
                  on execution quality, safety, and long-term operational value.
                </p>
                <p className="mt-[19px]">
                  Discuss your manufacturing facility, industrial plant, or heavy
                  infrastructure requirement with our team.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Tick list: two rows of two ---------- */}
          <ul className="flex w-full flex-col items-start gap-[18.667px] pt-[12.147px]">
            {[1, 2].map((row) => (
              <li
                key={row}
                className={`flex w-full items-start ${row === 1 ? "gap-5" : "gap-6"}`}
              >
                {TICKS.filter((tick) => tick.row === row).map((tick) => (
                  <div
                    key={tick.label}
                    className="flex shrink-0 items-center gap-[10px]"
                    style={{ width: tick.width }}
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(196,22,28,0.5)] text-[15px] font-semibold leading-[normal] text-[#f9f9f9]">
                      ✓
                    </span>
                    <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-white">
                      {tick.label}
                    </span>
                  </div>
                ))}
              </li>
            ))}
          </ul>

          {/* ---------- Contact cards: Call Now + WhatsApp ---------- */}
          <div className="flex w-full flex-col gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex w-full items-center gap-4 rounded-[20px] border border-solid border-black/5 bg-[#212121] px-4 py-[9px] transition-colors hover:bg-[#2b2b2b]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#cc000a]">
                <img src="/cta/mobile/phone.svg" alt="" width={24} height={24} className="block size-6" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start gap-[2px]">
                <span className="whitespace-nowrap text-[10px] font-bold uppercase leading-[16px] text-[#a9a9a9]">
                  Call Now
                </span>
                <span className="text-[14px] font-extrabold leading-[24px] text-white">
                  {PHONE_DISPLAY}
                </span>
              </span>
              <img src="/cta/mobile/arrow.svg" alt="" width={24} height={26} className="block h-[26px] w-6 shrink-0" />
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-4 rounded-[20px] border border-solid border-black/5 bg-[#212121] px-4 py-[9px] transition-colors hover:bg-[#2b2b2b]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#cc000a]">
                <img src="/cta/whatsapp.webp" alt="" width={30} height={30} className="block size-[30px] object-cover" />
              </span>
              <span className="min-w-0 flex-1 text-[14px] font-bold leading-[24px] text-white">
                WhatsApp Us Now
              </span>
              <img src="/cta/mobile/arrow.svg" alt="" width={24} height={26} className="block h-[26px] w-6 shrink-0" />
            </a>
          </div>

          {/* ---------- White enquiry form card ---------- */}
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="flex w-full flex-col items-start gap-4 rounded-[24px] border border-solid border-[#e2e2e2] bg-white p-[19px] drop-shadow-[0px_24px_40px_rgba(0,0,0,0.06)]"
          >
            {/* Header */}
            <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
              <h3 className="w-full max-w-[275px] text-[18px] font-extrabold leading-[normal] text-[#080808]">
                Request Your Project Blueprint
              </h3>
              <p className="w-full max-w-[290px] text-[12px] font-medium leading-[normal] text-[#9a9a9a]">
                Get a custom layout, cost range &amp; 150-day* timeline
              </p>
            </div>

            {/* Fields: placeholders only, as in the design */}
            <div className="flex w-full flex-col gap-4">
              <div>
                <input
                  name="name"
                  type="text"
                  aria-label="Full name"
                  placeholder="Enter Your name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  className={`${FIELD_CLASS} h-[41px] px-4 ${invalid("name")}`}
                />
                {errors.name ? <p className={ERROR_CLASS}>{errors.name}</p> : null}
              </div>

              <div>
                <input
                  name="projectLocation"
                  type="text"
                  aria-label="Project location"
                  placeholder="Enter project location"
                  value={values.projectLocation}
                  onChange={handleChange}
                  className={`${FIELD_CLASS} h-[41px] pl-5 pr-8 tracking-[0.3px]`}
                />
              </div>

              <div>
                <input
                  name="phoneNumber"
                  type="tel"
                  inputMode="tel"
                  maxLength={16}
                  aria-label="Mobile number"
                  placeholder="Mobile Number*"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phoneNumber)}
                  className={`${FIELD_CLASS} h-[41px] px-4 ${invalid("phoneNumber")}`}
                />
                {errors.phoneNumber ? <p className={ERROR_CLASS}>{errors.phoneNumber}</p> : null}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter Email Address"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  className={`${FIELD_CLASS} h-[41px] px-4 ${invalid("email")}`}
                />
                {errors.email ? <p className={ERROR_CLASS}>{errors.email}</p> : null}
              </div>

              <div>
                <div className="relative">
                  <select
                    name="industryType"
                    aria-label="Industry type"
                    value={values.industryType}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.industryType)}
                    className={`${FIELD_CLASS} h-[44px] cursor-pointer appearance-none pl-5 pr-8 ${selectTone("industryType")} ${invalid("industryType")}`}
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
                  <img
                    src="/hero/mobile/select-arrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="pointer-events-none absolute right-4 top-1/2 block size-[15px] -translate-y-1/2 rotate-90"
                  />
                </div>
                {errors.industryType ? <p className={ERROR_CLASS}>{errors.industryType}</p> : null}
              </div>

              <div>
                <div className="relative">
                  <select
                    name="sqft"
                    aria-label="Project sq. ft"
                    value={values.sqft}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.sqft)}
                    className={`${FIELD_CLASS} h-[44px] cursor-pointer appearance-none pl-5 pr-8 ${selectTone("sqft")} ${invalid("sqft")}`}
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
                  <img
                    src="/hero/mobile/select-arrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="pointer-events-none absolute right-4 top-1/2 block size-[15px] -translate-y-1/2 rotate-90"
                  />
                </div>
                {errors.sqft ? <p className={ERROR_CLASS}>{errors.sqft}</p> : null}
              </div>

              <div>
                <textarea
                  name="requirements"
                  rows={1}
                  aria-label="Requirement details"
                  placeholder="Enter requirement details"
                  value={values.requirements}
                  onChange={handleChange}
                  className={`${FIELD_CLASS} h-[44px] resize-none py-3 pl-5 pr-8 leading-[19px]`}
                />
              </div>
            </div>

            {/* Submit + reassurance note */}
            <div className="flex w-full flex-col items-start gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-[8px] bg-[#c4161c] px-9 py-[14px] text-center text-[14px] font-semibold leading-[normal] text-[#f5f5f5] drop-shadow-[0px_8px_16px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#ad1318] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
              </button>
              <p className="w-full text-center text-[12px] font-medium leading-[16px] text-[#5a5a5a]">
                100% Transparent Consultation with single point project support
              </p>
              {submitError ? (
                <p role="alert" className="w-full text-center text-[12px] text-[#dc2626]">
                  {submitError}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
