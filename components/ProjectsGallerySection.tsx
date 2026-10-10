"use client";

import Image from "next/image";
import { CSSProperties, useRef } from "react";
import ProjectsGalleryMobile from "./ProjectsGalleryMobile";
import { useCanvasZoom } from "./useCanvasZoom";

/* ============================================================
   GALLERY TILES
   x/y/w/h place each tile on the 1920×1816 desktop canvas (a 2×3 grid, 25px
   gap). `crop` is Figma's custom image placement inside the tile; `radius`
   rounds only the grid's outer corners. Below 1280px the tiles flow into a
   2-column grid and these values are ignored.
   ============================================================ */

type Tile = {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  radius: string;
  crop?: { left: string; top: string; width: string; height: string };
};

const TILES: Tile[] = [
  {
    id: "a",
    src: "/projects/gallery-1.webp",
    alt: "Modern industrial warehouse with a louvred glass facade beside a truck yard",
    x: 80, y: 248.3, w: 867.5, h: 488.5,
    radius: "xl:rounded-tl-[32px]",
    crop: { left: "0.02%", top: "0%", width: "101.65%", height: "101.74%" },
  },
  {
    id: "b",
    src: "/projects/gallery-2.webp",
    alt: "Aerial view of a large white warehouse with loading docks",
    x: 972.5, y: 248.3, w: 867.5, h: 488.5,
    radius: "xl:rounded-tr-[32px]",
    crop: { left: "-5.01%", top: "-2.5%", width: "104.97%", height: "104.97%" },
  },
  {
    id: "c",
    src: "/projects/gallery-3.webp",
    alt: "Industrial warehouse with a brown and glass entrance facade",
    x: 80, y: 761.8, w: 867.5, h: 488.5,
    radius: "",
    crop: { left: "-11.16%", top: "-2.25%", width: "119.17%", height: "119.15%" },
  },
  {
    id: "d",
    src: "/projects/gallery-4.webp",
    alt: "Blue steel warehouse on an industrial estate",
    x: 972.5, y: 761.8, w: 867.5, h: 488.5,
    radius: "",
  },
  {
    id: "e",
    src: "/projects/gallery-5.webp",
    alt: "Large white industrial shed with landscaped surroundings seen from above",
    x: 80, y: 1275.3, w: 867.5, h: 488.5,
    radius: "xl:rounded-bl-[32px]",
    crop: { left: "-3.05%", top: "-16.65%", width: "116.44%", height: "116.64%" },
  },
  {
    id: "f",
    src: "/projects/gallery-6.webp",
    alt: "White and blue industrial warehouse with loading docks and a delivery truck",
    x: 972.5, y: 1275.3, w: 867.5, h: 488.5,
    radius: "xl:rounded-br-[32px]",
    crop: { left: "-10.82%", top: "-10.66%", width: "110.81%", height: "110.75%" },
  },
];

/* ============================================================
   PROJECTS GALLERY SECTION
   ============================================================ */

export default function ProjectsGallerySection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useCanvasZoom(canvasRef);

  return (
    /* ==========================================================
       SECTION WRAPPER — full-bleed #f9f6f7, 1920×1446 design canvas
       ========================================================== */
    <section className="overflow-hidden bg-[#f9f6f7] font-sans">
      {/* ---------- Mobile / tablet layout (below 1280px): separate component, see ProjectsGalleryMobile.tsx ---------- */}
      <ProjectsGalleryMobile />

      {/* ---------- Desktop layout (1280px and up): unchanged ---------- */}
      <div className="hidden xl:block">
        {/* ---------- Design canvas (zoomed to the viewport on desktop) ---------- */}
        <div
          ref={canvasRef}
          className="canvas-zoom relative mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 xl:h-[1816px] xl:w-[1920px] xl:p-0"
        >
          {/* ======================================================
              HEADING — eyebrow, two-tone title, sub-heading
              ====================================================== */}
          <div className="relative flex flex-col items-start gap-[14px] xl:absolute xl:left-[80px] xl:top-[52px] xl:w-[648px]">
            <div className="flex w-full flex-col items-start gap-[13px] font-bold xl:w-[509px]">
              <p className="w-full text-[13px] font-bold uppercase leading-[21.304px] tracking-[1.5978px] text-[#ed1d23] xl:text-[16px]">
                our work
              </p>
              <h2 className="w-full text-[40px] font-bold leading-[1.1] text-[#0f172a] sm:text-[54px] xl:text-[66px] xl:leading-[60px]">
                Projects <span className="text-[#ed1d23]">Gallery</span>
              </h2>
            </div>
            <p className="w-full text-[18px] font-medium leading-[28px] text-[#64748b] xl:text-[24px] xl:leading-[36px]">
               Our Completed Projects.
            </p>
          </div>

          {/* ======================================================
              PHOTO GRID — six tiles (3 rows × 2), rounded only on the outer corners
              ====================================================== */}
          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:gap-4 xl:mt-0 xl:block">
            {TILES.map((tile) => {
              // Desktop geometry is passed through CSS variables (read by the xl: classes).
              const vars = {
                "--x": `${tile.x}px`,
                "--y": `${tile.y}px`,
                "--w": `${tile.w}px`,
                "--h": `${tile.h}px`,
                ...(tile.crop && {
                  "--cl": tile.crop.left,
                  "--ct": tile.crop.top,
                  "--cw": tile.crop.width,
                  "--ch": tile.crop.height,
                }),
              } as CSSProperties;

              return (
                <div
                  key={tile.id}
                  style={vars}
                  className={`relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#d9d9d9] xl:absolute xl:left-[var(--x)] xl:top-[var(--y)] xl:aspect-auto xl:h-[var(--h)] xl:w-[var(--w)] xl:rounded-none ${tile.radius}`}
                >
                  {tile.crop ? (
                    // Cropped tiles: the photo is placed and stretched exactly as in Figma on desktop
                    <div className="absolute inset-0 xl:inset-auto xl:left-[var(--cl)] xl:top-[var(--ct)] xl:h-[var(--ch)] xl:w-[var(--cw)]">
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes="(min-width: 1280px) 900px, 100vw"
                        className="object-cover xl:object-fill"
                      />
                    </div>
                  ) : (
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      sizes="(min-width: 1280px) 720px, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
