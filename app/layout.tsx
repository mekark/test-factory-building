import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import DeferredGoogleTagManager from "../components/DeferredGoogleTagManager";
import MobileZoom from "../components/MobileZoom";
import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Industrial Factory Construction & Expansion Company",
  description:
    "Leading Industrial Factory Construction & Expansion Company – Turnkey EPC expertise in In House PEB Manufacturing, Civil, PEB, MEP and Seamless Execution servicing the needs of Industrial factory Building Contractor & Industrial Factory Building Expansion Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} relative overflow-x-hidden font-sans antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MobileZoom />
        <div className="relative">{children}</div>
        {/* Loads GTM after the first interaction (or a 5s fallback); immediately on /thank-you */}
        <DeferredGoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
