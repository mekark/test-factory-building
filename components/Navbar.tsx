"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ============================================================
   NAV BAR (Figma "Hero" nav, 1920 × 80)
   Logo on the left, red "Get Free Quote" button on the right.
   Mobile: solid black bar, sticky in the page flow.
   Desktop (1280px+): fixed over the hero and transparent at the top of the
   page, then turns solid black once the page is scrolled.
   ============================================================ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#060606] font-sans transition-[background-color,box-shadow] duration-300 xl:fixed xl:inset-x-0 ${
        scrolled
          ? "xl:bg-[#060606] xl:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          : "xl:bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-3 sm:px-8 xl:px-[80px] xl:py-[17px]">
        {/* Logo: 132 × 46 on desktop */}
        <a href="#" aria-label="Mekark home" className="block">
          <Image
            src="/nav/logo.webp"
            alt="Mekark"
            width={132}
            height={46}
            priority
            className="h-[34px] w-auto xl:h-[46px]"
          />
        </a>

        {/* CTA: jumps to the enquiry form at the bottom of the page */}
        <a
          href="#contact"
          className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#c4161c] px-4 py-[8px] text-[14px] font-semibold leading-[normal] text-[#f5f5f5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#ad1318] xl:px-[24px] xl:py-[10px] xl:text-[16px]"
        >
          Get Free Quote
        </a>
      </nav>
    </header>
  );
}
