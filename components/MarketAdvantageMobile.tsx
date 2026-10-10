/* ============================================================
   MOBILE MARKET ADVANTAGE (Figma "why-choose-mekark-editorial", 390 × 730)
   Shown below 1280px only; the desktop bento grid is untouched.
   ============================================================ */

// Five numbered features. Numbers alternate red / light grey, as in the design.
const FEATURES = [
  {
    number: "01",
    numberColor: "#e53935",
    title: "3000+ MT High-Capacity Fabrication",
    description:
      "One of the highest production capacities in the region for massive scale industrial demands.",
  },
  {
    number: "02",
    numberColor: "#cccccc",
    title: "Fully Automated Steel Production",
    description:
      "Latest automation technology ensuring consistency and eliminates human error.",
  },
  {
    number: "03",
    numberColor: "#e53935",
    title: "Advanced CNC-Based Precision Engineering",
    description: "High-accuracy fabrication for complex structural components.",
  },
  {
    number: "04",
    numberColor: "#cccccc",
    title: "ISO-Certified Quality Systems",
    description:
      "Rigorous quality protocols ensuring durability and safety compliance.",
  },
  {
    number: "05",
    numberColor: "#e53935",
    title: "30–40% Faster Project Delivery",
    description:
      "Optimized workflows and in-house execution for rapid facility handover.",
  },
] as const;

export default function MarketAdvantageMobile() {
  return (
    /* ==========================================================
       MOBILE FRAME — full-width #0a0a0a with one 390px column
       ========================================================== */
    <div className="bg-[#0a0a0a] font-sans xl:hidden">
      <div className="mobile-col flex flex-col items-start gap-[6px] p-5 [word-break:break-word]">
        {/* ---------- Heading + sub-heading ---------- */}
        <div className="flex w-[342px] max-w-full flex-col items-start gap-3">
          <h2 className="w-full text-[28px] font-extrabold leading-[34px] text-white">
            Why Top Industries <span className="text-[#e53935]">Choose Mekark</span>
          </h2>
          <p className="w-full text-[14px] font-normal leading-[20px] text-[#888888]">
            India’s Leading PEB manufacturer &amp; Constructor.
          </p>
        </div>

        {/* ---------- Numbered list: hairline between rows and after the last ---------- */}
        <ol className="flex w-[342px] max-w-full flex-col items-start">
          {FEATURES.map((feature) => (
            <li
              key={feature.number}
              className="flex w-full items-start gap-[10px] border-b border-solid border-white/10 pb-[15px] pt-[16px]"
            >
              {/* Big number */}
              <span
                className="w-[50px] shrink-0 text-[26px] font-extrabold leading-[25px]"
                style={{ color: feature.numberColor }}
              >
                {feature.number}
              </span>

              {/* Title + description */}
              <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-[10px]">
                <h3 className="w-full text-[18px] font-bold leading-[22px] text-[#f5f5f5]">
                  {feature.title}
                </h3>
                <p className="w-full text-[14px] font-normal leading-[18px] text-[#64748b]">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
