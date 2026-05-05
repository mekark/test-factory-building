"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does an industrial construction company provide?",
    a: "An industrial construction company delivers design, civil works, fabrication, and turnkey industrial building construction.",
  },
  {
    q: "Do you work as industrial construction contractors in Chennai?",
    a: "Yes, we are industrial construction contractors in Chennai delivering complete industrial construction services and execution.",
  },
  {
    q: "Are you industrial EPC contractors?",
    a: "Yes, we operate as industrial EPC contractors managing engineering, procurement, and construction end-to-end.",
  },
  {
    q: "Do you handle both industrial civil and structural construction?",
    a: "Yes, as industrial civil contractors and steel specialists, we provide integrated civil and structural execution.",
  },
  {
    q: "Do you work as industrial building contractors for large projects?",
    a: "Yes, we are industrial building contractors executing large-scale industrial building construction projects across sectors.",
  },
  {
    q: "Do you provide industrial roofing and shed construction services?",
    a: "Yes, we are industrial roofing contractors and industrial shed contractors delivering durable industrial shed construction.",
  },
  {
    q: "Do you offer factory building construction and turnkey factory construction?",
    a: "Yes, we are factory building contractors providing turnkey factory construction and prefab factory construction solutions.",
  },
  {
    q: "Are you PEB factory manufacturers and structural steel factory builders?",
    a: "Yes, we are PEB factory manufacturers and structural steel factory builders delivering pre engineered factory buildings.",
  },
  {
    q: "Can you handle large-scale factory construction projects?",
    a: "Yes, we execute large scale factory construction including metal factory buildings with optimized design and fast delivery.",
  },
  {
    q: "Do you provide factory renovation and expansion services?",
    a: "Yes, we handle factory renovation, upgrades, and multi story factory building expansion projects.",
  },
  {
    q: "Why choose Mekark as your industrial construction company?",
    a: "Mekark is an industrial construction company with 3000+ MT capacity, advanced machinery, and end-to-end execution.",
  },
  {
    q: "What is the Mekark advantage in factory building projects?",
    a: "The Mekark advantage includes automated fabrication, precision engineering, and reliable turnkey factory construction.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#18181B]">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#C4161C] mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                  isOpen 
                    ? 'border-[#C4161C] bg-[#FAFAFA] shadow-[#C4161C]/10' 
                    : 'border-[#E4E4E7] bg-[#FAFAFA]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-6 sm:p-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#C4161C]' : 'text-[#18181B]'}`}>
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                    className="flex-shrink-0 ml-4 sm:ml-6"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#C4161C]/10' : 'bg-[#F4F4F5]'}`}>
                      <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#C4161C]' : 'text-[#C4161C]/70'}`} />
                    </div>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 sm:px-8 pb-8 text-[#52525B] leading-relaxed text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
