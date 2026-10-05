import Image from "next/image";

/* ============================================================
   MOBILE FACTORY ADVANTAGE (Figma "Why Top Industries Choose Mekark", 390 × 736)
   Shown below 1280px only; the desktop section is untouched.
   ============================================================ */

// Five check points. `width` is the fixed text-box width from Figma, which
// decides where each label wraps onto its second line.
const POINTS = [
  { label: "3000+ MT High-Capacity Fabrication", width: 220 },
  { label: "Fully Automated Steel Production", width: 183 },
  { label: "Advanced CNC-Based Precision Engineering", width: 203 },
  { label: "ISO-Certified Quality Systems", width: 197 },
  { label: "30–40% Faster Project Delivery", width: 214 },
] as const;

export default function FactoryAdvantageMobile() {
  return (
    /* ==========================================================
       MOBILE FRAME — one 390px column
       ========================================================== */
    <div className="mx-auto w-full max-w-[390px] bg-[#f9f6f7] font-sans xl:hidden">
      {/* ---------- Photo banner: the left 390px of the wide factory photo ---------- */}
      <div className="relative h-[249px] w-full overflow-hidden">
        <Image
          src="/advantage/background.webp"
          alt="Mekark factory under construction with a billboard reading: we build factories, you build future"
          width={1440}
          height={649}
          sizes="583px"
          className="pointer-events-none absolute left-0 top-[-13px] h-[262px] w-[583px] max-w-none object-cover"
        />
      </div>

      {/* ---------- Copy panel: white fading into brand red ---------- */}
      <div className="flex flex-col items-center gap-[10px] bg-[linear-gradient(180deg,#fffdfd_6.034%,#e60f1a_47.028%)] px-5 pb-[30px] pt-5">
        {/* Heading + sub-heading */}
        <div className="flex w-full flex-col items-start gap-3">
          {/* Figma trims the heading's text box to cap height (about 7px off top and bottom) */}
          <h2 className="-mb-[6px] -mt-[8px] w-full text-[28px] font-bold leading-[34px] text-[#030303]">
            Why Industries Choose Mekark for Their Factory Buildings
          </h2>
          <p className="w-full text-[14px] font-normal leading-[normal] text-[#424242]">
            Leading the industrial construction sector with unmatched capacity
            and precision.
          </p>
        </div>

        {/* Points: a thin rose rule between rows, none after the last */}
        <ul className="flex w-full flex-col gap-px">
          {POINTS.map((point, index) => {
            const isLast = index === POINTS.length - 1;
            return (
              <li
                key={point.label}
                className={`flex w-full items-center gap-[14px] pt-[10px] pb-[10px] ${isLast ? "" : "border-b border-solid border-[#e58282]"}`}
              >
                {/* First row's icon sits in a taller 36.67px box in Figma (5px padding) */}
                <span className={`flex shrink-0 items-center ${index === 0 ? "py-[5px]" : ""}`}>
                  <img
                    src="/advantage/check.svg"
                    alt=""
                    width={26.667}
                    height={26.667}
                    className="block size-[26.667px] max-w-none"
                  />
                </span>
                <span
                  className="min-w-0 text-[16px] font-medium leading-[18px] text-white"
                  style={{ width: point.width, maxWidth: "calc(100% - 40.667px)" }}
                >
                  {point.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
