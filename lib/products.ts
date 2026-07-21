import type { Product } from "@/types/product";

/**
 * Frontend fallback catalogue (real products & images from shreegautamsteel.com).
 * Mirrors the backend seed; used when the API is unreachable so the site — and
 * its real product photos — always render. Keep both files in sync.
 */
export const products: Product[] = [
  {
    id: "sg-001",
    slug: "tri-ply-cookware",
    name: "Tri Ply Cookware",
    category: "Cookware",
    tagline: "Triply body, gas-ready, built for the line.",
    description:
      "Professional triply construction — stainless steel bonded over an aluminium core over stainless steel. Food-grade, warp-resistant, supplied with steel lid and handle.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/11/563241226/FM/AJ/RV/2215651/stainless-steel-utensils-500x500.jpg",
    specs: {
      material: "Stainless Steel (Triply)",
      capacity: "5 L",
      finish: "Matte Finish",
    },
    price: "₹ 450 / Piece",
    moq: 50,
    featured: true,
  },
  {
    id: "sg-002",
    slug: "triply-cookware-set",
    name: "Triply Cookware Set",
    category: "Cookware",
    tagline: "A four-piece triply set, induction and gas ready.",
    description:
      "Complete 4-piece triply cookware set for kitchens and premium retail lines. Even, edge-to-edge heat with no hot spots; dishwasher safe.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/11/563241226/FM/AJ/RV/2215651/stainless-steel-utensils-500x500.jpg",
    specs: {
      material: "Stainless Steel (Triply)",
      capacity: "4-piece set",
      finish: "Mirror / Matte",
    },
    price: "₹ 450 / Kg",
    moq: 50,
    featured: true,
  },
  {
    id: "sg-003",
    slug: "triply-stainless-steel-casserole",
    name: "Triply Stainless Steel Casserole",
    category: "Cookware",
    tagline: "Triply casserole with steel lid — canteen-grade.",
    description:
      "Food-grade triply casserole / hot pot, offered as a graduated set of four with matching steel lids. Round form, side handles, built for volume service.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/11/563244337/UL/LH/VO/2215651/castrole-500x500.jpg",
    specs: {
      material: "Stainless Steel (Triply)",
      capacity: "1.5 L – 5 L",
      finish: "Steel Finish",
      dimensions: "Set of 4",
    },
    price: "₹ 450 / Piece",
    moq: 50,
    featured: true,
  },
  {
    id: "sg-004",
    slug: "tri-ply-stainless-steel-saucepan",
    name: "Tri Ply Stainless Steel Saucepan",
    category: "Cookware",
    tagline: "2.5 mm triply saucepan, mirror-finished.",
    description:
      "Heavy 2.5 mm triply saucepan with steel lid and handle, induction compatible, single pouring spout. Available across 14, 16 and 18 cm.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/11/563241226/FM/AJ/RV/2215651/stainless-steel-utensils-500x500.jpg",
    specs: {
      material: "Stainless Steel (Triply)",
      gauge: "2.5 mm",
      capacity: "2.5 L",
      finish: "Mirror Finish",
      dimensions: "14 / 16 / 18 cm",
    },
    price: "₹ 400 / Piece",
    moq: 50,
    featured: false,
  },
  {
    id: "sg-005",
    slug: "stainless-steel-see-through-container-set",
    name: "Stainless Steel See Through Container Set",
    category: "Storage",
    tagline: "See-through storage, set of three.",
    description:
      "SS 202 round kitchen containers with see-through lids for grains, pulses and spices. Graduated set of three (200 / 350 / 500 ml).",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/340982700/JY/WR/RC/2215651/stainless-steel-see-through-container-500x500.jpg",
    specs: {
      material: "Stainless Steel 202",
      capacity: "200 / 350 / 500 ml",
      finish: "Mirror",
      dimensions: "Set of 3",
    },
    price: "₹ 425 / Piece",
    moq: 20,
    featured: true,
  },
  {
    id: "sg-006",
    slug: "silver-stainless-steel-container-set",
    name: "Silver Stainless Steel Container Set",
    category: "Storage",
    tagline: "Textured canisters, set of four.",
    description:
      "SS 202 round storage container set of four for pantry and kitchen ranges, 1 L to 3 L, textured finish, silver.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/340982700/JY/WR/RC/2215651/stainless-steel-see-through-container-500x500.jpg",
    specs: {
      material: "Stainless Steel 202",
      capacity: "1 L – 3 L",
      finish: "Textured",
      dimensions: "Set of 4",
    },
    price: "₹ 335 / Set",
    moq: 30,
    featured: false,
  },
  {
    id: "sg-007",
    slug: "shree-gautam-stainless-steel-spice-box",
    name: "Shree Gautam Stainless Steel Spice Box",
    category: "Spice Boxes",
    tagline: "Seven-cup masala dabba with see-through lid.",
    description:
      "Classic round spice box with seven inner cups and a spoon, single lid with glass, mirror finish. Best-seller across retail and export channels.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/340981502/TB/CK/KW/2215651/stainless-steel-belly-spice-box-500x500.jpg",
    specs: {
      material: "Stainless Steel",
      capacity: "750 g (7 × 75 ml)",
      finish: "Mirror Finish",
    },
    price: "₹ 250 / Piece",
    moq: 50,
    featured: true,
  },
  {
    id: "sg-008",
    slug: "6-in-1-compartment-plate",
    name: "6 In 1 Compartment Plate",
    category: "Thalis",
    tagline: "Five-compartment thali for hotels and canteens.",
    description:
      "SS 202 compartment plate for hospitality and institutional supply. Five compartments, 13-inch, silver finish; a staple for messes and caterers.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/393511070/BD/HM/MI/2215651/6-in-1-compartment-plate-500x500.jpeg",
    specs: {
      material: "Stainless Steel 202",
      finish: "Silver Finish",
      dimensions: "13 inch · 5 compartments",
    },
    price: "₹ 270 / Kg",
    moq: 100,
    featured: true,
  },
  {
    id: "sg-009",
    slug: "ss-bhojan-thali",
    name: "SS Bhojan Thali",
    category: "Thalis",
    tagline: "Polished bhojan thali for catering.",
    description:
      "Durable multi-compartment bhojan thali with a polished, food-safe finish. 32 gauge, (11 × 13) inches — built for catering and canteen supply.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/393511070/BD/HM/MI/2215651/6-in-1-compartment-plate-500x500.jpeg",
    specs: {
      material: "Stainless Steel",
      gauge: "32 gauge",
      finish: "Polished",
      dimensions: "(11 × 13) inch",
    },
    price: "₹ 270 / Kg",
    moq: 50,
    featured: false,
  },
  {
    id: "sg-010",
    slug: "stainless-steel-serving-bowl-set",
    name: "Stainless Steel Serving Bowl Set",
    category: "Serveware",
    tagline: "Three-piece serving set, glossy finish.",
    description:
      "Graduated 3-piece serving bowl / handi set with a glossy finish for table service and gifting ranges (300 / 450 / 600 ml).",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/340982255/UG/DI/QH/2215651/3-piece-stainless-steel-handi-set-500x500.jpg",
    specs: {
      material: "Stainless Steel",
      capacity: "300 / 450 / 600 ml",
      finish: "Glossy",
      dimensions: "3-piece set",
    },
    price: "₹ 160 / Set",
    moq: 50,
    featured: true,
  },
];
