export interface ChatKnowledge {
  keywords: string[];
  answer: string;
}

export const chatbotKnowledge: ChatKnowledge[] = [
  {
    keywords: ["office", "office washroom", "workplace"],
    answer: "For office washrooms, we recommend touch-free soap dispensers, paper towel dispensers, air freshener units, and sanitary disposal bins. These create a hygienic, professional environment for your staff and visitors. Would you like a tailored quote for your office?",
  },
  {
    keywords: ["school", "education", "children"],
    answer: "Our school washroom range includes robust, tamper-resistant soap and paper towel dispensers, child-friendly sanitiser stations, and durable toilet tissue systems. All products are designed to withstand heavy use while promoting good hygiene habits.",
  },
  {
    keywords: ["touch-free", "touchless", "no-touch", "sensor", "automatic"],
    answer: "Touch-free dispensers use infrared sensors to dispense soap, sanitiser, or paper towels without physical contact. This can help reduce the number of touch points in your washroom. We offer touch-free options across soap, sanitiser, and paper towel categories.",
  },
  {
    keywords: ["manual", "difference", "manual vs"],
    answer: "Manual dispensers are push-operated and generally more affordable, while touch-free dispensers use sensors for hands-free operation. Touch-free units can help reduce contact points, while manual units are simpler to maintain. The best choice depends on your budget and facility requirements.",
  },
  {
    keywords: ["sanitary", "feminine", "disposal", "sanitary bin"],
    answer: "Yes, we provide a full range of sanitary disposal solutions including pedal-operated bins, hands-free units, and managed service options. Our bins are available in various sizes to suit individual cubicles or multi-stall washrooms.",
  },
  {
    keywords: ["consumable", "refill", "reorder", "supplies"],
    answer: "Common consumables to keep stocked include hand towels, toilet tissue rolls, soap refill cartridges, sanitiser gel, air freshener refills, and sanitary bin liners. We can help you set up a regular supply schedule to avoid running out.",
  },
  {
    keywords: ["air", "freshener", "air care", "smell", "odour"],
    answer: "Our air care range includes compact battery-operated units and programmable systems that dispense fragrance at set intervals. They help maintain a pleasant washroom environment and are available with a variety of refill scents.",
  },
  {
    keywords: ["vending", "vending machine"],
    answer: "Our washroom vending machines dispense hygiene essentials like sanitary products, pain relief, and personal care items. They accept coins and can be configured for contactless payment. Ideal for public facilities, leisure centres, and workplaces.",
  },
  {
    keywords: ["price", "cost", "quote", "how much"],
    answer: "Pricing depends on the specific products and quantities required. We offer competitive rates for bulk orders and managed service contracts. Contact us for a free, no-obligation quote tailored to your needs.",
  },
  {
    keywords: ["delivery", "shipping", "lead time"],
    answer: "We offer delivery across the UK. Standard delivery is typically within 3-5 working days, with express options available for urgent requirements. Managed service customers benefit from scheduled deliveries.",
  },
  {
    keywords: ["healthcare", "hospital", "clinical", "nhs"],
    answer: "For healthcare settings, we supply clinical-grade touch-free dispensers, antimicrobial soap systems, hand sanitiser stations, and clinical waste disposal units. All products are designed to support infection control protocols.",
  },
  {
    keywords: ["hospitality", "hotel", "restaurant", "pub"],
    answer: "Our hospitality range includes premium-finish dispensers, designer air care units, and high-capacity systems for busy service periods. We help you create washroom experiences that match your venue's quality standards.",
  },
  {
    keywords: ["sustainability", "eco", "environment", "green"],
    answer: "We are committed to offering sustainable options including recycled paper products, refillable dispenser systems that reduce plastic waste, and energy-efficient battery-operated units. Ask us about our eco-friendly product range.",
  },
  {
    keywords: ["install", "installation", "fitting", "mount"],
    answer: "Most of our dispensers come with wall-mounting kits and clear installation instructions. For larger projects, we can arrange professional installation. Our team can also conduct a washroom survey to recommend the best product placement.",
  },
];

export const suggestedPrompts = [
  "What products do I need for an office washroom?",
  "What is the difference between manual and touch-free dispensers?",
  "Do you offer sanitary disposal solutions?",
  "Which hygiene products suit schools?",
  "What consumables should I reorder regularly?",
];
