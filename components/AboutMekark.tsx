"use client";

import { motion } from "framer-motion";

export default function AboutMekark() {
  return (
    <section
      className="py-24 px-6 bg-zinc-50 border-b border-zinc-100"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C4161C] font-bold tracking-widest uppercase text-[10px] mb-4 block">
              About Mekark
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">
              Leading PEB Company in Chennai
            </h2>
            <div className="space-y-6 text-zinc-600 text-base leading-relaxed font-light">
              <p>
                Mekark is a leading PEB company in Chennai, known for delivering
                high-performance pre-engineered steel buildings for industrial
                and commercial sectors. We operate one of Tamil Nadu’s highest
                production capacity PEB manufacturing facilities, with 3000 tons
                capability and a 6 lakh sq. ft. fully integrated campus.
              </p>
              <p>
                Our ISO-certified and green-certified operations ensure
                consistent quality, compliance, and sustainability across every
                project. Backed by a fully automated factory with the latest
                advanced machinery, Mekark delivers precision-engineered
                components with speed and accuracy.
              </p>
              <p>
                With a 300+ expert white-collar engineering team, we provide
                complete solutions—from design and manufacturing to supply and
                erection—ensuring seamless execution and faster project
                delivery.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-zinc-200">
              <div>
                <p className="text-4xl font-bold text-zinc-900">
                  3000<span className="text-[#C4161C] text-2xl">Tons</span>
                </p>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold mt-1">
                  Monthly Capacity
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-zinc-900">
                  6<span className="text-[#C4161C] text-2xl">Lakh</span>
                </p>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold mt-1">
                  Sq. Ft. Campus
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white"
          >
            <img
              src="/Smart Factory Design & Engineering.jpeg"
              alt="Mekark Manufacturing Facility"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
