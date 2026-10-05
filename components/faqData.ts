/* ============================================================
   FAQ DATA
   Questions and answers are the same as the site's existing FAQ.
   `width` is the fixed question-text width from Figma (it decides where
   long questions wrap on desktop); `align` is how the +/× toggle sits
   against the question when the row is closed; `literal` marks the two rows
   where Figma typed the number into the text instead of using a list marker.
   ============================================================ */

export type Faq = {
  q: string;
  a: string;
  width: number;
  align: "center" | "start";
  literal?: boolean;
};

export const FAQS: Faq[] = [
  {
    q: "What makes Mekark different from other industrial civil construction companies?",
    a: "Mekark is a trusted industrial civil construction company with expertise in industrial building construction, factory development, and infrastructure projects. We focus on engineering precision, transparent execution, and timely project delivery.",
    width: 698.803,
    align: "center",
  },
  {
    q: "Can you handle large-scale factory and industrial construction projects?",
    a: "Yes. As experienced industrial civil contractors and factory construction contractors, we execute manufacturing facilities, warehouses, industrial buildings, and large-scale infrastructure developments across India.",
    width: 841,
    align: "center",
    literal: true,
  },
  {
    q: "Do you provide turnkey factory construction services?",
    a: "Yes. Our turnkey factory construction solutions cover planning, engineering, civil works, project management, and execution, ensuring seamless delivery from concept to handover.",
    width: 815,
    align: "center",
  },
  {
    q: "Do you specialize in manufacturing facility construction?",
    a: "Absolutely. As a leading manufacturing facility construction company, we develop production plants, assembly units, processing facilities, and industrial campuses tailored to operational requirements.",
    width: 817,
    align: "start",
  },
  {
    q: "What types of industrial projects do you undertake?",
    a: "We specialize in industrial facility construction, industrial factory construction, warehouses, utility buildings, commercial-industrial developments, and supporting infrastructure projects.",
    width: 864,
    align: "start",
    literal: true,
  },
  {
    q: "Do you provide industrial infrastructure construction services?",
    a: "Yes. Our industrial infrastructure construction services include site development, internal roads, drainage systems, utility networks, foundations, and factory support infrastructure.",
    width: 796,
    align: "center",
  },
  {
    q: "Why choose Mekark as your industrial turnkey contractor?",
    a: "As experienced industrial turnkey contractors, we provide single-point accountability, efficient project management, quality execution, and predictable outcomes for industrial construction projects.",
    width: 816,
    align: "center",
  },
  {
    q: "Do you undertake factory building construction projects across India?",
    a: "Yes. We deliver factory building construction projects for manufacturers and industrial businesses across Chennai, Tamil Nadu, and major industrial hubs throughout India.",
    width: 815,
    align: "center",
  },
  {
    q: "Do you provide industrial foundation and civil work services?",
    a: "Yes. Our team includes experienced industrial foundation contractors and industrial civil work contractors, delivering foundations, structural works, and critical civil infrastructure for industrial projects.",
    width: 817,
    align: "center",
  },
  {
    q: "Do you provide RCC construction services for industrial buildings?",
    a: "Yes. As established RCC building contractors, RCC construction contractors, and industrial RCC building contractors, we deliver durable reinforced concrete structures for factories, warehouses, and industrial facilities.",
    width: 812,
    align: "center",
  },
];
