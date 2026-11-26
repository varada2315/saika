import {
  FREE_SHIPPING_THRESHOLD,
  GIFT_WRAP_FEE,
  formatCurrency,
} from '../utils/currency.js';

export const FOOTER_POLICY_GROUPS = [
  {
    id: 'client-care',
    label: 'Client Care',
    keys: ['shipping', 'returns', 'care', 'faq'],
  },
  {
    id: 'legal',
    label: 'Legal & Privacy',
    keys: ['privacy', 'terms', 'cookies'],
  },
];

export const FOOTER_POLICIES = {
  privacy: {
    key: 'privacy',
    category: 'Legal & Privacy',
    title: 'Privacy Policy',
    shortLabel: 'Privacy Policy',
    lastUpdated: 'November 2026',
    intro:
      'At The Saika Store, safeguarding your personal information is foundational to the discretion and trust of our client concierge service.',
    highlights: [
      { label: 'Data Practice', value: 'Zero third-party selling' },
      { label: 'Collection Scope', value: 'Orders & direct inquiries' },
      { label: 'Privacy Contact', value: 'Thesaikastore@gmail.com' },
    ],
    sections: [
      {
        heading: 'Information We Collect',
        body: 'We collect only the details necessary to fulfill your requests, coordinate delivery, and maintain tailored client support.',
        bullets: [
          'Contact information you provide directly, including name, email address, telephone number, and concierge notes',
          'Fulfillment preferences such as delivery address, gift-wrap instructions, and saved wishlist selections',
          'Essential session identifiers required to preserve your shopping bag, wishlist, and active storefront route',
        ],
      },
      {
        heading: 'How Information Is Used',
        body: 'Your information is used strictly to process orders, communicate dispatch updates, and answer styling or product inquiries. We never sell, rent, or trade client records to external marketing brokers.',
      },
      {
        heading: 'Access & Deletion Rights',
        body: 'You may request a copy, correction, or complete deletion of your contact records at any time by emailing Thesaikastore@gmail.com from your registered address.',
      },
    ],
  },

  terms: {
    key: 'terms',
    category: 'Legal & Privacy',
    title: 'Terms & Conditions',
    shortLabel: 'Terms & Conditions',
    lastUpdated: 'November 2026',
    intro:
      'By browsing or placing an order through The Saika Store digital flagship, you agree to the terms governing our curated collections and client services.',
    highlights: [
      { label: 'Store Currency', value: 'Indian Rupees (INR / ₹)' },
      { label: 'Craft Standard', value: 'Small-batch artisan runs' },
      { label: 'Gift Presentation', value: `+${formatCurrency(GIFT_WRAP_FEE, { decimals: true })} optional wrap` },
    ],
    sections: [
      {
        heading: 'Artisan Variations',
        body: 'At Saika, we believe beauty lies in the details. Our collections are thoughtfully curated, with each piece carrying its own charm and character. Subtle variations in colour, texture, finish, or form may occur, making every item uniquely yours. These delicate differences are not imperfections, but a reflection of individuality, craftsmanship, and the beauty of the unexpected.',
      },
      {
        heading: 'Pricing & Promotions',
        body: 'All product prices are stated in Indian Rupees (INR) and remain subject to current studio availability until checkout confirmation.',
        bullets: [
          'Promotional codes such as SAIKA10 apply to eligible merchandise subtotals before optional gift-wrapping fees',
          `Signature luxury gift wrapping may be selected in your bag for ${formatCurrency(GIFT_WRAP_FEE, { decimals: true })}`,
          'If a small-batch item becomes unavailable simultaneously during checkout, we issue a prompt notification and full refund',
        ],
      },
      {
        heading: 'Intellectual Property',
        body: 'All editorial copy, product photography, visual motifs, and brand marks on The Saika Store remain the exclusive property of Saika Store and may not be reproduced or distributed commercially without prior written consent.',
      },
    ],
  },

  shipping: {
    key: 'shipping',
    category: 'Client Care',
    title: 'Shipping & Returns',
    shortLabel: 'Shipping & Returns',
    lastUpdated: 'November 2026',
    intro:
      'Every Saika piece is inspected by hand, cushioned in plastic-free protective materials, and dispatched in keepsake packaging.',
    highlights: [
      { label: 'Complimentary Tier', value: `Orders over ${formatCurrency(FREE_SHIPPING_THRESHOLD)}` },
      { label: 'Studio Dispatch', value: '1–2 business days' },
      { label: 'Return Window', value: '14 days from delivery' },
    ],
    sections: [
      {
        heading: 'Dispatch & Transit',
        body: `Orders totaling ${formatCurrency(FREE_SHIPPING_THRESHOLD)} or more automatically qualify for complimentary express courier shipping.`,
        bullets: [
          'Orders leave our studio within 1–2 business days of confirmation with live tracking updates',
          'Ceramics, linens, jewelry, and leather goods arrive via insured courier within 3–6 business days',
          'Furniture accents such as The Lounge Chair travel via scheduled white-glove carrier (5–10 business days)',
        ],
      },
      {
        heading: 'Packaging Standards',
        body: 'Fragile stoneware ceramics and dining crockery ship in custom-molded biodegradable pulp cradles and double-walled cartons for safe transit.',
      },
      {
        heading: '14-Day Mindful Returns',
        body: 'Should an object not harmonize with your space, unused items in original condition and packaging are eligible for return or exchange within 14 days of delivery.',
      },
    ],
  },

  returns: {
    key: 'returns',
    category: 'Client Care',
    title: 'Refund & Exchange Policy',
    shortLabel: 'Refunds & Exchanges',
    lastUpdated: 'November 2026',
    intro:
      'We stand behind the longevity and tactile quality of every curated piece, offering swift resolution should anything arrive below expectation.',
    highlights: [
      { label: 'Breakage Notice', value: 'Within 48 hours' },
      { label: 'Pickup Scheduling', value: '2–3 business days' },
      { label: 'Refund Processing', value: '5–7 business days' },
    ],
    sections: [
      {
        heading: 'Transit Damage Protection',
        body: 'In the rare event stoneware ceramic or crockery sustains transit damage, please photograph the outer crate and affected item within 48 hours of delivery and email Thesaikastore@gmail.com for a complimentary replacement.',
      },
      {
        heading: 'Return Eligibility',
        bullets: [
          'Pieces must be unused, unwashed, and returned inside original dust pouches, gift boxes, or protective crates',
          'Personalized or custom trade commissions are final sale unless damaged upon arrival',
          'Reverse courier pickup is arranged within 2–3 business days following concierge confirmation',
        ],
      },
      {
        heading: 'Refund Settlement',
        body: 'Once our studio completes inspection, approved refunds are credited back to your original payment method within 5–7 business days, or converted immediately into store credit upon request.',
      },
    ],
  },

  care: {
    key: 'care',
    category: 'Client Care',
    title: 'Material & Care Guide',
    shortLabel: 'Material & Care',
    lastUpdated: 'November 2026',
    intro:
      'Gentle routine care allows natural clay, brushed metalwork, European flax, and solid oak to develop a quiet, enduring patina over decades.',
    highlights: [
      { label: 'Ceramics', value: 'Mild hand rinse / wipe dry' },
      { label: 'Gold Finish', value: 'Soft dry buff cloth' },
      { label: 'Flax Linen', value: 'Cold gentle wash, line dry' },
    ],
    sections: [
      {
        heading: 'Stoneware & Crockery',
        body: 'Rinse vessel interiors with mild soap after fresh botanicals and dust unglazed travertine exteriors with a dry microfiber cloth. Vitrified crockery is dishwasher safe on gentle settings while avoiding abrupt thermal shock.',
      },
      {
        heading: 'Brushed Jewelry & Full-Grain Leather',
        bullets: [
          'Brushed Gold Jewelry: Buff gently with a soft dry cloth, keep away from perfumes, and store flat inside the supplied linen pouch',
          'Vegetable-Tanned Leather: Keep away from direct heat or moisture; condition lightly once annually with neutral balm',
        ],
      },
      {
        heading: 'Linen Textiles & Solid Oak',
        body: 'Launder European flax napkins and cushion covers cold on delicate cycles and dry flat. Vacuum boucle upholstery softly with a brush attachment and oil white oak timber once per year.',
      },
    ],
  },

  faq: {
    key: 'faq',
    category: 'Client Care',
    title: 'Concierge & FAQs',
    shortLabel: 'Concierge FAQs',
    lastUpdated: 'November 2026',
    intro:
      'Direct guidance on gifting presentations, promotional offers, and interior trade consultations from The Saika Store team.',
    highlights: [
      { label: 'Promo Privilege', value: 'Code SAIKA10 (10% Off)' },
      { label: 'Concierge Desk', value: '+91 8208220160' },
      { label: 'Trade Inquiries', value: 'Finish swatches available' },
    ],
    sections: [
      {
        heading: 'Promotions & Gift Presentation',
        bullets: [
          'Enter code SAIKA10 inside your Shopping Bag drawer to receive 10% off your order',
          `Toggle Signature Luxury Gift Wrapping (+${formatCurrency(GIFT_WRAP_FEE, { decimals: true })}) for ribbon-tied cotton-paper presentation`,
          'Printed receipts automatically exclude item pricing when gift wrapping is active',
        ],
      },
      {
        heading: 'Product Authenticity & Sourcing',
        body: 'Every object in the collection is vetted directly with independent ceramicists, Italian tanneries, European flax mills, and FSC-certified timber workshops for ethical small-batch provenance.',
      },
      {
        heading: 'Interior Trade & Styling Consultations',
        body: 'Architects, interior stylists, and hospitality projects seeking multi-unit quotes or material samples can connect directly via Thesaikastore@gmail.com or +91 8208220160.',
      },
    ],
  },

  cookies: {
    key: 'cookies',
    category: 'Legal & Privacy',
    title: 'Cookie Policy',
    shortLabel: 'Cookie Policy',
    lastUpdated: 'November 2026',
    intro:
      'We keep browser storage strictly essential and transparent so your curation experience remains fluid without invasive tracking.',
    highlights: [
      { label: 'Session Storage', value: 'Bag, Wishlist & Route' },
      { label: 'Ad Trackers', value: 'None embedded' },
      { label: 'Control', value: 'Manage via browser settings' },
    ],
    sections: [
      {
        heading: 'Essential Storefront Storage',
        body: 'Strictly necessary browser memory enables core shopping functionality across page transitions without requiring an account sign-in.',
        bullets: [
          'Preserves Shopping Bag quantities, Wishlist selections, and active product views',
          'Retains optional gift-wrapping and applied promo code selections during your session',
        ],
      },
      {
        heading: 'Zero Third-Party Ad Pixels',
        body: 'The Saika Store does not deploy behavioral advertising beacons, cross-site retargeting networks, or third-party data broker scripts.',
      },
      {
        heading: 'Browser Controls',
        body: 'You can clear or disable cookies and local site data anytime inside your browser privacy preferences; doing so may reset unsaved items held in your shopping bag.',
      },
    ],
  },
};

export const FOOTER_POLICY_LIST = Object.values(FOOTER_POLICIES);

export function getFooterPolicy(policyKey) {
  if (!policyKey) return null;
  return FOOTER_POLICIES[policyKey] || null;
}
