"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { PHONE_NUMBER, WHATSAPP_HREF } from "../lib/contact";
import {
  EnquiryValues,
  INDUSTRY_TYPES,
  SQFT_OPTIONS,
  useEnquiryForm,
} from "./useEnquiryForm";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

/* ============================================================
   MOBILE HERO (Figma "Section", node 8701:2192)
   Shown below 1280px only; the desktop hero is untouched.
   ============================================================ */

/* ============================================================
   CONTENT DATA
   ============================================================ */

const FEATURES = [
  "Automotive, EV, Electronics, Electrical & Semiconductor.",
  "Renewable Energy, Engineering,Electrical Vehicle.",
  "Cold Storage & Clean Rooms,  Machinery & Heavy Manufacturing.",
  "Textile, Pharmaceutical, Chemical & Life Sciences.",
  "Metals, Steel, Building Materials, Packaging & Plastics, Logistics.",
  "Apparel, Leather, Food Processing, Beverage, FMCG.",
] as const;

// The four client logos and their crops from the mobile Figma node.
// size = logo box inside the 64×40 tile, as in Figma.
const LOGOS = [
  { name: "L&T", src: "/hero/mobile/design-lt.png", w: 64, h: 64 * 1132 / 2084 },
  { name: "CAT", src: "/hero/mobile/design-cat.png", w: 48, h: 48 },
  { name: "TVS", src: "/hero/mobile/design-tvs.png", w: 52, h: 53 },
  { name: "Tata", src: "/hero/mobile/design-tata.png", w: 32, h: 32 },
] as const;

// Suffix colours differ slightly per stat in the design.
const STATS = [
  { value: "300", suffix: "+", suffixColor: "#c4161c", label: "Projects" },
  { value: "18", suffix: "+", suffixColor: "#cc000a", label: "years Experience" },
  { value: "40,000 ", suffix: "MT", suffixColor: "#c4161c", label: "Annual Production" },
  { value: "175", suffix: "+", suffixColor: "#c4161c", label: "Engineering Team" },
] as const;

/* ============================================================
   FIELD STYLES (Figma: #f0f0f0 fill, #e2e2e2 stroke, 8px radius, 44px tall)
   ============================================================ */

const FIELD_CLASS =
  "block h-[44px] w-full rounded-[8px] border border-solid border-[#e2e2e2] bg-[#f0f0f0] text-[12px] font-normal leading-[normal] text-[#18181b] outline-none transition-colors placeholder:text-[#757575] focus:border-[#c4161c]";

const ERROR_CLASS = "mt-1 text-[11px] leading-[13px] text-[#ff8a8a]";

