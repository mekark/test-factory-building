import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";
const GTM_DELAY_MS = 5000; // wait 5 seconds before loading Google Tag Manager

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Mekark Structures Pvt. Ltd.",
  description:
    "Mekark delivers industrial construction solutions for factories, plant infrastructure, utility systems, and manufacturing facilities.",
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
        <div className="relative">{children}</div>
        {/* Google Tag Manager: the dataLayer is created straight away (so early events are
            queued), but gtm.js itself is only requested GTM_DELAY_MS after the page loads,
            keeping it off the critical path. */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];
setTimeout(function(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');},${GTM_DELAY_MS});`}
        </Script>
      </body>
    </html>
  );
}
