"use client";

import Image from "next/image";
import { CSSProperties, useRef } from "react";
import ProjectsGalleryMobile from "./ProjectsGalleryMobile";
import { useCanvasZoom } from "./useCanvasZoom";

/* ============================================================
   GALLERY TILES
   x/y/w/h place each tile on the 1920×1446 desktop canvas. `crop` is Figma's
   custom image placement inside the tile (only tiles A and C are cropped);
   `radius` rounds only the grid's outer corners. Below 1280px the tiles flow
   into a 2-column grid and these values are ignored.
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
  wide?: boolean; // spans both columns on mobile
};

const TILES: Tile[] = [
  {
    id: "a",
    src: "/projects/tile-a.webp",
    alt: "Green industrial shed with a white roof beside open farmland",
    x: 80, y: 265, w: 569, h: 643,
    radius: "xl:rounded-tl-[33px]",
    crop: { left: "-44.4%", top: "0%", width: "188.45%", height: "100%" },
    wide: true,
  },
  {
    id: "b",
    src: "/projects/tile-b.webp",
    alt: "Aerial view of a pre-engineered steel building under construction",
    x: 1269, y: 762, w: 571, h: 471,
    radius: "xl:rounded-br-[33px]",
  },
  {
    id: "c",
    src: "/projects/tile-c.webp",
    alt: "Large white industrial facility with landscaped grounds",
    x: 80, y: 928, w: 569, h: 305,
    radius: "xl:rounded-bl-[33px]",
    crop: { left: "-0.35%", top: "-6.13%", width: "100.35%", height: "112.26%" },
  },
  {
    id: "d",
    src: "/projects/tile-d.webp",
    alt: "Interior of a completed steel-framed factory hall",
    x: 1121, y: 265, w: 719, h: 477,
    radius: "xl:rounded-tr-[33px]",
  },
  {
    id: "e",
    src: "/projects/tile-e.webp",
    alt: "Steel roof structure of an industrial building under construction",
    x: 673, y: 265, w: 424, h: 477,
    radius: "",
  },
  {
    id: "f",
    src: "/projects/tile-f.webp",
    alt: "Roof framework of a large steel structure seen from above",
    x: 673, y: 762, w: 571, h: 471,
    radius: "",
    wide: true,
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
          className="canvas-zoom relative mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 xl:h-[1446.36px] xl:w-[1920px] xl:p-0"
        >
          {/* ---------- Background: soft red glows in the top-right and bottom-left corners ---------- */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_360px_400px_at_100%_0,rgba(237,32,36,0.32)_0,rgba(237,32,36,0)_60%),radial-gradient(ellipse_400px_440px_at_0_100%,rgba(237,32,36,0.32)_0,rgba(237,32,36,0)_60%)] xl:bg-[radial-gradient(ellipse_927px_997.6px_at_100%_0,rgba(237,32,36,0.32)_0,rgba(237,32,36,0)_60%),radial-gradient(ellipse_989px_1064.7px_at_0_100%,rgba(237,32,36,0.32)_0,rgba(237,32,36,0)_60%)]"
          />

          {/* ======================================================
              HEADING — eyebrow, two-tone title, placeholder sub-heading
              ====================================================== */}
          <div className="relative flex flex-col items-start gap-[14px] xl:absolute xl:left-[80px] xl:top-[70px] xl:w-[648px]">
            <div className="flex w-full flex-col items-start gap-[13px] font-bold xl:w-[509px]">
              <p className="w-full text-[13px] font-bold uppercase leading-[21.304px] tracking-[1.5978px] text-[#ed1d23] xl:text-[16px]">
                our work
              </p>
              <h2 className="w-full text-[40px] font-bold leading-[1.1] text-[#0f172a] sm:text-[54px] xl:text-[66px] xl:leading-[60px]">
                Projects <span className="text-[#ed1d23]">Gallery</span>
              </h2>
            </div>
            {/* Sub-heading: the Figma design only has the placeholder "Text" here */}
            <p className="w-full text-[18px] font-medium leading-[28px] text-[#64748b] xl:text-[24px] xl:leading-[36px]">
              Text
            </p>
          </div>

          {/* ======================================================
              PHOTO GRID — six tiles, rounded only on the outer corners
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
                  className={`relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#d9d9d9] xl:absolute xl:left-[var(--x)] xl:top-[var(--y)] xl:aspect-auto xl:h-[var(--h)] xl:w-[var(--w)] xl:rounded-none ${tile.radius} ${tile.wide ? "col-span-2" : ""}`}
                >
                  {tile.crop ? (
                    // Cropped tiles: the photo is placed and stretched exactly as in Figma on desktop
                    <div className="absolute inset-0 xl:inset-auto xl:left-[var(--cl)] xl:top-[var(--ct)] xl:h-[var(--ch)] xl:w-[var(--cw)]">
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes="(min-width: 1280px) 1100px, 100vw"
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

          {/* ======================================================
              VIEW ALL — red button, centred under the grid
              ====================================================== */}
          <div className="relative mt-8 flex justify-center xl:absolute xl:left-[calc(50%+0.5px)] xl:top-[1303px] xl:mt-0 xl:-translate-x-1/2">
            <a
              href="#projects"
              className="flex items-center justify-center rounded-[8.809px] bg-[#c4161c] px-[32px] py-[16px] text-[20px] font-extrabold leading-[normal] text-[#f5f5f5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#ad1318] xl:px-[50px] xl:py-[20px] xl:text-[24px]"
            >
              View All →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
