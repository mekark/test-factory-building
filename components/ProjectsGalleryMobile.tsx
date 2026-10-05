import Image from "next/image";

/* ============================================================
   MOBILE PROJECTS GALLERY (Figma "Projects gallery", 390 × 1081)
   Shown below 1280px only; the desktop gallery is untouched.
   ============================================================ */

// Two full-width tiles (top and bottom) are cropped exactly as in Figma:
// the photo is placed and stretched inside the tile with these offsets.
const CROP_TOP = { left: "-32.69%", top: "-10.6%", width: "142.13%", height: "135.59%" };
const CROP_BOTTOM = { left: "-17.92%", top: "-19.59%", width: "122.56%", height: "131.24%" };

export default function ProjectsGalleryMobile() {
  return (
    /* ==========================================================
       MOBILE FRAME — full-width #f9f6f7 with one 390px column
       ========================================================== */
    <div className="bg-[#f9f6f7] font-sans xl:hidden">
      <div className="mx-auto flex w-full max-w-[390px] flex-col items-start gap-6 px-5 py-8">
        {/* ---------- Heading block ---------- */}
        <div className="flex w-full flex-col items-start gap-3 [word-break:break-word]">
          <div className="flex w-full flex-col items-start gap-2 font-bold">
            <p className="w-full text-[12px] font-bold uppercase leading-[18px] tracking-[1.5978px] text-[#ed1d23]">
              our work
            </p>
            <h2 className="whitespace-nowrap text-[28px] font-bold leading-[32px] text-[#0f172a]">
              Projects <span className="text-[#ed1d23]">Gallery</span>
            </h2>
          </div>
          <p className="w-[307px] max-w-full text-[14px] font-medium leading-[20px] text-[#64748b]">
            Completed Ware House structures across Tamil Nadu and beyond.
          </p>
        </div>

        {/* ---------- Photo grid: wide, 2 × 2, wide ---------- */}
        <div className="flex w-full flex-col gap-4">
          {/* Wide tile (cropped) */}
          <div className="relative h-[220px] w-full overflow-hidden">
            <div className="absolute" style={CROP_TOP}>
              <Image
                src="/projects/tile-a.webp"
                alt="Green industrial shed with a white roof beside open farmland"
                fill
                sizes="500px"
                className="object-fill"
              />
            </div>
          </div>

          {/* Row 1: two tiles (the left photo is stretched to fill, as in Figma) */}
          <div className="flex w-full gap-3">
            <div className="relative h-[174px] flex-1 overflow-hidden">
              <Image
                src="/projects/mobile/row1-left.webp"
                alt="Aerial view of a completed warehouse with its surrounding site"
                fill
                sizes="170px"
                className="object-fill"
              />
            </div>
            <div className="relative h-[174px] flex-1 overflow-hidden">
              <Image
                src="/projects/mobile/row1-right.webp"
                alt="Modern industrial building with a brown glass entrance"
                fill
                sizes="170px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 2: two tiles (the left photo is stretched to fill, as in Figma) */}
          <div className="flex w-full gap-3">
            <div className="relative h-[174px] flex-1 overflow-hidden">
              <Image
                src="/projects/mobile/row2-left.webp"
                alt="Steel-framed industrial building beside a green hillside"
                fill
                sizes="170px"
                className="object-fill"
              />
            </div>
            <div className="relative h-[174px] flex-1 overflow-hidden">
              <Image
                src="/projects/tile-b.webp"
                alt="Dark steel shed with a work yard in front"
                fill
                sizes="170px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Wide tile (cropped) */}
          <div className="relative h-[196px] w-full overflow-hidden">
            <div className="absolute" style={CROP_BOTTOM}>
              <Image
                src="/projects/tile-c.webp"
                alt="Large white industrial facility with landscaped grounds"
                fill
                sizes="500px"
                className="object-fill"
              />
            </div>
          </div>
        </div>

        {/* ---------- View All button ---------- */}
        <a
          href="#projects"
          className="flex w-full items-center justify-center rounded-[8px] bg-[#c4161c] px-6 py-[14px] text-[14px] font-semibold leading-[normal] text-[#f5f5f5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#ad1318]"
        >
          View All →
        </a>
      </div>
    </div>
  );
}
