import type { FAQGroup, FAQItem } from "@/types";

export const faqGroups: FAQGroup[] = [
  { id: "grp-1", name: "Hand Hygiene", slug: "hand-hygiene" },
  { id: "grp-2", name: "Washroom Dispensers", slug: "washroom-dispensers" },
  { id: "grp-3", name: "Sanitary Disposal", slug: "sanitary-disposal" },
  { id: "grp-4", name: "Air Care", slug: "air-care" },
  { id: "grp-5", name: "Delivery & Servicing", slug: "delivery-servicing" },
  { id: "grp-6", name: "Sustainability", slug: "sustainability" },
];

export const faqs: FAQItem[] = [
  // Hand Hygiene
  {
    id: "faq-1",
    question: "What types of soap are available for commercial washrooms?",
    answer:
      "We supply a range of commercial soaps including antibacterial foam soap, gentle lotion soap, and heavy-duty industrial hand cleaner. Each formulation is designed to meet specific hygiene standards while remaining gentle on the skin with frequent use.",
    group: "Hand Hygiene",
  },
  {
    id: "faq-2",
    question: "How often should hand sanitiser dispensers be refilled?",
    answer:
      "Refill frequency depends on foot traffic, but most commercial dispensers in medium-traffic areas need refilling every two to four weeks. We monitor usage during our scheduled service visits and ensure your dispensers are always fully stocked.",
    group: "Hand Hygiene",
  },
  {
    id: "faq-3",
    question: "Are touch-free soap dispensers more hygienic than manual ones?",
    answer:
      "Yes, touch-free dispensers significantly reduce cross-contamination by eliminating the need to press a button or lever. They are particularly recommended for healthcare settings, food preparation areas, and high-traffic public washrooms.",
    group: "Hand Hygiene",
  },
  {
    id: "faq-4",
    question: "Do you provide hand hygiene training or signage?",
    answer:
      "We can supply professional hand-washing instructional signage that meets NHS and HSE guidelines. Proper signage placed above wash stations has been shown to improve hand hygiene compliance by up to 40% in workplace environments.",
    group: "Hand Hygiene",
  },
  {
    id: "faq-5",
    question: "What hand hygiene products do you recommend for food industry clients?",
    answer:
      "For food industry environments we recommend antibacterial foam soap paired with touch-free dispensers and alcohol-based sanitiser stations at entry points. All our food-grade products comply with current UK food safety regulations and HACCP requirements.",
    group: "Hand Hygiene",
  },

  // Washroom Dispensers
  {
    id: "faq-6",
    question: "What paper towel dispenser options do you offer?",
    answer:
      "We offer both C-fold and Z-fold hand towel dispensers as well as automatic cut-roll dispensers. Our dispensers are designed to reduce waste through controlled dispensing while maintaining a professional appearance in your washroom.",
    group: "Washroom Dispensers",
  },
  {
    id: "faq-7",
    question: "Can I mix and match dispenser brands with your consumables?",
    answer:
      "Our consumables are compatible with most major dispenser brands, but we recommend using our matched systems for optimal performance and reliability. We can assess your existing dispensers during a free site survey and advise on the best consumable options.",
    group: "Washroom Dispensers",
  },
  {
    id: "faq-8",
    question: "How do jumbo toilet roll dispensers compare to standard holders?",
    answer:
      "Jumbo roll dispensers hold significantly more paper, reducing the frequency of refills and the risk of running out during busy periods. They are ideal for high-traffic washrooms in offices, schools, and leisure facilities where minimising maintenance is a priority.",
    group: "Washroom Dispensers",
  },
  {
    id: "faq-9",
    question: "Do you install the dispensers or just supply them?",
    answer:
      "We provide a full installation service as part of your contract at no extra charge. Our engineers will fit all dispensers securely and position them at the correct height to comply with accessibility and health and safety guidelines.",
    group: "Washroom Dispensers",
  },
  {
    id: "faq-10",
    question: "What happens if a dispenser breaks or malfunctions?",
    answer:
      "All dispensers supplied under our service agreements include maintenance and repair cover. If a unit malfunctions between scheduled visits, simply contact us and we will arrange a prompt repair or replacement at no additional cost.",
    group: "Washroom Dispensers",
  },

  // Sanitary Disposal
  {
    id: "faq-11",
    question: "How often are sanitary bins serviced?",
    answer:
      "Sanitary bins are typically serviced on a four-weekly cycle, which meets most workplace requirements. However, we can arrange more frequent collections for high-traffic sites such as shopping centres, hospitals, and large office buildings.",
    group: "Sanitary Disposal",
  },
  {
    id: "faq-12",
    question: "Are your sanitary disposal services compliant with waste regulations?",
    answer:
      "Absolutely. All sanitary waste is classified as offensive waste and is collected, transported, and disposed of in full compliance with the Environmental Protection Act 1990 and Duty of Care regulations. We provide full audit trail documentation upon request.",
    group: "Sanitary Disposal",
  },
  {
    id: "faq-13",
    question: "Do you offer nappy disposal units as well?",
    answer:
      "Yes, we supply and service dedicated nappy bins for family-friendly facilities including nurseries, leisure centres, and retail environments. These units are sealed and odour-controlled, providing a hygienic and discreet disposal solution.",
    group: "Sanitary Disposal",
  },
  {
    id: "faq-14",
    question: "What sizes of sanitary bins are available?",
    answer:
      "We offer compact pedal-operated bins ideal for individual cubicles as well as larger capacity units for busy washrooms. Our team will recommend the most suitable size during your free site survey based on expected usage levels.",
    group: "Sanitary Disposal",
  },

  // Air Care
  {
    id: "faq-15",
    question: "What types of air freshener systems do you provide?",
    answer:
      "We supply programmable aerosol dispensers, passive gel-based systems, and fan-driven air fresheners. Each system can be tailored to the size of your washroom and your preferred fragrance, ensuring a consistently pleasant environment.",
    group: "Air Care",
  },
  {
    id: "faq-16",
    question: "How long does an air freshener refill last?",
    answer:
      "Most aerosol refills last approximately 30 days when set to a standard dispensing interval. We replace refills during your regular service visit so you never need to worry about running out or managing stock yourself.",
    group: "Air Care",
  },
  {
    id: "faq-17",
    question: "Can air fresheners help with persistent washroom odours?",
    answer:
      "Our air care systems are designed to neutralise odours rather than simply mask them. For washrooms with persistent issues, we may also recommend urinal and WC sanitiser dosing units that tackle odour at the source for a more complete solution.",
    group: "Air Care",
  },
  {
    id: "faq-18",
    question: "Are your air care products safe for enclosed spaces?",
    answer:
      "Yes, all our air care products are formulated for use in enclosed washroom environments and comply with current COSHH regulations. We also offer VOC-reduced and allergen-friendly options for sensitive settings such as healthcare facilities.",
    group: "Air Care",
  },
  {
    id: "faq-19",
    question: "Do you offer fragrance-free odour control solutions?",
    answer:
      "We do. Our fragrance-free range uses enzyme-based technology to break down odour-causing bacteria without introducing any scent. These are popular in healthcare, food service, and allergy-aware environments.",
    group: "Air Care",
  },

  // Delivery & Servicing
  {
    id: "faq-20",
    question: "What areas do you cover for washroom servicing?",
    answer:
      "We currently provide full washroom servicing across Merseyside, Cheshire, and the wider North West. If your premises fall outside these areas, please get in touch as we may still be able to accommodate your requirements.",
    group: "Delivery & Servicing",
  },
  {
    id: "faq-21",
    question: "How does the service contract work?",
    answer:
      "After a free site survey, we create a tailored service plan covering all the products your washrooms need. Our technicians visit on an agreed schedule to refill consumables, replace units, and carry out maintenance, all included in one simple monthly cost.",
    group: "Delivery & Servicing",
  },
  {
    id: "faq-22",
    question: "Can I adjust my service frequency after signing up?",
    answer:
      "Of course. We understand that business needs change, so we offer flexible contracts that allow you to increase or decrease service frequency with reasonable notice. Our account managers work with you to ensure the schedule always suits your requirements.",
    group: "Delivery & Servicing",
  },
  {
    id: "faq-23",
    question: "What happens if I need an emergency top-up between visits?",
    answer:
      "We offer a responsive call-out service for urgent restocking or maintenance between scheduled visits. Simply call our support line and we will arrange a visit as quickly as possible, typically within one to two working days.",
    group: "Delivery & Servicing",
  },

  // Sustainability
  {
    id: "faq-24",
    question: "Are your paper products sourced from sustainable forests?",
    answer:
      "Yes, all our paper towels and toilet tissue are sourced from FSC or PEFC certified forests, ensuring responsible forestry management. We also offer 100% recycled paper options for clients who want to further reduce their environmental footprint.",
    group: "Sustainability",
  },
  {
    id: "faq-25",
    question: "How do you minimise waste across your services?",
    answer:
      "Our controlled-dispensing systems reduce paper waste by up to 30% compared to open-tray dispensers. We also collect and recycle dispenser casings at end of life and use concentrated refills to cut down on packaging waste.",
    group: "Sustainability",
  },
  {
    id: "faq-26",
    question: "Do you offer eco-friendly soap and sanitiser options?",
    answer:
      "We carry a range of Ecolabel-certified soaps and sanitisers that are biodegradable and free from harmful chemicals. These products deliver the same high hygiene standards while being kinder to the environment and to users with sensitive skin.",
    group: "Sustainability",
  },
  {
    id: "faq-27",
    question: "Can you help us meet our corporate sustainability targets?",
    answer:
      "Absolutely. We can provide detailed reports on the environmental credentials of every product in your washrooms, including carbon footprint data, recycled content percentages, and certifications. This information supports your ESG reporting and sustainability audits.",
    group: "Sustainability",
  },
  {
    id: "faq-28",
    question: "What steps are you taking to reduce your own carbon footprint?",
    answer:
      "We optimise our service routes to minimise fuel consumption and are transitioning our fleet to electric vehicles. We also partner with carbon offset programmes and continuously review our supply chain to reduce emissions at every stage.",
    group: "Sustainability",
  },
];
