import Image from "next/image";

/* ============================================================
   MOBILE PROJECTS GALLERY (Figma "Projects gallery", node 9496:10350)
   Shown below 1280px only; the desktop gallery is untouched.
   ============================================================ */

// Six full-width 180px tiles. `crop` is Figma's custom image placement inside
// the tile (the photo is stretched to these offsets); tile 4 simply covers.
const TILES = [
  {
    src: "/projects/gallery-1.webp",
    alt: "Modern industrial warehouse with a louvred glass facade beside a truck yard",
    crop: { left: "0.07%", top: "-0.25%", width: "102.11%", height: "111.85%" },
  },
  {
    src: "/projects/gallery-2.webp",
    alt: "Aerial view of a large white warehouse with loading docks",
    crop: { left: "-3.71%", top: "-6.74%", width: "103.63%", height: "113.4%" },
  },
  {
    src: "/projects/gallery-3.webp",
    alt: "Industrial warehouse with a brown and glass entrance facade",
    crop: { left: "0.02%", top: "-8.69%", width: "107.7%", height: "117.86%" },
  },
  {
    src: "/projects/gallery-4.webp",
    alt: "Blue steel warehouse on an industrial estate",
  },
  {
    src: "/projects/mobile/gallery-5.webp",
    alt: "Aerial view of a white industrial shed with loading bays and landscaped surroundings",
    crop: { left: "-1.88%", top: "-24.44%", width: "113.58%", height: "124.57%" },
  },
  {
    src: "/projects/mobile/gallery-6.webp",
    alt: "White and blue industrial warehouse with loading docks and a delivery truck",
    crop: { left: "-11.44%", top: "-17.22%", width: "111.54%", height: "122.06%" },
  },
] as const;

export default function ProjectsGalleryMobile() {
  return (
    /* ==========================================================
       MOBILE FRAME — full-width #f9f6f7 with one 390px column
       ========================================================== */
    <div className="bg-[#f9f6f7] font-sans xl:hidden">
      <div className="mobile-col flex flex-col items-start gap-6 px-5 py-8">
        {/* ---------- Heading block ---------- */}
        <div className="flex w-full flex-col items-start gap-4 [word-break:break-word]">
          <div className="flex w-full flex-col items-start gap-[10px] font-bold">
            <p className="w-full text-[12px] font-bold uppercase leading-[18px] tracking-[1.5978px] text-[#ed1d23]">
              our work
            </p>
            <h2 className="whitespace-nowrap text-[28px] font-bold leading-[32px] text-[#0f172a]">
              Projects <span className="text-[#ed1d23]">Gallery</span>
            </h2>
          </div>
          <p className="w-[300px] max-w-full text-[14px] font-normal leading-[normal] text-[#64748b]">
            Completed PEB structures across Tamil Nadu and beyond.
          </p>
        </div>

        {/* ---------- Photo stack: six full-width tiles ---------- */}
        <div className="flex w-full flex-col gap-4">
          {TILES.map((tile) => (
            <div key={tile.src} className="relative h-[180px] w-full overflow-hidden">
              {"crop" in tile ? (
                <div className="absolute" style={tile.crop}>
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="100vw"
                    quality={60}
                    className="object-fill"
                  />
                </div>
              ) : (
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="100vw"
                  quality={60}
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
