export const CATALOG_PRODUCTS = [
  {
    id: 1,
    slug: 'the-artisan-vase',
    name: 'The Artisan Vase',
    subtitle: 'Hand-thrown stoneware ceramic',
    price: 120,
    category: 'Lifestyle',
    sku: 'SK-LF-001',
    rating: 4.9,
    reviews: 42,
    inShopGrid: true,
    image: '/images/shop_artisan_vase.png',
    detailImage: '/images/shop_artisan_vase_detail.png',
    images: [
      { src: '/images/shop_artisan_vase.png', label: 'Studio View' },
      { src: '/images/product_vase_angle.jpg', label: 'Top Angle' },
      { src: '/images/shop_artisan_vase_detail.png', label: 'Stoneware Grain' },
      { src: '/images/product_vase_lifestyle.jpg', label: 'In Your Space' },
    ],
    finishes: [
      { name: 'Raw Travertine', hex: '#D4C9B0' },
      { name: 'Sienna Clay', hex: '#A56D5E' },
      { name: 'Roasted Espresso', hex: '#3C2A21' },
    ],
    description:
      'Wheel-thrown in small batches from mineral-rich clay and fired twice to achieve an unglazed, tactile travertine exterior. Its sculptural silhouette holds dried botanicals or fresh stems with effortless poise.',
    features: [
      'Hand-thrown matte stoneware with raw sandy micro-texture',
      'Watertight clear interior glaze safe for fresh botanicals',
      'Subtle asymmetrical rim shaped by hand on the wheel',
      'Felt-padded base protects timber, stone, and marble surfaces',
    ],
    details: [
      { label: 'Material', value: 'High-fired stoneware clay' },
      { label: 'Dimensions', value: '24 cm H × 16 cm Ø (9.5 cm opening)' },
      { label: 'Weight', value: '1.15 kg' },
      { label: 'Finish', value: 'Unglazed matte exterior, glazed interior' },
      { label: 'Origin', value: 'Small-batch artisan pottery studio' },
    ],
    care:
      'Rinse interior with lukewarm water and mild soap after arranging fresh stems. Wipe exterior gently with a dry soft cloth; avoid abrasive sponges.',
  },
  {
    id: 2,
    slug: 'essential-chain',
    name: 'Essential Chain',
    subtitle: 'Brushed gold minimal necklace',
    price: 350,
    category: 'Accessories',
    sku: 'SK-AC-002',
    rating: 5.0,
    reviews: 28,
    inShopGrid: true,
    image: '/images/shop_essential_chain.png',
    detailImage: '/images/product_chain_detail.jpg',
    images: [
      { src: '/images/shop_essential_chain.png', label: 'Flatlay View' },
      { src: '/images/product_chain_detail.jpg', label: 'Pendant Macro' },
      { src: '/images/product_chain_styled.jpg', label: 'Jewelry Tray' },
      { src: '/images/product_chain_clasp.jpg', label: 'Clasp Detail' },
    ],
    finishes: [
      { name: 'Brushed Gold', hex: '#D4AF37' },
      { name: 'Warm Champagne', hex: '#E3E2E0' },
    ],
    description:
      'A whisper-fine architectural link chain crafted in warm gold-plated brass, balanced with a hand-brushed organic medallion. Designed for featherlight all-day wear—luminous alone at the collarbone or layered seamlessly.',
    features: [
      'Anti-tarnish gold-plated brass safe for comfortable daily wear',
      'Hand-satin pendant catches light with soft quiet lustre',
      'Precision lobster clasp with two adjustment jump rings',
      'Arrives in a linen-lined keepsake jewelry pouch',
    ],
    details: [
      { label: 'Material', value: 'Brushed Gold-Plated Brass (Nickel-Free)' },
      { label: 'Chain Length', value: '45 cm with 41 cm & 43 cm adjusters' },
      { label: 'Pendant Drop', value: '12 mm brushed disc' },
      { label: 'Closure', value: 'Heavy-duty spring lobster clasp' },
      { label: 'Weight', value: '4.2 g' },
    ],
    care:
      'Buff gently with a dry jeweler cloth after wear, avoid direct contact with perfume or water, and store inside the included linen pouch.',
  },
  {
    id: 3,
    slug: 'washed-linen-set',
    name: 'Washed Linen Set',
    subtitle: 'Set of 4 natural linen napkins',
    price: 65,
    category: 'Lifestyle',
    sku: 'SK-LF-003',
    rating: 4.8,
    reviews: 54,
    inShopGrid: true,
    image: '/images/shop_linen_set.png',
    detailImage: '/images/brand_philosophy.png',
    images: [
      { src: '/images/shop_linen_set.png', label: 'Folded Stack' },
      { src: '/images/product_linen_table.jpg', label: 'Table Setting' },
      { src: '/images/brand_philosophy.png', label: 'Flax Weave' },
      { src: '/images/product_linen_detail.jpg', label: 'Rolled Set' },
    ],
    finishes: [
      { name: 'Undyed Flax', hex: '#D4C9B0' },
      { name: 'Terracotta Clay', hex: '#845143' },
      { name: 'Charcoal Stone', hex: '#1A1C1A' },
    ],
    description:
      'Woven from long-staple European flax and stone-washed for immediate fluid drape. These generously proportioned napkins soften with every laundered table gathering, finished with wide mitered hems.',
    features: [
      'Set of 4 oversized 45 × 45 cm dinner napkins',
      '100% European flax linen pre-washed for broken-in softness',
      'Wide 2.5 cm mitered corner tailoring with tonal stitching',
      'Naturally thermo-regulating and lint-free for glassware',
    ],
    details: [
      { label: 'Composition', value: '100% Certified European Flax (185 GSM)' },
      { label: 'Set Includes', value: '4 Dinner Napkins in reusable linen tie' },
      { label: 'Dimensions', value: '45 cm × 45 cm each' },
      { label: 'Hemming', value: '2.5 cm tailored mitered corners' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100 dyed' },
    ],
    care:
      'Machine wash cold on a gentle cycle with like colors. Line dry or tumble dry low; leave lightly unpressed for a relaxed slubbed texture.',
  },
  {
    id: 4,
    slug: 'the-lounge-chair',
    name: 'The Lounge Chair',
    subtitle: 'Oak & Boucle upholstered armchair',
    price: 1200,
    category: 'Home Accents',
    sku: 'SK-HA-004',
    rating: 4.9,
    reviews: 19,
    inShopGrid: true,
    image: '/images/shop_lounge_chair.png',
    detailImage: '/images/shop_lounge_chair_detail.png',
    images: [
      { src: '/images/shop_lounge_chair.png', label: 'Front Profile' },
      { src: '/images/product_chair_side.jpg', label: 'Side Angle' },
      { src: '/images/shop_lounge_chair_detail.png', label: 'Boucle & Oak' },
      { src: '/images/product_chair_lifestyle.jpg', label: 'Living Vignette' },
    ],
    finishes: [
      { name: 'Alabaster Boucle / Oak', hex: '#FAF9F6' },
      { name: 'Travertine / Oak', hex: '#D4C9B0' },
      { name: 'Smoked Walnut', hex: '#4F4540' },
    ],
    description:
      'Low-slung architectural seating pairing kiln-dried solid white oak joinery with deep, cloud-like nubby boucle upholstery. Engineered with a gentle reading recline that anchors quiet corners without visual heaviness.',
    features: [
      'Solid white oak frame with traditional mortise-and-tenon joinery',
      'Heavyweight Belgian-weave wool-blend boucle upholstery',
      'Multi-density natural latex & feather-wrapped seat cushion',
      'Arrives fully assembled with protective felt floor glides',
    ],
    details: [
      { label: 'Frame', value: 'FSC-certified solid white oak, matte oil finish' },
      { label: 'Upholstery', value: 'Wool & cotton boucle (60,000+ Martindale)' },
      { label: 'Dimensions', value: '74 cm W × 80 cm D × 72 cm H (Seat H: 41 cm)' },
      { label: 'Weight', value: '19.5 kg' },
      { label: 'Assembly', value: 'White-glove ready (no assembly required)' },
    ],
    care:
      'Vacuum upholstery weekly with a soft brush attachment. Blot spills immediately with a clean damp cloth; nourish oak timber annually with clear furniture oil.',
  },
  {
    id: 5,
    slug: 'handcrafted-crockery-set',
    name: 'Handcrafted Crockery Set',
    subtitle: 'Matte terracotta & stone gray',
    price: 180,
    category: 'Crockery',
    sku: 'SK-CR-005',
    rating: 4.9,
    reviews: 37,
    inShopGrid: true,
    image: '/images/collection_crockery.png',
    detailImage: '/images/product_crockery_detail.jpg',
    images: [
      { src: '/images/collection_crockery.png', label: 'Place Setting' },
      { src: '/images/product_crockery_stack.jpg', label: 'Nested Stack' },
      { src: '/images/product_crockery_detail.jpg', label: 'Glaze & Rim' },
      { src: '/images/product_crockery_overhead.jpg', label: 'Table Spread' },
    ],
    finishes: [
      { name: 'Terracotta & Stone', hex: '#845143' },
      { name: 'Chalk & Travertine', hex: '#D4C9B0' },
    ],
    description:
      'A tactile 12-piece tableware suite inspired by mineral earth tones. Subtle exposed stoneware rims frame satin-matte reactive glazes, lending quiet restaurant poise to everyday meals.',
    features: [
      '12-piece dining service for 4 (dinner plates, side plates & bowls)',
      'Lead-free reactive satin glaze resistant to cutlery marks',
      'Raised stackable foot rings save cabinet space',
      'Dishwasher, microwave, and oven safe up to 220°C',
    ],
    details: [
      { label: 'Set Contents', value: '4 × Dinner (27 cm), 4 × Side (21 cm), 4 × Bowls (16 cm)' },
      { label: 'Material', value: 'Vitrified ironstone ceramic' },
      { label: 'Glaze', value: 'Lead-free satin matte reactive finish' },
      { label: 'Thermal Safe', value: 'Dishwasher, microwave & oven safe' },
      { label: 'Total Weight', value: '6.8 kg (shipped in molded pulp crate)' },
    ],
    care:
      'Dishwasher safe on gentle cycle; avoid thermal shock by letting pieces return to room temperature before immersing in cold water.',
  },
  {
    id: 6,
    slug: 'mocha-leather-cardholder',
    name: 'Mocha Leather Cardholder',
    subtitle: 'Full-grain Italian leather',
    price: 95,
    category: 'Accessories',
    sku: 'SK-AC-006',
    rating: 4.8,
    reviews: 31,
    inShopGrid: true,
    image: '/images/collection_accessories.png',
    detailImage: '/images/product_cardholder_detail.jpg',
    images: [
      { src: '/images/collection_accessories.png', label: 'Studio Flatlay' },
      { src: '/images/product_cardholder_angle.jpg', label: 'Angled View' },
      { src: '/images/product_cardholder_detail.jpg', label: 'Stitch & Grain' },
      { src: '/images/product_cardholder_lifestyle.jpg', label: 'Everyday Carry' },
    ],
    finishes: [
      { name: 'Mocha Espresso', hex: '#3C2A21' },
      { name: 'Warm Cognac', hex: '#845143' },
    ],
    description:
      'Cut from vegetable-tanned full-grain Tuscan calfskin and saddle-stitched with waxed linen thread. Slim enough for front tailoring pockets while developing a rich mahogany patina unique to its owner.',
    features: [
      'Full-grain vegetable-tanned Italian calfskin',
      '4 beveled card slots plus central folded-bill pocket',
      'Hand-burnished beeswax edges & discreet blind-debossed seal',
      'Integrated RFID shielding woven into suede lining',
    ],
    details: [
      { label: 'Leather', value: 'Tuscan vegetable-tanned full-grain calfskin' },
      { label: 'Dimensions', value: '10.2 cm × 7.5 cm × 0.5 cm' },
      { label: 'Capacity', value: 'Up to 6 cards plus folded notes' },
      { label: 'Construction', value: 'Waxed linen stitch & beeswaxed edges' },
      { label: 'Packaging', value: 'Cotton flannel dust pouch & gift box' },
    ],
    care:
      'Keep dry and away from prolonged heat. Condition lightly once a year with neutral leather balm and buff with a cotton cloth.',
  },
];

export const LOOKBOOK_PRODUCTS = [
  {
    id: 11,
    slug: 'stoneware-ceramic-vase',
    name: 'Stoneware Ceramic Vase',
    subtitle: 'Sage beige matte finish',
    price: 120,
    category: 'Lifestyle',
    sku: 'SK-LB-011',
    rating: 4.9,
    reviews: 22,
    inShopGrid: false,
    hotspot: { x: '53%', y: '58%' },
    image: '/images/product_sage_vase_hero.jpg',
    detailImage: '/images/product_sage_vase_angle.jpg',
    images: [
      { src: '/images/product_sage_vase_hero.jpg', label: 'Studio View' },
      { src: '/images/product_sage_vase_angle.jpg', label: 'Travertine Angle' },
      { src: '/images/shop_artisan_vase_detail.png', label: 'Matte Texture' },
      { src: '/images/collection_lifestyle.png', label: 'Room Vignette' },
    ],
    finishes: [
      { name: 'Sage Beige Matte', hex: '#D4C9B0' },
      { name: 'Chalk Stone', hex: '#EAE7DF' },
    ],
    description:
      'From our Shop The Room sanctuary edit, this tapered cylindrical vessel pairs pale sage-beige mineral slip with raw speckle detailing, crafted to ground sideboards and window ledges.',
    features: [
      'Matte chalky sage-beige stoneware glaze',
      'Watertight stoneware body for cut stems or sculptural branches',
      'Soft tapered neck supports loose asymmetrical foliage',
      'Protective cork ring underneath prevents shelving scratches',
    ],
    details: [
      { label: 'Material', value: 'Speckled mineral stoneware' },
      { label: 'Dimensions', value: '22 cm H × 14 cm Ø' },
      { label: 'Weight', value: '980 g' },
      { label: 'Finish', value: 'Chalky sage-beige matte glaze' },
    ],
    care:
      'Hand wash interior with mild dish soap. Dry completely before storing in enclosed cabinetry.',
  },
  {
    id: 12,
    slug: 'hand-poured-soy-candle',
    name: 'Hand-poured Soy Candle',
    subtitle: 'Amber & Santal fragrance',
    price: 45,
    category: 'Lifestyle',
    sku: 'SK-LB-012',
    rating: 5.0,
    reviews: 61,
    inShopGrid: false,
    hotspot: { x: '71%', y: '70%' },
    image: '/images/product_candle_hero.jpg',
    detailImage: '/images/product_candle_lit.jpg',
    images: [
      { src: '/images/product_candle_hero.jpg', label: 'Studio View' },
      { src: '/images/product_candle_lit.jpg', label: 'Lit Ambience' },
      { src: '/images/product_candle_detail.jpg', label: 'Amber & Santal' },
      { src: '/images/collection_lifestyle.png', label: 'Room Vignette' },
    ],
    finishes: [
      { name: 'Smoked Amber Vessel', hex: '#845143' },
      { name: 'Frosted Alabaster', hex: '#EAE7DF' },
    ],
    description:
      'Small-batch botanical soy & coconut wax housed in a reusable smoked amber apothecary jar. Layered with warm mysore santal, spiced cardamom pod, and resinous golden amber for a grounding evening ritual.',
    features: [
      '55+ hours clean burn from pure non-GMO soy & coconut wax',
      'Untreated braided cotton wick for soot-free diffusion',
      'Fine perfume-grade Amber, Santal, Cardamom & Cedar notes',
      'Reusable heavy-walled smoked amber glass vessel',
    ],
    details: [
      { label: 'Net Wax Weight', value: '260 g (9.2 oz)' },
      { label: 'Burn Time', value: '55–60 hours' },
      { label: 'Fragrance Pyramid', value: 'Cardamom / Indian Santal / Dry Amber' },
      { label: 'Vessel', value: 'Mouth-blown amber glass with linen box' },
    ],
    care:
      'Trim cotton wick to 5 mm before each lighting and burn for at least 2 hours on first use for an even wax pool.',
  },
  {
    id: 13,
    slug: 'washed-linen-cushion',
    name: 'Washed Linen Cushion',
    subtitle: 'Fringed edge natural linen',
    price: 75,
    category: 'Home Accents',
    sku: 'SK-LB-013',
    rating: 4.8,
    reviews: 33,
    inShopGrid: false,
    hotspot: { x: '25%', y: '62%' },
    image: '/images/product_cushion_hero.jpg',
    detailImage: '/images/product_cushion_detail.jpg',
    images: [
      { src: '/images/product_cushion_hero.jpg', label: 'Studio View' },
      { src: '/images/product_cushion_detail.jpg', label: 'Fringed Edge' },
      { src: '/images/product_cushion_styled.jpg', label: 'Styled Sofa' },
      { src: '/images/collection_lifestyle.png', label: 'Room Vignette' },
    ],
    finishes: [
      { name: 'Natural Oat', hex: '#D4C9B0' },
      { name: 'Warm Cream', hex: '#FAF9F6' },
    ],
    description:
      'Generously filled sanctuary throw pillow tailored from enzyme-washed European flax with soft hand-frayed eyelash edges. Adds relaxed organic warmth to structured timber seating and beds.',
    features: [
      'Removable cover with hidden brass YKK zip closure',
      'Hand-frayed 1.5 cm eyelash fringe along all four edges',
      'Includes plush ethically sourced duck-feather insert',
      'Pre-washed heavyweight flax becomes softer over time',
    ],
    details: [
      { label: 'Cover Fabric', value: '100% Heavyweight Belgian Flax (230 GSM)' },
      { label: 'Dimensions', value: '50 cm × 50 cm' },
      { label: 'Insert Included', value: 'Responsible-down feather pad' },
      { label: 'Closure', value: 'Concealed brass zipper' },
    ],
    care:
      'Remove insert and machine wash cover cold in a laundry bag; reshape gently while damp and dry flat.',
  },
];

export const ALL_PRODUCTS = [...CATALOG_PRODUCTS, ...LOOKBOOK_PRODUCTS];

export const BEST_SELLER_IDS = [1, 2, 4, 3];

export function getProductByIdOrSlug(idOrSlug) {
  if (idOrSlug === null || idOrSlug === undefined) return null;
  const normalized = String(idOrSlug).trim().toLowerCase();
  return (
    ALL_PRODUCTS.find(
      (item) =>
        item.slug.toLowerCase() === normalized ||
        String(item.id) === normalized
    ) || null
  );
}

