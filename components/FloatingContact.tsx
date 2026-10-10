import { PHONE_NUMBER, WHATSAPP_HREF } from "../lib/contact";

/* ============================================================
   FLOATING CONTACT BUTTONS
   "Call us" and "WhatsApp us" round buttons pinned to the bottom-right of the
   viewport. A tooltip slides out to the left on hover / keyboard focus.
   ============================================================ */

const BUTTON =
  "group relative inline-flex size-[52px] items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-105 focus-visible:scale-105 focus-visible:outline-none sm:size-14";

const TOOLTIP =
  "pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-md bg-[#0f172a] px-3 py-1.5 text-[13px] font-semibold leading-none text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-transparent after:border-l-[#0f172a]";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col gap-3 font-sans sm:bottom-6 sm:right-6">
      {/* Call us */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        className={`${BUTTON} bg-[#c4161c] shadow-[0_14px_30px_-12px_rgba(196,22,28,0.8)]`}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        <span role="tooltip" className={TOOLTIP}>
          Call us
        </span>
      </a>

      {/* WhatsApp us */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className={`${BUTTON} bg-[#25d366] shadow-[0_14px_30px_-12px_rgba(37,211,102,0.8)]`}
      >
        <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01s-.47.07-.71.34c-.24.27-.93.91-.93 2.22s.96 2.58 1.09 2.76c.14.18 1.89 2.88 4.57 4.03.64.27 1.14.43 1.53.55.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.24-.18-.51-.32Z" />
          <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.57-1.68a12.75 12.75 0 0 0 6.24 1.61h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.7 12.7 0 0 0 16.01 3.2Zm0 23.37h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1 1.04-3.8-.25-.39a10.63 10.63 0 1 1 8.91 4.9Z" />
        </svg>
        <span role="tooltip" className={TOOLTIP}>
          WhatsApp us
        </span>
      </a>
    </div>
  );
}
