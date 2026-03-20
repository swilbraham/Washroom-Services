import type { Product } from "@/types";

export const products: Product[] = [
  // ── Soap Dispensers ──────────────────────────────────────────────────
  {
    id: "prod-1",
    slug: "touch-free-soap-dispenser",
    name: "Touch-Free Soap Dispenser",
    category: "Soap Dispensers",
    shortDescription:
      "Infrared sensor-activated soap dispenser designed for high-traffic commercial washrooms.",
    description:
      "The Touch-Free Soap Dispenser uses precision infrared sensing to deliver a measured dose of liquid soap without physical contact. Built from durable ABS plastic with an anti-fingerprint finish, it is ideal for busy offices, hospitality venues, and healthcare facilities. The refillable cartridge system minimises waste and simplifies maintenance.",
    features: [
      "Infrared no-touch activation with 0.5-second response time",
      "Adjustable dose control to reduce soap waste",
      "Lockable housing to prevent tampering",
      "LED indicator for low soap and battery levels",
      "Compatible with standard liquid soap refills",
    ],
    benefits: [
      "Reduces cross-contamination in shared washrooms",
      "Lowers soap consumption by up to 50% compared to manual dispensers",
      "Minimal maintenance with long-life battery operation",
      "Professional appearance suits any commercial interior",
    ],
    image: "/images/products/touch-free-soap-dispenser.jpg",
    gallery: [
      "/images/products/touch-free-soap-dispenser-1.jpg",
      "/images/products/touch-free-soap-dispenser-2.jpg",
      "/images/products/touch-free-soap-dispenser-3.jpg",
    ],
    featured: true,
    price: 89.99,
    sku: "WS-1001",
    stock: "in-stock",
    industries: [
      "Offices",
      "Healthcare",
      "Hospitality",
      "Schools & Education",
      "Retail",
    ],
    faqs: [
      {
        question: "What batteries does this dispenser require?",
        answer:
          "The unit operates on 4 x C-cell batteries, which typically last up to 12 months under normal usage.",
      },
      {
        question: "Can I use any brand of liquid soap?",
        answer:
          "Yes, the dispenser accepts any standard liquid soap. We recommend our own-brand refills for optimal performance.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "265 x 130 x 110 mm",
      Capacity: "1000 ml",
      Colour: "White / Chrome",
      Mounting: "Wall-mounted (fixings included)",
      Power: "4 x C-cell batteries",
    },
  },
  {
    id: "prod-2",
    slug: "manual-bulk-soap-dispenser",
    name: "Manual Bulk Soap Dispenser",
    category: "Soap Dispensers",
    shortDescription:
      "Robust push-button soap dispenser with a large 1.2-litre reservoir for cost-effective washroom hygiene.",
    description:
      "The Manual Bulk Soap Dispenser offers reliable, no-fuss performance for any commercial washroom. Its 1.2-litre capacity reduces the frequency of refills, while the corrosion-resistant ABS body withstands heavy daily use. A simple push-button mechanism delivers a consistent dose every time.",
    features: [
      "Large 1.2-litre capacity reservoir",
      "Smooth push-button mechanism for reliable dispensing",
      "Translucent window to monitor soap levels",
      "Lockable lid to prevent unauthorised refilling",
      "Drip tray compatible to keep surfaces clean",
    ],
    benefits: [
      "Low upfront cost with minimal ongoing maintenance",
      "No batteries or power supply required",
      "Easy top-fill design speeds up restocking",
      "Suitable for high-volume environments",
    ],
    image: "/images/products/manual-bulk-soap-dispenser.jpg",
    gallery: [
      "/images/products/manual-bulk-soap-dispenser-1.jpg",
      "/images/products/manual-bulk-soap-dispenser-2.jpg",
      "/images/products/manual-bulk-soap-dispenser-3.jpg",
    ],
    featured: false,
    price: 34.5,
    sku: "WS-1002",
    stock: "in-stock",
    industries: [
      "Schools & Education",
      "Industrial & Warehouses",
      "Gyms & Leisure",
      "Retail",
    ],
    faqs: [
      {
        question: "Is this dispenser compatible with anti-bacterial soap?",
        answer:
          "Yes, the dispenser is compatible with most liquid soaps including anti-bacterial formulations.",
      },
      {
        question: "How do I clean the reservoir?",
        answer:
          "Remove the top cover, rinse the reservoir with warm water, and allow to dry before refilling.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "280 x 120 x 115 mm",
      Capacity: "1200 ml",
      Colour: "White",
      Mounting: "Wall-mounted (fixings included)",
      Weight: "320 g (empty)",
    },
  },
  {
    id: "prod-3",
    slug: "foam-soap-dispenser",
    name: "Foam Soap Dispenser",
    category: "Soap Dispensers",
    shortDescription:
      "Efficient foam soap dispenser that uses up to 70% less soap per wash than liquid alternatives.",
    description:
      "The Foam Soap Dispenser transforms liquid soap concentrate into a rich lather, significantly reducing consumption per use. Its sleek, compact profile fits neatly in space-constrained washrooms while the sealed cartridge system ensures hygienic refills. Ideal for organisations looking to cut consumable costs without compromising on quality.",
    features: [
      "Foam pump technology for economical soap usage",
      "Sealed cartridge system prevents contamination",
      "Compact profile suitable for tight installations",
      "Visible soap level indicator",
      "Tool-free cartridge replacement",
    ],
    benefits: [
      "Reduces soap spend by up to 70% versus liquid dispensers",
      "Quick-rinse foam shortens hand-wash time",
      "Sealed refills maintain product integrity",
      "Compact size maximises available washroom space",
    ],
    image: "/images/products/foam-soap-dispenser.jpg",
    gallery: [
      "/images/products/foam-soap-dispenser-1.jpg",
      "/images/products/foam-soap-dispenser-2.jpg",
      "/images/products/foam-soap-dispenser-3.jpg",
    ],
    featured: false,
    price: 64.0,
    sku: "WS-1003",
    stock: "in-stock",
    industries: ["Offices", "Healthcare", "Hospitality", "Retail"],
    faqs: [
      {
        question: "Do I need special soap for this dispenser?",
        answer:
          "Yes, this dispenser requires foam soap cartridges. We supply compatible refills in a range of fragrances.",
      },
      {
        question: "How many hand washes per cartridge?",
        answer:
          "Each 1000 ml cartridge delivers approximately 2,500 hand washes.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "240 x 115 x 100 mm",
      Capacity: "1000 ml cartridge",
      Colour: "White / Grey",
      Mounting: "Wall-mounted (fixings included)",
      Weight: "290 g (empty)",
    },
  },

  // ── Hand Sanitiser Dispensers ────────────────────────────────────────
  {
    id: "prod-4",
    slug: "alcohol-hand-sanitiser-station",
    name: "Alcohol Hand Sanitiser Station",
    category: "Hand Sanitiser Dispensers",
    shortDescription:
      "Freestanding sanitiser station with a touch-free dispenser, ideal for building entrances and reception areas.",
    description:
      "The Alcohol Hand Sanitiser Station provides a highly visible, freestanding solution for hand sanitising at building entry points. The sturdy powder-coated steel stand pairs with a touch-free dispenser head that accommodates standard 1-litre sanitiser bottles. Its weighted base ensures stability in high-footfall areas.",
    features: [
      "Freestanding design requires no wall fixings",
      "Touch-free infrared dispenser head",
      "Weighted base for stability in busy areas",
      "Height-adjustable stand suits all users",
      "Drip tray included to protect flooring",
    ],
    benefits: [
      "Quick deployment at entrances, lobbies, and event spaces",
      "Encourages hand hygiene with a prominent placement",
      "Relocatable between sites as needed",
      "Low maintenance with easy bottle swap",
    ],
    image: "/images/products/alcohol-hand-sanitiser-station.jpg",
    gallery: [
      "/images/products/alcohol-hand-sanitiser-station-1.jpg",
      "/images/products/alcohol-hand-sanitiser-station-2.jpg",
      "/images/products/alcohol-hand-sanitiser-station-3.jpg",
    ],
    featured: true,
    price: 129.0,
    sku: "WS-2001",
    stock: "in-stock",
    industries: [
      "Offices",
      "Healthcare",
      "Hospitality",
      "Retail",
      "Gyms & Leisure",
    ],
    faqs: [
      {
        question: "What size sanitiser bottles does the station accept?",
        answer:
          "The dispenser head accepts standard 1-litre pump-top bottles. Adapter collars for 500 ml bottles are available separately.",
      },
      {
        question: "Can the station be used outdoors?",
        answer:
          "The station is designed for indoor use. For outdoor events, we recommend placing it under cover to protect the dispenser electronics.",
      },
    ],
    specifications: {
      Material: "Powder-coated steel stand, ABS dispenser head",
      "Stand Height": "1200 mm (adjustable)",
      "Base Dimensions": "350 x 350 mm",
      "Dispenser Capacity": "1000 ml bottle",
      Colour: "Black stand / White dispenser",
      Weight: "6.5 kg",
    },
  },
  {
    id: "prod-5",
    slug: "wall-mounted-gel-sanitiser-dispenser",
    name: "Wall-Mounted Gel Sanitiser Dispenser",
    category: "Hand Sanitiser Dispensers",
    shortDescription:
      "Compact wall-mounted dispenser for gel hand sanitiser, suitable for corridors, kitchens, and clinical areas.",
    description:
      "The Wall-Mounted Gel Sanitiser Dispenser delivers a precise dose of gel sanitiser at the push of an elbow-friendly lever. Its slim profile keeps corridors and narrow spaces clear, while the transparent reservoir allows staff to monitor fill levels at a glance. Constructed from impact-resistant ABS, it withstands demanding commercial environments.",
    features: [
      "Elbow-operated lever for hands-free activation",
      "Transparent reservoir for at-a-glance level checks",
      "Impact-resistant ABS construction",
      "Keyed lock prevents tampering or theft",
      "Universal mounting plate for quick installation",
    ],
    benefits: [
      "Hands-free operation supports hygiene protocols",
      "Slim profile keeps walkways unobstructed",
      "Durable build reduces replacement frequency",
      "Affordable solution for multi-point deployment",
    ],
    image: "/images/products/wall-mounted-gel-sanitiser-dispenser.jpg",
    gallery: [
      "/images/products/wall-mounted-gel-sanitiser-dispenser-1.jpg",
      "/images/products/wall-mounted-gel-sanitiser-dispenser-2.jpg",
      "/images/products/wall-mounted-gel-sanitiser-dispenser-3.jpg",
    ],
    featured: false,
    price: 42.0,
    sku: "WS-2002",
    stock: "in-stock",
    industries: ["Healthcare", "Schools & Education", "Hospitality", "Offices"],
    faqs: [
      {
        question: "Is this compatible with alcohol-based gel?",
        answer:
          "Yes, it is designed for use with alcohol-based gel sanitisers. Ensure the gel is below 80% alcohol concentration for material compatibility.",
      },
      {
        question: "What fixings are included?",
        answer:
          "The kit includes screws and wall plugs for plasterboard and masonry. For glass partitions, adhesive mounts are available separately.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "250 x 120 x 100 mm",
      Capacity: "900 ml",
      Colour: "White",
      Mounting: "Wall-mounted (fixings included)",
      "Dose Volume": "1.5 ml per push",
    },
  },

  // ── Paper Towel Dispensers ───────────────────────────────────────────
  {
    id: "prod-6",
    slug: "premium-stainless-paper-towel-dispenser",
    name: "Premium Stainless Paper Towel Dispenser",
    category: "Paper Towel Dispensers",
    shortDescription:
      "Brushed stainless-steel paper towel dispenser with a single-sheet delivery system to reduce waste.",
    description:
      "The Premium Stainless Paper Towel Dispenser combines a modern brushed-steel finish with a controlled single-sheet feed mechanism. Designed for front-of-house washrooms where aesthetics matter, it pairs durability with a reduced paper consumption rate. The wide loading bay accommodates C-fold and Z-fold towels.",
    features: [
      "Brushed 304 stainless-steel exterior",
      "Single-sheet delivery reduces paper waste",
      "Accepts C-fold and Z-fold hand towels",
      "Spring-loaded base plate ensures consistent feed",
      "Keyed lock for secure refilling",
    ],
    benefits: [
      "Sophisticated finish enhances premium washroom interiors",
      "Controlled dispensing can cut paper use by up to 30%",
      "Corrosion-resistant steel ensures longevity",
      "Dual towel-fold compatibility offers purchasing flexibility",
    ],
    image: "/images/products/premium-stainless-paper-towel-dispenser.jpg",
    gallery: [
      "/images/products/premium-stainless-paper-towel-dispenser-1.jpg",
      "/images/products/premium-stainless-paper-towel-dispenser-2.jpg",
      "/images/products/premium-stainless-paper-towel-dispenser-3.jpg",
    ],
    featured: true,
    price: 149.0,
    sku: "WS-3001",
    stock: "in-stock",
    industries: ["Hospitality", "Offices", "Retail", "Healthcare"],
    faqs: [
      {
        question: "What towel sizes fit this dispenser?",
        answer:
          "It accepts standard C-fold towels (230 x 310 mm) and Z-fold towels (230 x 240 mm).",
      },
      {
        question: "Is the stainless steel fingerprint-resistant?",
        answer:
          "The brushed finish minimises visible fingerprints, and the surface can be wiped clean with a damp cloth.",
      },
    ],
    specifications: {
      Material: "304 Stainless Steel",
      Dimensions: "370 x 280 x 130 mm",
      "Towel Capacity": "Approx. 500 C-fold towels",
      Colour: "Brushed Stainless",
      Mounting: "Wall-mounted (fixings included)",
      Weight: "2.1 kg",
    },
  },
  {
    id: "prod-7",
    slug: "autocut-paper-towel-dispenser",
    name: "Autocut Paper Towel Dispenser",
    category: "Paper Towel Dispensers",
    shortDescription:
      "Automatic-cut roll towel dispenser providing pre-cut portions for fast, hygienic hand drying.",
    description:
      "The Autocut Paper Towel Dispenser delivers a pre-cut towel sheet each time the user pulls downward, eliminating the need to tear paper manually. This reduces waste and ensures a consistent portion size. The enclosed roll housing keeps towels clean and dry between uses, making it a practical choice for busy washrooms.",
    features: [
      "Autocut mechanism delivers consistent towel portions",
      "Enclosed roll housing protects towels from splashes",
      "Accepts rolls up to 200 m in length",
      "Stub-roll transfer function for zero-waste changeovers",
      "Locking cover prevents unauthorised access",
    ],
    benefits: [
      "Consistent sheet size reduces paper consumption",
      "Hygienic enclosed design suits food-service environments",
      "High-capacity rolls extend time between refills",
      "No batteries or electricity required",
    ],
    image: "/images/products/autocut-paper-towel-dispenser.jpg",
    gallery: [
      "/images/products/autocut-paper-towel-dispenser-1.jpg",
      "/images/products/autocut-paper-towel-dispenser-2.jpg",
      "/images/products/autocut-paper-towel-dispenser-3.jpg",
    ],
    featured: false,
    price: 74.5,
    sku: "WS-3002",
    stock: "in-stock",
    industries: [
      "Hospitality",
      "Industrial & Warehouses",
      "Schools & Education",
      "Gyms & Leisure",
    ],
    faqs: [
      {
        question: "What roll diameter does this unit accept?",
        answer:
          "The unit accepts rolls with a maximum outer diameter of 200 mm and a core diameter of 38 mm.",
      },
      {
        question: "How does the stub-roll function work?",
        answer:
          "When the active roll runs low, you insert a new roll on top. The dispenser automatically transitions to the new roll when the stub is exhausted, ensuring zero waste.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "350 x 300 x 220 mm",
      "Max Roll Length": "200 m",
      "Sheet Length": "250 mm per portion",
      Colour: "White / Smoke Grey",
      Mounting: "Wall-mounted (fixings included)",
    },
  },

  // ── Toilet Roll Dispensers ───────────────────────────────────────────
  {
    id: "prod-8",
    slug: "jumbo-toilet-roll-dispenser",
    name: "Jumbo Toilet Roll Dispenser",
    category: "Toilet Roll Dispensers",
    shortDescription:
      "Heavy-duty jumbo roll dispenser for high-usage commercial washrooms, holding rolls up to 400 m.",
    description:
      "The Jumbo Toilet Roll Dispenser is engineered for environments where frequent roll changes are impractical. It holds a single jumbo roll of up to 400 m, dramatically reducing maintenance visits. The robust steel-reinforced spindle and vandal-resistant cover make it suitable for public-facing and industrial facilities alike.",
    features: [
      "Accommodates jumbo rolls up to 400 m",
      "Steel-reinforced spindle withstands heavy use",
      "Vandal-resistant polycarbonate cover",
      "Built-in stub-roll holder prevents run-outs",
      "Serrated tear edge for clean sheet separation",
    ],
    benefits: [
      "Significantly reduces restocking frequency",
      "Tough construction lowers replacement costs",
      "Stub-roll holder ensures uninterrupted supply",
      "Cost-effective tissue format for high-traffic sites",
    ],
    image: "/images/products/jumbo-toilet-roll-dispenser.jpg",
    gallery: [
      "/images/products/jumbo-toilet-roll-dispenser-1.jpg",
      "/images/products/jumbo-toilet-roll-dispenser-2.jpg",
      "/images/products/jumbo-toilet-roll-dispenser-3.jpg",
    ],
    featured: false,
    price: 54.0,
    sku: "WS-4001",
    stock: "in-stock",
    industries: [
      "Industrial & Warehouses",
      "Schools & Education",
      "Hospitality",
      "Gyms & Leisure",
    ],
    faqs: [
      {
        question: "What is the maximum roll diameter this dispenser accepts?",
        answer:
          "The dispenser accepts rolls with a maximum outer diameter of 260 mm.",
      },
      {
        question: "Is the cover easy to open for maintenance staff?",
        answer:
          "Yes, the cover opens with a standard dispenser key supplied with the unit. Replacement keys are available.",
      },
    ],
    specifications: {
      Material: "ABS Plastic with polycarbonate cover",
      Dimensions: "320 x 320 x 140 mm",
      "Max Roll Diameter": "260 mm",
      "Core Diameter": "76 mm",
      Colour: "White",
      Mounting: "Wall-mounted (fixings included)",
    },
  },
  {
    id: "prod-9",
    slug: "twin-micro-toilet-roll-dispenser",
    name: "Twin Micro Toilet Roll Dispenser",
    category: "Toilet Roll Dispensers",
    shortDescription:
      "Compact twin-roll dispenser that automatically transfers to the reserve roll for uninterrupted supply.",
    description:
      "The Twin Micro Toilet Roll Dispenser holds two micro-jumbo rolls, providing automatic transfer from one roll to the next to eliminate run-outs. Its compact footprint makes it ideal for cubicles with limited wall space. The translucent cover enables staff to check levels without opening the unit.",
    features: [
      "Twin-roll capacity with automatic transfer",
      "Compact profile for narrow cubicle walls",
      "Translucent cover for visible stock checking",
      "Universal core compatibility (40-44 mm)",
      "Anti-theft spindle lock",
    ],
    benefits: [
      "Eliminates run-out complaints with dual-roll backup",
      "Compact design maximises cubicle space",
      "Visible stock reduces unnecessary checks by staff",
      "Accepts widely available micro-jumbo rolls",
    ],
    image: "/images/products/twin-micro-toilet-roll-dispenser.jpg",
    gallery: [
      "/images/products/twin-micro-toilet-roll-dispenser-1.jpg",
      "/images/products/twin-micro-toilet-roll-dispenser-2.jpg",
      "/images/products/twin-micro-toilet-roll-dispenser-3.jpg",
    ],
    featured: false,
    price: 46.0,
    sku: "WS-4002",
    stock: "low-stock",
    industries: [
      "Offices",
      "Hospitality",
      "Schools & Education",
      "Healthcare",
    ],
    faqs: [
      {
        question: "What roll length does this dispenser accept?",
        answer:
          "Each spindle accepts micro-jumbo rolls up to 200 m with a core diameter of 40-44 mm.",
      },
      {
        question: "How does the automatic transfer work?",
        answer:
          "When the primary roll is exhausted, the dispenser mechanism automatically presents the reserve roll to the user without any manual intervention.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "300 x 260 x 130 mm",
      "Roll Capacity": "2 x 200 m micro-jumbo rolls",
      "Core Diameter": "40-44 mm",
      Colour: "White / Translucent Grey",
      Mounting: "Wall-mounted (fixings included)",
    },
  },

  // ── Hand Towels & Consumables ────────────────────────────────────────
  {
    id: "prod-10",
    slug: "z-fold-hand-towels-case-of-3000",
    name: "Z-Fold Hand Towels (Case of 3000)",
    category: "Hand Towels & Consumables",
    shortDescription:
      "Bulk case of 3,000 single-fold Z-fold hand towels for commercial paper towel dispensers.",
    description:
      "These Z-Fold Hand Towels are manufactured from high-quality 2-ply recycled tissue, offering excellent absorbency and wet strength. Supplied in a case of 3,000 sheets (12 sleeves of 250), they are compatible with all standard Z-fold dispensers. An economical choice for facilities that require reliable, high-volume hand-drying consumables.",
    features: [
      "2-ply construction for superior absorbency",
      "Interleaved fold for single-sheet dispensing",
      "Manufactured from recycled tissue",
      "12 sleeves of 250 sheets per case",
      "Compatible with all standard Z-fold dispensers",
    ],
    benefits: [
      "Bulk packaging reduces ordering frequency",
      "Single-sheet dispensing controls consumption",
      "Recycled content supports sustainability goals",
      "Consistent quality across every sheet",
    ],
    image: "/images/products/z-fold-hand-towels-case-of-3000.jpg",
    gallery: [
      "/images/products/z-fold-hand-towels-case-of-3000-1.jpg",
      "/images/products/z-fold-hand-towels-case-of-3000-2.jpg",
      "/images/products/z-fold-hand-towels-case-of-3000-3.jpg",
    ],
    featured: false,
    price: 24.99,
    sku: "WS-3050",
    stock: "in-stock",
    industries: [
      "Offices",
      "Schools & Education",
      "Hospitality",
      "Industrial & Warehouses",
      "Healthcare",
    ],
    faqs: [
      {
        question: "Are these towels suitable for food-preparation areas?",
        answer:
          "Yes, the towels are food-safe and suitable for use in commercial kitchens and food-preparation zones.",
      },
      {
        question: "What are the individual sheet dimensions?",
        answer: "Each sheet measures 230 mm x 240 mm when folded.",
      },
    ],
    specifications: {
      Material: "2-ply recycled tissue",
      "Sheet Size": "230 x 240 mm (folded)",
      "Sheets Per Case": "3,000 (12 x 250)",
      Colour: "White",
      Ply: "2",
      "Case Dimensions": "380 x 250 x 340 mm",
    },
  },

  // ── Toilet Tissue & Consumables ──────────────────────────────────────
  {
    id: "prod-11",
    slug: "jumbo-toilet-rolls-pack-of-6",
    name: "Jumbo Toilet Rolls (Pack of 6)",
    category: "Toilet Tissue & Consumables",
    shortDescription:
      "Pack of 6 jumbo toilet rolls, each 400 m, for use with jumbo toilet roll dispensers.",
    description:
      "These Jumbo Toilet Rolls deliver outstanding value for high-traffic washrooms. Each 2-ply roll provides 400 m of soft, strong tissue and fits standard 76 mm core jumbo dispensers. Supplied in packs of six, they minimise storage demands while keeping your facilities well stocked.",
    features: [
      "400 m per roll for extended use between changes",
      "2-ply soft tissue with embossed finish",
      "76 mm core fits standard jumbo dispensers",
      "Pack of 6 rolls for convenient stock management",
      "Manufactured from sustainably sourced fibre",
    ],
    benefits: [
      "High meterage reduces roll-change frequency",
      "Soft, strong tissue maintains user comfort",
      "Sustainable sourcing supports environmental policies",
      "Bulk pack lowers per-unit cost",
    ],
    image: "/images/products/jumbo-toilet-rolls-pack-of-6.jpg",
    gallery: [
      "/images/products/jumbo-toilet-rolls-pack-of-6-1.jpg",
      "/images/products/jumbo-toilet-rolls-pack-of-6-2.jpg",
      "/images/products/jumbo-toilet-rolls-pack-of-6-3.jpg",
    ],
    featured: false,
    price: 18.5,
    sku: "WS-4050",
    stock: "in-stock",
    industries: [
      "Offices",
      "Schools & Education",
      "Hospitality",
      "Industrial & Warehouses",
      "Gyms & Leisure",
    ],
    faqs: [
      {
        question: "Are these rolls compatible with the WS-4001 dispenser?",
        answer:
          "Yes, they are designed to work seamlessly with our Jumbo Toilet Roll Dispenser (WS-4001) and any standard 76 mm core jumbo dispenser.",
      },
      {
        question: "Is the tissue septic-tank safe?",
        answer:
          "Yes, the tissue is fully biodegradable and safe for use with septic systems.",
      },
    ],
    specifications: {
      Material: "2-ply tissue (sustainably sourced fibre)",
      "Roll Length": "400 m",
      "Roll Diameter": "250 mm",
      "Core Diameter": "76 mm",
      "Rolls Per Pack": "6",
      Colour: "White",
    },
  },

  // ── Air Freshener Dispensers ─────────────────────────────────────────
  {
    id: "prod-12",
    slug: "compact-air-freshener-unit",
    name: "Compact Air Freshener Unit",
    category: "Air Freshener Dispensers",
    shortDescription:
      "Battery-operated compact air freshener with a 60-day fragrance refill for small to medium washrooms.",
    description:
      "The Compact Air Freshener Unit delivers consistent fragrance in washrooms, corridors, and office spaces. Its discreet design and quiet operation make it unobtrusive, while the 60-day refill canister keeps maintenance simple. A programmable interval dial lets facility managers adjust spray frequency to suit room size and footfall.",
    features: [
      "Programmable spray interval (7.5, 15, or 30 minutes)",
      "60-day refill canister included",
      "Quiet, low-vibration spray mechanism",
      "Compact wall-mounted design",
      "LED battery and canister status indicator",
    ],
    benefits: [
      "Maintains a fresh washroom environment around the clock",
      "Adjustable intervals let you balance fragrance and economy",
      "Long-life refills reduce servicing visits",
      "Discreet appearance blends with any decor",
    ],
    image: "/images/products/compact-air-freshener-unit.jpg",
    gallery: [
      "/images/products/compact-air-freshener-unit-1.jpg",
      "/images/products/compact-air-freshener-unit-2.jpg",
      "/images/products/compact-air-freshener-unit-3.jpg",
    ],
    featured: false,
    price: 39.99,
    sku: "WS-5001",
    stock: "in-stock",
    industries: ["Offices", "Hospitality", "Retail", "Healthcare"],
    faqs: [
      {
        question: "What fragrances are available?",
        answer:
          "Refills are available in Fresh Linen, Citrus Burst, Ocean Breeze, and Neutral (fragrance-free).",
      },
      {
        question: "How long do the batteries last?",
        answer:
          "Two AA batteries typically power the unit for the full 60-day refill cycle at the 15-minute setting.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "165 x 75 x 65 mm",
      "Refill Duration": "60 days",
      Power: "2 x AA batteries",
      Colour: "White",
      Mounting: "Wall-mounted (adhesive pad or screws)",
    },
  },
  {
    id: "prod-13",
    slug: "programmable-air-care-system",
    name: "Programmable Air Care System",
    category: "Air Freshener Dispensers",
    shortDescription:
      "Advanced air care system with digital timer, day/night mode, and dual-fragrance capability.",
    description:
      "The Programmable Air Care System offers full control over fragrance delivery with a digital LCD timer, day/night scheduling, and the ability to alternate between two fragrance canisters. Designed for larger facilities, it ensures consistent air quality while avoiding over-dispensing during low-occupancy hours. The robust unit is suited to demanding commercial environments.",
    features: [
      "Digital LCD timer with day/night programming",
      "Dual-canister bay for alternating fragrances",
      "Adjustable spray intervals from 1 to 60 minutes",
      "Lockable cover to prevent tampering",
      "Low-battery and empty-canister alerts",
    ],
    benefits: [
      "Day/night scheduling eliminates waste outside operating hours",
      "Dual-fragrance rotation prevents olfactory fatigue",
      "Precise interval control suits rooms of any size",
      "Digital display simplifies setup and monitoring",
    ],
    image: "/images/products/programmable-air-care-system.jpg",
    gallery: [
      "/images/products/programmable-air-care-system-1.jpg",
      "/images/products/programmable-air-care-system-2.jpg",
      "/images/products/programmable-air-care-system-3.jpg",
    ],
    featured: true,
    price: 89.0,
    sku: "WS-5002",
    stock: "in-stock",
    industries: [
      "Hospitality",
      "Offices",
      "Healthcare",
      "Gyms & Leisure",
      "Retail",
    ],
    faqs: [
      {
        question: "Can I run the system with just one canister?",
        answer:
          "Yes, the system operates normally with a single canister fitted in either bay.",
      },
      {
        question: "Does the unit require mains power?",
        answer:
          "No, it runs on 2 x D-cell batteries which last approximately 12 months under standard settings.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "220 x 110 x 90 mm",
      "Canister Capacity": "2 x 270 ml",
      Power: "2 x D-cell batteries",
      Colour: "White / Chrome accent",
      Mounting: "Wall-mounted (fixings included)",
    },
  },

  // ── Urinal & WC Sanitisers ──────────────────────────────────────────
  {
    id: "prod-14",
    slug: "automatic-urinal-sanitiser-dosing-unit",
    name: "Automatic Urinal Sanitiser Dosing Unit",
    category: "Urinal & WC Sanitisers",
    shortDescription:
      "Programmable dosing unit that automatically dispenses sanitiser into urinal pipework to prevent limescale and odour.",
    description:
      "The Automatic Urinal Sanitiser Dosing Unit connects directly to urinal flush pipework and delivers a metered dose of sanitising fluid at programmable intervals. It combats limescale build-up and odour at the source, reducing the need for manual deep cleaning. Compatible with a range of sanitiser concentrates, it is a set-and-forget solution for washroom managers.",
    features: [
      "Programmable dosing intervals via digital controller",
      "Peristaltic pump for accurate, consistent dosing",
      "Compatible with multiple sanitiser concentrate brands",
      "5-litre reservoir reduces refill frequency",
      "Battery backup retains settings during power loss",
    ],
    benefits: [
      "Prevents limescale and blockages in urinal pipework",
      "Continuous dosing keeps urinals fresh between cleans",
      "Reduces manual deep-cleaning labour",
      "Long-interval refills lower servicing costs",
    ],
    image: "/images/products/automatic-urinal-sanitiser-dosing-unit.jpg",
    gallery: [
      "/images/products/automatic-urinal-sanitiser-dosing-unit-1.jpg",
      "/images/products/automatic-urinal-sanitiser-dosing-unit-2.jpg",
      "/images/products/automatic-urinal-sanitiser-dosing-unit-3.jpg",
    ],
    featured: false,
    price: 165.0,
    sku: "WS-6001",
    stock: "in-stock",
    industries: [
      "Hospitality",
      "Offices",
      "Schools & Education",
      "Gyms & Leisure",
      "Industrial & Warehouses",
    ],
    faqs: [
      {
        question: "How often does the reservoir need refilling?",
        answer:
          "Under typical settings, the 5-litre reservoir lasts approximately 90 days, depending on the number of urinals served.",
      },
      {
        question: "Does installation require a plumber?",
        answer:
          "Basic plumbing knowledge is required to connect the unit to the flush supply. We recommend professional installation for warranty compliance.",
      },
    ],
    specifications: {
      Material: "ABS Plastic housing",
      Dimensions: "350 x 200 x 150 mm",
      "Reservoir Capacity": "5 litres",
      Power: "Mains 240 V with battery backup",
      "Dosing Range": "1-50 ml per cycle",
      Colour: "White",
    },
  },

  // ── Sanitary Bins ────────────────────────────────────────────────────
  {
    id: "prod-15",
    slug: "feminine-hygiene-disposal-bin",
    name: "Feminine Hygiene Disposal Bin",
    category: "Sanitary Bins",
    shortDescription:
      "Discreet, touch-free sanitary bin with sensor-operated lid, designed for washroom cubicles.",
    description:
      "The Feminine Hygiene Disposal Bin features a sensor-operated lid that opens hands-free, providing a discreet and hygienic disposal solution. Its slim rectangular profile fits neatly beside a WC without encroaching on cubicle space. The removable inner liner simplifies servicing and helps contain odours between collections.",
    features: [
      "Infrared sensor-operated lid for touch-free use",
      "Slim rectangular profile for cubicle installation",
      "Removable inner liner for easy servicing",
      "Odour-seal lid gasket",
      "Battery-powered sensor (up to 12 months life)",
    ],
    benefits: [
      "Touch-free operation supports hygiene standards",
      "Discreet design respects user dignity",
      "Odour-seal technology keeps cubicles fresh",
      "Compact footprint suits standard cubicle layouts",
    ],
    image: "/images/products/feminine-hygiene-disposal-bin.jpg",
    gallery: [
      "/images/products/feminine-hygiene-disposal-bin-1.jpg",
      "/images/products/feminine-hygiene-disposal-bin-2.jpg",
      "/images/products/feminine-hygiene-disposal-bin-3.jpg",
    ],
    featured: true,
    price: 56.0,
    sku: "WS-7001",
    stock: "in-stock",
    industries: [
      "Offices",
      "Schools & Education",
      "Hospitality",
      "Healthcare",
      "Retail",
    ],
    faqs: [
      {
        question: "How is the bin serviced?",
        answer:
          "Lift out the inner liner, replace the liner bag, and return it to the housing. Our managed service plans include regular scheduled collections.",
      },
      {
        question: "What is the bin capacity?",
        answer:
          "The bin has a 20-litre capacity, typically sufficient for 2 to 4 weeks between collections depending on usage.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "510 x 210 x 160 mm",
      Capacity: "20 litres",
      Power: "2 x AA batteries",
      Colour: "White",
      Mounting: "Freestanding or wall-bracket (bracket optional)",
    },
  },
  {
    id: "prod-16",
    slug: "pedal-operated-sanitary-bin",
    name: "Pedal-Operated Sanitary Bin",
    category: "Sanitary Bins",
    shortDescription:
      "Foot-pedal sanitary disposal bin offering hands-free operation without batteries.",
    description:
      "The Pedal-Operated Sanitary Bin provides reliable, battery-free hands-free operation via a robust foot pedal. The soft-close lid minimises noise, and the removable inner bucket simplifies liner changes. It is a practical, low-cost solution for organisations that prefer mechanical operation over electronic alternatives.",
    features: [
      "Foot-pedal mechanism for hands-free lid opening",
      "Soft-close lid for quiet operation",
      "Removable inner bucket with carry handle",
      "Non-slip rubber base",
      "Odour-trapping lid seal",
    ],
    benefits: [
      "No batteries or power required",
      "Quiet soft-close lid suits quiet environments",
      "Easy-clean removable bucket streamlines servicing",
      "Low purchase price for multi-cubicle roll-outs",
    ],
    image: "/images/products/pedal-operated-sanitary-bin.jpg",
    gallery: [
      "/images/products/pedal-operated-sanitary-bin-1.jpg",
      "/images/products/pedal-operated-sanitary-bin-2.jpg",
      "/images/products/pedal-operated-sanitary-bin-3.jpg",
    ],
    featured: false,
    price: 32.0,
    sku: "WS-7002",
    stock: "in-stock",
    industries: [
      "Schools & Education",
      "Industrial & Warehouses",
      "Gyms & Leisure",
      "Offices",
    ],
    faqs: [
      {
        question: "What liner bags fit this bin?",
        answer:
          "Standard 20-litre pedal-bin liners fit the inner bucket. We supply compatible liners in packs of 100.",
      },
      {
        question: "Is the pedal mechanism replaceable?",
        answer:
          "Yes, spare pedal assemblies are available should the mechanism wear over time.",
      },
    ],
    specifications: {
      Material: "Polypropylene",
      Dimensions: "470 x 200 x 170 mm",
      Capacity: "20 litres",
      Colour: "White",
      Weight: "1.2 kg",
      Mounting: "Freestanding",
    },
  },

  // ── Nappy Bins ───────────────────────────────────────────────────────
  {
    id: "prod-17",
    slug: "hands-free-nappy-disposal-unit",
    name: "Hands-Free Nappy Disposal Unit",
    category: "Nappy Bins",
    shortDescription:
      "Sensor-operated nappy disposal bin with odour-lock technology for baby-change facilities.",
    description:
      "The Hands-Free Nappy Disposal Unit is purpose-built for baby-change rooms and family-friendly washrooms. Its infrared sensor opens the lid automatically, allowing parents to dispose of nappies without touching the bin. A dual-seal odour-lock system keeps the surrounding area fresh, while the 40-litre capacity accommodates high-traffic family venues.",
    features: [
      "Infrared sensor for fully hands-free operation",
      "Dual-seal odour-lock lid system",
      "40-litre high-capacity inner bin",
      "Antimicrobial coating on external surfaces",
      "Pedal override for sensor-off situations",
    ],
    benefits: [
      "Convenient one-hand disposal while holding a child",
      "Odour-lock system keeps baby-change areas pleasant",
      "Large capacity reduces servicing frequency",
      "Antimicrobial surfaces support cleanliness between cleans",
    ],
    image: "/images/products/hands-free-nappy-disposal-unit.jpg",
    gallery: [
      "/images/products/hands-free-nappy-disposal-unit-1.jpg",
      "/images/products/hands-free-nappy-disposal-unit-2.jpg",
      "/images/products/hands-free-nappy-disposal-unit-3.jpg",
    ],
    featured: false,
    price: 78.0,
    sku: "WS-8001",
    stock: "in-stock",
    industries: [
      "Hospitality",
      "Retail",
      "Schools & Education",
      "Healthcare",
      "Gyms & Leisure",
    ],
    faqs: [
      {
        question: "What liner bags are compatible?",
        answer:
          "The unit accepts standard 50-litre bin liners. We recommend our antimicrobial nappy sack liners for optimal odour control.",
      },
      {
        question: "How do the batteries last with the sensor running?",
        answer:
          "Four D-cell batteries power the sensor for approximately 6 months under typical usage in a busy venue.",
      },
    ],
    specifications: {
      Material: "ABS Plastic with antimicrobial coating",
      Dimensions: "600 x 340 x 300 mm",
      Capacity: "40 litres",
      Power: "4 x D-cell batteries",
      Colour: "White",
      Mounting: "Freestanding",
    },
  },

  // ── Hygiene Vending Machines ─────────────────────────────────────────
  {
    id: "prod-18",
    slug: "washroom-essentials-vending-machine",
    name: "Washroom Essentials Vending Machine",
    category: "Hygiene Vending Machines",
    shortDescription:
      "Multi-column vending machine dispensing hygiene essentials including sanitary products, pain relief, and toiletries.",
    description:
      "The Washroom Essentials Vending Machine offers a self-service convenience point within your washroom facilities. Its four-column layout holds a range of products from sanitary items to personal-care essentials. Coin and contactless payment options are supported, and the reinforced steel cabinet deters vandalism. A practical amenity for workplaces, leisure centres, and hospitality venues.",
    features: [
      "Four independently configurable product columns",
      "Coin-operated and contactless payment terminal",
      "Reinforced steel cabinet with anti-vandal lock",
      "LED-lit product window for clear visibility",
      "Adjustable shelf spacing for varied product sizes",
    ],
    benefits: [
      "Generates ancillary revenue or goodwill for your facility",
      "24/7 self-service reduces front-desk enquiries",
      "Contactless payment appeals to modern users",
      "Durable steel construction ensures long service life",
    ],
    image: "/images/products/washroom-essentials-vending-machine.jpg",
    gallery: [
      "/images/products/washroom-essentials-vending-machine-1.jpg",
      "/images/products/washroom-essentials-vending-machine-2.jpg",
      "/images/products/washroom-essentials-vending-machine-3.jpg",
    ],
    featured: true,
    price: 549.0,
    sku: "WS-9001",
    stock: "low-stock",
    industries: [
      "Hospitality",
      "Gyms & Leisure",
      "Schools & Education",
      "Offices",
      "Retail",
    ],
    faqs: [
      {
        question: "What payment methods are accepted?",
        answer:
          "The machine accepts pound coins (20p, 50p, and GBP 1) and contactless card/phone payments.",
      },
      {
        question: "Can the machine be configured as free-vend?",
        answer:
          "Yes, the payment module can be bypassed so that items are dispensed at no charge, useful for employee welfare programmes.",
      },
    ],
    specifications: {
      Material: "Powder-coated steel cabinet",
      Dimensions: "730 x 480 x 200 mm",
      Columns: "4 (adjustable shelf spacing)",
      Payment: "Coin + contactless (card/NFC)",
      Power: "Mains 240 V",
      Colour: "Silver Grey",
    },
  },

  // ── Surface Hygiene Products ─────────────────────────────────────────
  {
    id: "prod-19",
    slug: "surface-disinfection-wipe-dispenser",
    name: "Surface Disinfection Wipe Dispenser",
    category: "Surface Hygiene Products",
    shortDescription:
      "Wall-mounted wipe dispenser for quick-access surface disinfection in shared workspaces and kitchens.",
    description:
      "The Surface Disinfection Wipe Dispenser mounts at point of need, allowing staff and visitors to quickly wipe down desks, equipment, and shared surfaces. It accepts standard canister refills of up to 200 wipes and features a single-pull dispensing slot that prevents over-pulling. The sealed lid keeps wipes moist between uses.",
    features: [
      "Single-pull dispensing slot prevents waste",
      "Sealed lid retains wipe moisture",
      "Accepts canisters up to 200 wipes",
      "Wall-mounted or freestanding bracket options",
      "Transparent window shows remaining wipe level",
    ],
    benefits: [
      "Encourages regular surface cleaning in shared spaces",
      "Point-of-need placement increases usage compliance",
      "Sealed canister prevents wipes drying out",
      "Low-cost, high-impact hygiene intervention",
    ],
    image: "/images/products/surface-disinfection-wipe-dispenser.jpg",
    gallery: [
      "/images/products/surface-disinfection-wipe-dispenser-1.jpg",
      "/images/products/surface-disinfection-wipe-dispenser-2.jpg",
      "/images/products/surface-disinfection-wipe-dispenser-3.jpg",
    ],
    featured: false,
    price: 36.0,
    sku: "WS-1010",
    stock: "in-stock",
    industries: [
      "Offices",
      "Gyms & Leisure",
      "Healthcare",
      "Schools & Education",
    ],
    faqs: [
      {
        question: "What wipe canisters are compatible?",
        answer:
          "The dispenser accepts standard cylindrical canisters with a diameter up to 135 mm and height up to 220 mm.",
      },
      {
        question: "Can I use this for food-safe wipes?",
        answer:
          "Yes, the dispenser is material-neutral and works with any canister wipe product, including food-safe formulations.",
      },
    ],
    specifications: {
      Material: "ABS Plastic",
      Dimensions: "280 x 160 x 160 mm",
      "Max Canister Size": "135 mm dia x 220 mm H",
      Colour: "White / Blue accent",
      Mounting: "Wall-mounted or freestanding bracket",
      Weight: "450 g (empty)",
    },
  },

  // ── Janitorial Consumables ───────────────────────────────────────────
  {
    id: "prod-20",
    slug: "multi-surface-cleaning-kit",
    name: "Multi-Surface Cleaning Kit",
    category: "Janitorial Consumables",
    shortDescription:
      "Complete cleaning starter kit including concentrated solution, microfibre cloths, and a trigger spray bottle.",
    description:
      "The Multi-Surface Cleaning Kit provides everything needed to maintain clean, presentable washroom surfaces. It includes a 1-litre concentrated cleaning solution (dilutes to make 20 litres), five colour-coded microfibre cloths, and a durable trigger spray bottle. Designed for facilities teams that need a reliable, all-in-one replenishment package.",
    features: [
      "1-litre concentrate makes up to 20 litres of solution",
      "5 colour-coded microfibre cloths for cross-contamination prevention",
      "Professional-grade 750 ml trigger spray bottle",
      "Concentrate is phosphate-free and biodegradable",
      "Supplied in a reusable carry caddy",
    ],
    benefits: [
      "All-in-one kit simplifies procurement",
      "Concentrated formula offers excellent cost-per-litre value",
      "Colour-coded cloths support HACCP and hygiene zoning",
      "Biodegradable formula aligns with environmental policies",
    ],
    image: "/images/products/multi-surface-cleaning-kit.jpg",
    gallery: [
      "/images/products/multi-surface-cleaning-kit-1.jpg",
      "/images/products/multi-surface-cleaning-kit-2.jpg",
      "/images/products/multi-surface-cleaning-kit-3.jpg",
    ],
    featured: false,
    price: 29.99,
    sku: "WS-1020",
    stock: "out-of-stock",
    industries: [
      "Offices",
      "Schools & Education",
      "Hospitality",
      "Healthcare",
      "Retail",
    ],
    faqs: [
      {
        question: "Is the cleaning solution safe for marble and granite?",
        answer:
          "The solution is pH-neutral and safe for use on natural stone, laminate, stainless steel, porcelain, and most hard surfaces.",
      },
      {
        question: "Can I purchase refill concentrate separately?",
        answer:
          "Yes, 1-litre and 5-litre refill concentrates are available separately under SKU WS-1021 and WS-1022.",
      },
    ],
    specifications: {
      "Concentrate Volume": "1 litre",
      "Dilution Ratio": "1:20",
      "Spray Bottle Capacity": "750 ml",
      "Cloths Included": "5 (colour-coded)",
      "Cloth Material": "80/20 polyester/polyamide microfibre",
      "Caddy Dimensions": "300 x 200 x 180 mm",
    },
  },

  // ── Clinical / Touch-Free Units ──────────────────────────────────────
  {
    id: "prod-21",
    slug: "clinical-sensor-operated-soap-dispenser",
    name: "Clinical Sensor-Operated Soap Dispenser",
    category: "Clinical / Touch-Free Units",
    shortDescription:
      "Medical-grade sensor soap dispenser with antimicrobial housing, engineered for clinical and care environments.",
    description:
      "The Clinical Sensor-Operated Soap Dispenser is designed to meet the stringent hygiene demands of healthcare and clinical settings. Its antimicrobial ABS housing inhibits bacterial growth on external surfaces, while the sealed cartridge system eliminates the risk of soap reservoir contamination. The long-range infrared sensor ensures reliable activation even when hands are wet or gloved.",
    features: [
      "Antimicrobial ABS housing certified to ISO 22196",
      "Sealed soap cartridge eliminates reservoir contamination",
      "Long-range infrared sensor (activation range 50-120 mm)",
      "Drip-free valve prevents residue build-up",
      "IP45-rated electronics for splash resistance",
    ],
    benefits: [
      "Meets infection-control standards for clinical environments",
      "Sealed cartridges provide verifiable hygiene chain",
      "Reliable sensor activation with wet or gloved hands",
      "Splash-resistant electronics ensure longevity in clinical washrooms",
    ],
    image: "/images/products/clinical-sensor-operated-soap-dispenser.jpg",
    gallery: [
      "/images/products/clinical-sensor-operated-soap-dispenser-1.jpg",
      "/images/products/clinical-sensor-operated-soap-dispenser-2.jpg",
      "/images/products/clinical-sensor-operated-soap-dispenser-3.jpg",
    ],
    featured: false,
    price: 139.0,
    sku: "WS-1100",
    stock: "in-stock",
    industries: ["Healthcare", "Schools & Education", "Gyms & Leisure"],
    faqs: [
      {
        question:
          "Does this dispenser meet NHS infection-control requirements?",
        answer:
          "The dispenser is designed with NHS Estates guidance in mind. We recommend confirming specific trust-level requirements with your infection-control team.",
      },
      {
        question: "What soap cartridges does it accept?",
        answer:
          "It uses proprietary 1000 ml sealed cartridges available in anti-bacterial and gentle-care formulations.",
      },
    ],
    specifications: {
      Material: "Antimicrobial ABS Plastic (ISO 22196)",
      Dimensions: "270 x 130 x 115 mm",
      Capacity: "1000 ml sealed cartridge",
      "IP Rating": "IP45",
      Colour: "White",
      Power: "4 x C-cell batteries",
    },
  },
];