export default function HeroMobile() {
  const { values, errors, submitError, isSubmitting, handleChange, handleSubmit } =
    useEnquiryForm();

  // Error ring for invalid fields.
  const invalid = (field: keyof EnquiryValues) =>
    errors[field] ? "!border-[#ff6b6b]" : "";

  // Selects show their placeholder in grey until a value is chosen.
  const selectTone = (field: keyof EnquiryValues) =>
    values[field] ? "text-[#18181b]" : "text-[#757575]";

  return (
    /* ==========================================================
       MOBILE FRAME — one 390px column, page background shows beside it on tablets
       ========================================================== */
    <div className="mobile-col relative min-h-[1732px] overflow-hidden bg-[#060606] pt-[44px] font-sans xl:hidden">
      {/* ======================================================
          BACKGROUND STACK (bottom → top), positioned as in Figma.
          Left offsets/widths are % of the frame so it scales with the column;
          vertical offsets are px from the top.
          ====================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* 1. Warehouse at sunset (only a sliver shows at the very top) */}
        <Image
          src="/hero/mobile/design-layer1.png"
          alt=""
          width={941}
          height={1672}
          className="absolute left-[-0.82%] top-[-76.25px] h-[698.67px] w-[100.82%] max-w-none"
        />
        {/* 2. Steel frame at dusk, tall photo */}
        <Image
          src="/hero/mobile/design-image22.png"
          alt=""
          width={941}
          height={1672}
          className="absolute left-[-70.46%] top-[15.44px] h-[1671.95px] w-[241.28%] max-w-none"
        />
        {/* 3. Steel frame, second crop behind the form */}
        <Image
          src="/hero/mobile/design-image23.png"
          alt=""
          width={714}
          height={2202}
          className="absolute left-[-15.13%] top-[419px] h-[1556px] w-[129.49%] max-w-none object-cover"
        />
        {/* 4. 40% black wash from below the hero image */}
        <div className="absolute inset-x-0 top-[284px] h-[1691px] bg-[rgba(15,15,15,0.4)]" />
        {/* 5. Dark vignette image + radial shade */}
        <Image
          src="/hero/mobile/design-overlay-a.png"
          alt=""
          width={941}
          height={1672}
          className="absolute left-[-91.23%] top-[-8.54px] h-[1962px] w-[282.86%] max-w-none"
        />
        <img
          src="/hero/mobile/design-overlay-b.svg"
          alt=""
          className="absolute left-[-315px] top-0 block max-w-none"
        />
      </div>

      {/* ======================================================
          CONTENT COLUMN — 20px side padding (350px at 390 wide)
          ====================================================== */}
      <div className="relative z-10 flex flex-col gap-[13px] px-5">
        {/* ---------- Badge, hero photo with headline, intro paragraph ---------- */}
        <div className="flex flex-col gap-[12px]">
          <div className="-mx-5 flex flex-col gap-[23px]">
            {/* Badge */}
            <p className={`${inter.className} ml-5 flex h-[24px] max-w-[calc(100%-40px)] w-fit items-center gap-2 rounded-full border border-solid border-white/20 px-3 text-[10px] font-medium leading-[normal] text-white`}>
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-[#e40015]" />
              Industrial Factory Construction &amp; Expansion Company
            </p>

            {/* Hero photo (full width) with the two-line headline over its lower half */}
            <div className="relative h-[219px] overflow-hidden bg-[#060606]">
              <Image
                src="/hero/mobile/design-banner.png"
                alt=""
                width={1672}
                height={941}
                sizes="390px"
                loading="eager"
                fetchPriority="high"
                className="absolute bottom-[-1px] left-0 h-auto w-full max-w-none"
              />
              <div className="absolute bottom-px left-0 h-[108px] w-full bg-[linear-gradient(182.77deg,rgba(30,30,30,0)_1.0095%,#1e1e1e_99.312%)]" />
              <h1>
                <span className="absolute left-5 top-[166px] block w-[calc(100%-40px)] -translate-y-1/2 text-[22px] font-bold leading-[normal] text-white">
                  Build Factory. Design to Delivery
                </span>
                <span className="absolute left-[-1px] top-[185px] block bg-[#c4161c] py-px pl-5 pr-2 text-[16px] font-bold leading-[normal] text-white">
                  Construction &amp; Expansion
                </span>
              </h1>
            </div>
          </div>

          <div className="w-full text-[14px] font-normal leading-[normal] text-[#a9a9a9]">
            <p><span className="font-bold text-[#ed1d23]">MEKARK</span> - Builds Every Structure You Want.</p>
            <p>All kinds of Industrial, Factory Construction &amp; Expansion projects – <span className="font-bold text-white">ALL INDIA</span></p>
          </div>
        </div>

        {/* ---------- Feature list (red chevrons) ---------- */}
        <div className="flex flex-col gap-[6px]">
          <p className="text-[14px] font-bold leading-[normal] text-[#f3f3f3]">
            In-House PEB Manufacturing - Civil - PEB – MEP - Turnkey EPC.
          </p>
        <ul className="flex flex-col gap-[6px]">
          {FEATURES.map((feature, index) => (
            <li key={feature} className="flex items-center gap-2 rounded-[12px] px-3">
              <img
                src="/hero/mobile/design-chevron.svg"
                alt=""
                width={15}
                height={15}
                className="block shrink-0"
              />
              <span
                className={`min-w-0 whitespace-pre-wrap text-[12px] font-normal leading-[20px] text-[#b5b5b5] ${index === 0 ? "w-[315px] shrink-0 max-[389px]:flex-1" : index === 4 ? "w-[282px] max-[389px]:flex-1" : "flex-1"}`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
        </div>

        {/* ---------- "Trusted Across India" logo card ---------- */}
        <div className="flex flex-col gap-4 rounded-[10px] bg-[linear-gradient(175.66deg,rgb(8,9,10)_1.2889%,rgb(101,69,40)_91.175%)] px-4 py-6">
          <p className="whitespace-nowrap text-[14px] font-semibold uppercase leading-[20px] text-[#ed1d23]">
            Trusted Across India
          </p>
          {/* One row always: tiles are 64px wide (Figma) but shrink on narrow phones such as the
              iPhone SE, and the gap tightens below 380px so all four logos still fit. */}
          <div className="flex w-full flex-nowrap items-start gap-x-[18px] max-[379px]:gap-x-2">
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex h-[40px] min-w-0 max-w-[64px] flex-1 basis-0 items-center justify-center overflow-hidden rounded-[6px] bg-[#f9f6f7]"
              >
                {logo.name === "Tata" ? (
                  <span className="relative size-8 shrink-0 overflow-hidden">
                    <img src={logo.src} alt={logo.name} className="absolute left-[-100%] top-[-69.9%] h-[301.97%] w-[300%] max-w-none" />
                  </span>
                ) : <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.w}
                  height={logo.h}
                  className="block shrink-0 object-cover"
                  style={{ width: logo.w, height: logo.h }}
                />}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- "Built at scale" stats: 2 × 2 cards ---------- */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-[14px]">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex h-[75px] flex-col justify-center gap-1 whitespace-nowrap rounded-[10px] border border-solid border-white/[0.08] bg-[#1a1a1a] px-5"
            >
              <p className="text-[24px] max-[379px]:text-[20px] font-extrabold leading-[normal] text-white">
                {stat.value}
                <span style={{ color: stat.suffixColor }}>{stat.suffix}</span>
              </p>
              <p className="text-[10px] font-semibold uppercase leading-[normal] text-[#9a9a9a]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- Enquiry form card + WhatsApp / Call buttons ---------- */}
        <div className="flex flex-col gap-4 px-4 py-6">
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="flex flex-col items-center gap-4 rounded-[24px] bg-[rgba(255,255,255,0.01)] px-5 py-6 shadow-[0px_26.43px_88.09px_0px_rgba(0,0,0,0.06)] backdrop-blur-[15px]"
          >
            {/* Header */}
            <div className="flex w-full flex-col gap-[6px] text-white">
              <h2 className="text-[24px] font-extrabold leading-[33px]">
                Request Your Project Blueprint
              </h2>
              <p className="text-[14px] font-medium leading-[19px]">
                Get a custom layout, cost range &amp; 150-day* timeline
              </p>
            </div>

            {/* Fields: placeholders only, as in the design */}
            <div className="flex w-full flex-col gap-3">
              <div>
                <input
                  name="name"
                  type="text"
                  aria-label="Full name"
                  placeholder="Enter Your name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  className={`${FIELD_CLASS} px-[18px] ${invalid("name")}`}
                />
                {errors.name ? <p className={ERROR_CLASS}>{errors.name}</p> : null}
              </div>

              <div>
                <input
                  name="projectLocation"
                  type="text"
                  aria-label="Project location"
                  placeholder="Enter Project Location"
                  value={values.projectLocation}
                  onChange={handleChange}
                  className={`${FIELD_CLASS} px-[22px]`}
                />
              </div>

              <div>
                <input
                  name="phoneNumber"
                  type="tel"
                  inputMode="tel"
                  maxLength={10}
                  aria-label="Mobile number"
                  placeholder="Mobile Number*"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phoneNumber)}
                  className={`${FIELD_CLASS} px-[18px] ${invalid("phoneNumber")}`}
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
                  className={`${FIELD_CLASS} px-[18px] ${invalid("email")}`}
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
                    className={`${FIELD_CLASS} cursor-pointer appearance-none pl-[22px] pr-[34px] ${selectTone("industryType")} ${invalid("industryType")}`}
                  >
                    <option value="" disabled>
                      Select your Industry type
                    </option>
                    {INDUSTRY_TYPES.map((option) => (
                      <option key={option} value={option} className="text-[#18181b]">
                        {option}
                      </option>
                    ))}
                  </select>
                  <img
                    src="/hero/mobile/design-select-arrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="pointer-events-none absolute right-[22px] top-1/2 block -translate-y-1/2 rotate-90"
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
                    className={`${FIELD_CLASS} cursor-pointer appearance-none pl-[22px] pr-[34px] ${selectTone("sqft")} ${invalid("sqft")}`}
                  >
                    <option value="" disabled>
                      Select Sq.ft Requirement
                    </option>
                    {SQFT_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-[#18181b]">
                        {option}
                      </option>
                    ))}
                  </select>
                  <img
                    src="/hero/mobile/design-select-arrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="pointer-events-none absolute right-[22px] top-1/2 block -translate-y-1/2 rotate-90"
                  />
                </div>
                {errors.sqft ? <p className={ERROR_CLASS}>{errors.sqft}</p> : null}
              </div>

              <div>
                <textarea
                  name="requirements"
                  rows={1}
                  aria-label="Requirement details"
                  placeholder="Enter Requirement Details"
                  value={values.requirements}
                  onChange={handleChange}
                  className={`${FIELD_CLASS} resize-none px-[22px] py-[13px]`}
                />
              </div>
            </div>

            {/* Submit + reassurance note */}
            <div className="flex w-full flex-col items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-[10px] bg-[#c4161c] px-6 py-[13px] text-center text-[14px] font-bold leading-[19px] text-[#f5f5f5] drop-shadow-[0px_8.81px_17.62px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#ad1318] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? "Submitting..." : "Get a Free Quote →"}
              </button>
              <p className="w-full text-center text-[12px] font-medium leading-[normal] text-[#c1c1c1]">
                100% Transparent Consultation with single point project support
              </p>
              {submitError ? (
                <p role="alert" className="text-center text-[12px] text-[#ff8a8a]">
                  {submitError}
                </p>
              ) : null}
            </div>
          </form>

          {/* WhatsApp + Call Now pills */}
          <div className="flex w-[311px] max-w-full items-start justify-center gap-[14px]">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[140px] items-center justify-center gap-2 rounded-full bg-white px-5 py-[14px] text-[14px] font-bold leading-[20px] text-[#e5091f]"
            >
              WhatsApp
              <span className="relative block size-[18px] shrink-0 overflow-hidden">
                <span
                  className="absolute inset-y-0 left-0 right-[0.48%] [mask-repeat:no-repeat] [mask-size:18px_18px]"
                  style={{ maskImage: "url(/hero/mobile/design-whatsapp-mask.svg)" }}
                >
                  <img
                    src="/hero/mobile/design-whatsapp.svg"
                    alt=""
                    className="absolute inset-0 block max-w-none"
                  />
                </span>
              </span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex w-[140px] items-center justify-center gap-2 rounded-full border border-solid border-white px-5 py-[14px] text-[14px] font-bold leading-[20px] text-white"
            >
              Call Now
              <img
                src="/hero/mobile/design-phone-call.svg"
                alt=""
                width={18}
                height={18}
                className="block shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
