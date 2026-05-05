import Navbar from "../components/Navbar";
import IndustrialServicesUnified from "../components/IndustrialServicesUnified";
import IndustriesShowcase from "../components/IndustriesShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyTopIndustries from "../components/WhyTopIndustries";
import FinalProjectCTA from "../components/FinalProjectCTA";
import ContactConversionSection from "../components/ContactConversionSection";
import FAQ from "../components/FAQ";
import ProcessTimeline from "../components/ProcessTimeline";
import PremiumFooter from "../components/PremiumFooter";
import TestimonialsSpotlight from "../components/TestimonialsSpotlight";
import ClientLogos from "../components/ClientLogos";
import AboutMekark from "../components/AboutMekark";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#18181B]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:min-h-screen sm:pt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_38%]"
        >
          <source src="/hero/hero-video-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(9,9,11,0.9)_0%,rgba(9,9,11,0.84)_28%,rgba(9,9,11,0.58)_54%,rgba(9,9,11,0.24)_78%,rgba(9,9,11,0.22)_100%)] sm:bg-[linear-gradient(90deg,rgba(9,9,11,0.96)_0%,rgba(9,9,11,0.92)_32%,rgba(9,9,11,0.8)_48%,rgba(9,9,11,0.54)_66%,rgba(9,9,11,0.34)_82%,rgba(9,9,11,0.28)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(196,22,28,0.18),transparent_34%),linear-gradient(180deg,rgba(9,9,11,0.28)_0%,rgba(9,9,11,0.08)_46%,rgba(9,9,11,0)_72%)] sm:inset-y-0 sm:left-0 sm:right-auto sm:w-2/3 sm:bg-[radial-gradient(circle_at_top_left,rgba(196,22,28,0.18),transparent_34%),linear-gradient(90deg,rgba(9,9,11,0.56)_0%,rgba(9,9,11,0.3)_48%,rgba(9,9,11,0)_68%)] lg:w-3/5 xl:w-1/2" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(9,9,11,0.78),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(196,22,28,0.12),transparent_22%)] sm:bg-[radial-gradient(circle_at_bottom_right,rgba(9,9,11,0.9),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(196,22,28,0.1),transparent_18%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-1/3 bg-[linear-gradient(90deg,rgba(9,9,11,0)_0%,rgba(9,9,11,0.18)_24%,rgba(9,9,11,0.56)_62%,rgba(9,9,11,0.82)_100%)] lg:block" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-[linear-gradient(180deg,transparent,rgba(9,9,11,0.82))]" />

        <div className="relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 px-4 pb-10 sm:px-6 sm:pb-14 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="flex min-w-0 flex-col items-center justify-center py-8 text-center sm:items-start sm:text-left lg:max-w-2xl lg:py-12">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#C4161C]">
              Industrial Execution Partner
            </div>
            <h1 className="hero-heading mt-5 text-balance drop-shadow-[0_14px_40px_rgba(9,9,11,0.46)]">
              <span className="hero-heading-line text-[clamp(2rem,6.4vw,4.45rem)] leading-[1]">
                <span className="hero-heading-brand inline-block !text-[#C4161C] normal-case tracking-[0.02em]">
                  Turnkey
                </span>{" "}
                <span className="hero-heading-main inline-block !text-[#C4161C]">
                  EPC Industrial Construction Solutions
                </span>
              </span>
              <span className="hero-heading-line mt-2 text-[clamp(2.08rem,6.7vw,4.65rem)] leading-[0.98]">
                <span className="hero-heading-main !font-medium">
                  for Modern Manufacturing Facilities
                </span>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[0.96rem] leading-7 text-white/84 md:text-[1rem] md:leading-8">
              <span className="font-oswald tracking-[0.04em]">
                Factory Construction
              </span>{" "}
              &amp;{" "}
              <span className="font-oswald tracking-[0.04em]">
                Industrial Plant Builders
              </span>
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#contact"
                className="inline-flex w-full max-w-[19rem] items-center justify-center rounded-full bg-[#C4161C] px-7 py-3.5 text-[0.96rem] font-bold text-white shadow-lg transition-colors duration-300 hover:bg-[#C4161C] hover:shadow-xl sm:w-auto sm:max-w-none sm:px-9 sm:text-base"
              >
                Get Free Project Consultation
              </a>
              <a
                href="tel:9790924754"
                className="inline-flex w-full max-w-[19rem] items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 py-3.5 text-[0.96rem] font-semibold text-white shadow-[0_16px_34px_rgba(9,9,11,0.18)] backdrop-blur-[2px] transition-colors duration-300 hover:bg-white hover:text-[#09090B] sm:w-auto sm:max-w-none sm:px-8 sm:text-base"
              >
                Call Now: 97909 24754
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      <ClientLogos />

      <AboutMekark />

      <IndustrialServicesUnified />

      <IndustriesShowcase />

      <ProcessTimeline />

      <WhyChooseUs />

      <WhyTopIndustries />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#18181B] mb-8">
            Our Factories
          </h2>
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <img
                src="/factories/lct/lct1.jpg"
                alt="Factory 1"
                className="w-64 h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/factories/lct/lct2.jpg"
                alt="Factory 2"
                className="w-64 h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/factories/lct/lct3.jpg"
                alt="Factory 3"
                className="w-64 h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/factories/lct/lct4.jpg"
                alt="Factory 4"
                className="w-64 h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <img
                src="/factories/lct/lct5.jpg"
                alt="Factory 5"
                className="w-64 h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/factories/lct/lct6.jpg"
                alt="Factory 6"
                className="w-64 h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/factories/lct/lct7.jpg"
                alt="Factory 7"
                className="w-64 h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSpotlight />

      {/* FAQ */}
      <FAQ />

      <FinalProjectCTA />

      <ContactConversionSection />

      <PremiumFooter />
    </div>
  );
}
