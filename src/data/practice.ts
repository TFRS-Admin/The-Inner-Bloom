// Single source of truth for public-facing practice content.
// Sourced from the Inner Bloom Psychiatry Master Practice Profile (Notion),
// "MASTER PRACTICE PROFILE — FULLY CONFIRMED" section, confirmed 2026-07-25.
// Only fields cleared for public/directory use are included here — no DEA
// number, license numbers, CAQH, or the private practice address.

export interface BookingLink {
  label: string;
  href: string;
  isPlaceholder: boolean;
  note?: string;
}

export const practice = {
  name: "Inner Bloom Psychiatry",
  provider: {
    name: "Marie Newball",
    credentials: "PMHNP-BC",
    fullTitle: "Marie Newball, PMHNP-BC",
    npi: "1346718053",
  },
  tagline: "Compassionate, trauma-informed psychiatric care — by telehealth, across Texas.",
  positioning:
    "Inner Bloom Psychiatry offers approachable, private psychiatric evaluations and medication management, delivered entirely by telehealth.",
  contact: {
    email: "info@theinnerbloompsychiatry.com",
    phone: "832-947-4208",
    phoneHref: "tel:+18329474208",
    fax: "832-224-3640",
  },
  hours: "Monday–Friday, 9:00 a.m.–6:00 p.m. CT",
  languages: ["English", "Spanish"],
  modality: "Telehealth only, via Zoom",
  geography: "Serving patients throughout Texas",
  ages: [
    { label: "Children", detail: "under 12" },
    { label: "Adolescents", detail: "ages 12–17" },
    { label: "Adults", detail: "ages 18–64" },
    { label: "Older adults", detail: "ages 65+" },
  ],
  services: [
    {
      title: "Psychiatric Evaluations",
      description:
        "A thorough initial evaluation (about 45–60 minutes) to understand your history and build a plan of care together.",
    },
    {
      title: "Medication Management",
      description:
        "Ongoing follow-up visits (about 15–20 minutes) to monitor how your treatment is working and adjust as needed.",
    },
    {
      title: "Virtual Psychiatric Care",
      description:
        "Every visit happens over secure video, so care fits into your life without a commute or a waiting room.",
    },
  ],
  focusAreas: ["Trauma & PTSD", "Anxiety", "Depression", "ADHD", "Behavioral health concerns"],
  pricing: {
    initialVisit: "$100",
    followUp: "$75",
    followUpCadence: "per month",
    note: "Self-pay rates. If you have insurance through one of our accepted plans, book through Headway instead — your cost will depend on your plan's benefits.",
  },
  insurers: [
    "Aetna",
    "Ascension (SmartHealth)",
    "Blue Cross Blue Shield of Texas — HMO",
    "Blue Cross Blue Shield of Texas — PPO",
    "Carelon Behavioral Health",
    "Cigna",
    "Oscar (Optum)",
    "Oxford (Optum)",
    "Quest Behavioral Health",
    "United Healthcare (Optum)",
  ],
  crisis: {
    text: "If you are experiencing a mental health emergency, call or text 988 (Suicide & Crisis Lifeline) or call 911. Inner Bloom Psychiatry is an outpatient telehealth practice and cannot provide emergency or crisis care.",
  },
} as const;

// TODO(booking-links): Confirm and replace before launch.
// - Headway: exact provider booking URL (e.g. https://headway.co/providers/marie-newball-...)
//   was not available at build time — currently falls back to Headway's general site.
// - SimplePractice: exact self-pay booking URL was requested but not yet provided.
//   Note: the source-of-truth Notion doc's confirmed booking architecture actually
//   routes self-pay through Calendly + Zoom, not SimplePractice — flagged to the
//   client; using SimplePractice here per their explicit instruction.
export const bookingLinks: { insurance: BookingLink; selfPay: BookingLink } = {
  insurance: {
    label: "Book with Insurance (Headway)",
    href: "https://headway.co",
    isPlaceholder: true,
    note: "Placeholder — swap in Marie Newball's exact Headway provider URL.",
  },
  selfPay: {
    label: "Book Self-Pay (SimplePractice)",
    href: "#",
    isPlaceholder: true,
    note: "Placeholder — swap in the practice's SimplePractice booking URL.",
  },
};

export const faqs: Array<{ question: string; answer: string }> = [
  {
    question: "Does Inner Bloom Psychiatry accept insurance?",
    answer:
      "Yes. Marie Newball, PMHNP-BC accepts several major insurance plans through Headway, including Aetna, Ascension (SmartHealth), Blue Cross Blue Shield of Texas (HMO and PPO), Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, and United Healthcare. Self-pay visits are also available.",
  },
  {
    question: "Is Inner Bloom Psychiatry telehealth only?",
    answer:
      "Yes. All visits are conducted over secure video (Zoom) — there is no in-person office. This lets patients across Texas get care without traveling.",
  },
  {
    question: "What areas does Inner Bloom Psychiatry serve?",
    answer:
      "Inner Bloom Psychiatry currently serves patients located in Texas. Appointments are available Monday through Friday, 9:00 a.m. to 6:00 p.m.",
  },
  {
    question: "What ages does Inner Bloom Psychiatry treat?",
    answer:
      "Marie Newball, PMHNP-BC treats children under 12, adolescents ages 12–17, adults ages 18–64, and older adults 65 and up.",
  },
  {
    question: "What conditions does Inner Bloom Psychiatry treat?",
    answer:
      "Common focus areas include trauma and PTSD, anxiety, depression, ADHD, and other behavioral health concerns, addressed through psychiatric evaluation and medication management.",
  },
  {
    question: "Does Inner Bloom Psychiatry provide talk therapy?",
    answer:
      "Inner Bloom Psychiatry focuses on psychiatric evaluation and medication management rather than talk therapy. Many patients pair these visits with a separate therapist for counseling.",
  },
  {
    question: "How much does a self-pay visit cost?",
    answer:
      "A self-pay initial evaluation is $100, and self-pay follow-up visits are $75 per month. Patients using accepted insurance plans book through Headway instead.",
  },
  {
    question: "How do I book an appointment with Inner Bloom Psychiatry?",
    answer:
      "If you have one of the accepted insurance plans, book through Headway. If you're paying out of pocket, use the self-pay booking link. Both options are linked at the top and bottom of this page.",
  },
  {
    question: "What languages does Inner Bloom Psychiatry offer care in?",
    answer: "Visits are available in English and Spanish.",
  },
  {
    question: "What should I do if I'm having a mental health emergency?",
    answer:
      "Call or text 988 (Suicide & Crisis Lifeline) or call 911. Inner Bloom Psychiatry is an outpatient telehealth practice and is not equipped to respond to emergencies.",
  },
];
