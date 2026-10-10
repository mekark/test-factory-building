/* ============================================================
   FAQ DATA
   Questions and answers are the client-supplied FAQ copy (used by both the desktop and mobile FAQ).
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
    a: "Yes. As an industrial factory construction company, we handle large-scale factory and industrial projects with in-house structural engineers, our own PEB manufacturing and experienced site teams. This lets us deliver big plants, multi-bay factory sheds and factory expansion projects on schedule and within budget.",
    width: 841,
    align: "center",
    literal: true,
  },
  {
    q: "What do you mean by turnkey factory construction services?",
    a: "As a turnkey factory construction company, we manage everything from site evaluation, design and engineering to fabrication, erection and handover. You get a single point of responsibility, fewer coordination gaps and a factory ready for machinery installation.",
    width: 815,
    align: "center",
  },
  {
    q: "Do you specialise in manufacturing facility construction?",
    a: "As a factory building construction company and factory building contractor, we design and build manufacturing facilities around your process flow, machinery loads, crane requirements and utilities. As a factory extension contractor, we also handle factory expansion construction and factory shed expansions for growing plants.",
    width: 817,
    align: "start",
  },
  {
    q: "What types of industrial projects do you undertake?",
    a: "We undertake new factory construction, factory shed construction, industrial building construction, PEB structures, and factory expansion and extension projects. As a factory expansion contractor, we also handle factory building extensions, industrial shed extensions, and factory facility expansions for running plants.",
    width: 864,
    align: "start",
    literal: true,
  },
  {
    q: "Do you provide industrial infrastructure construction services?",
    a: "Yes. Along with the main factory building, we build supporting industrial infrastructure such as internal roads, drainage, utility and equipment foundations, compound walls and stores. We plan everything together, so your plant is complete and ready to operate.",
    width: 796,
    align: "center",
  },
  {
    q: "Why should I choose Mekark as an industrial turnkey contractor?",
    a: "Mekark combines in-house engineering, PEB manufacturing and on-site execution under one roof. As an industrial factory building contractor, we offer BIM-based design, itemised pricing, a typical 20-22 week delivery for PEB factories and 200+ completed projects, backed by repeat orders from manufacturers.",
    width: 816,
    align: "center",
  },
  {
    q: "Do you undertake factory building construction projects across India?",
    a: "Yes. We design, build and deliver factory building construction projects anywhere in India. Our in-house fabrication and trained erection teams ensure the same quality and timelines at every location, for both new factories and turnkey factory expansion projects.",
    width: 860,
    align: "center",
  },
  {
    q: "Will Mekark provide industrial foundation and civil work services?",
    a: "Yes. We provide industrial foundation and civil work customised to your machinery, crane and floor loads. This includes soil-based foundation design, footings, pedestals, plinth beams, industrial flooring and other civil works, all coordinated with the steel structure.",
    width: 817,
    align: "center",
  },
  {
    q: "Will Mekark provide RCC construction services for industrial buildings?",
    a: "Yes. As an industrial civil construction company, we provide RCC construction for industrial buildings, including foundations, columns, beams, slabs, multi-storey factory blocks and RCC extensions to existing factories. Our structures are designed to IS 800:2007, IS 875 and IS 1893 and checked for quality before handover.",
    width: 860,
    align: "center",
  },
];
