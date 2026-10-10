"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const FALLBACK_DELAY_MS = 5000;
const INTERACTION_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

/**
 * Loads GTM after the first user interaction (or a fallback delay once the page
 * has loaded) so GTM and the tags it fires stay out of the initial main-thread
 * work. The thank-you page loads GTM immediately so conversions always fire.
 */
export default function DeferredGoogleTagManager({ gtmId }: { gtmId: string }) {
  const pathname = usePathname();
  const loadImmediately = pathname.startsWith("/thank-you");

  useEffect(() => {
    let loaded = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("load", onLoad);
      INTERACTION_EVENTS.forEach((evt) => window.removeEventListener(evt, load));
    };

    const load = () => {
      if (loaded) return;
      loaded = true;
      cleanup();

      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
      document.head.appendChild(script);
    };

    function onLoad() {
      timer = setTimeout(load, FALLBACK_DELAY_MS);
    }

    if (loadImmediately) {
      load();
      return cleanup;
    }

    INTERACTION_EVENTS.forEach((evt) =>
      window.addEventListener(evt, load, { once: true, passive: true }),
    );

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return cleanup;
  }, [gtmId, loadImmediately]);

  return null;
}
