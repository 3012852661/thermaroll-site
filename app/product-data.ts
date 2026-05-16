export type ProductPage = {
  applications: string[];
  description: string;
  faqs: { answer: string; question: string }[];
  highlights: string[];
  keywords: string[];
  slug: string;
  specs: { label: string; value: string }[];
  title: string;
};

export const productPages: ProductPage[] = [
  {
    applications: [
      "Retail POS and supermarket checkout",
      "Restaurant and cafe receipt printers",
      "Payment terminals and handheld devices",
      "Distributor private label programs",
    ],
    description:
      "Wholesale POS receipt rolls for importers, distributors and chain-store buyers, with custom sizes, BPA-free paper options and export-ready cartons.",
    faqs: [
      {
        question: "Can I request 57mm and 80mm thermal receipt roll samples?",
        answer:
          "Yes. Noviwon can prepare common 57mm and 80mm POS receipt roll samples so buyers can confirm image quality, smoothness, core, roll length and carton packing before bulk orders.",
      },
      {
        question: "Do you support private label cartons for POS rolls?",
        answer:
          "Yes. We support neutral cartons, customer brand cartons, shrink packs and retail-ready packing for distributors and chain-store procurement teams.",
      },
      {
        question: "Can POS receipt rolls be mixed with other paper products?",
        answer:
          "Yes. Noviwon Global can help consolidate receipt rolls, labels and other paper-based materials into one shipment when order quantities and carton plans are confirmed.",
      },
    ],
    highlights: [
      "BPA-free and standard thermal paper options",
      "Smooth cut, stable winding and low-dust converting",
      "Custom core, roll length, carton and pallet plan",
      "QC photos and export documents before shipment",
    ],
    keywords: [
      "POS receipt rolls wholesale",
      "thermal paper rolls supplier",
      "80mm thermal paper rolls",
      "57mm receipt rolls",
    ],
    slug: "thermal-paper-rolls",
    specs: [
      { label: "Popular widths", value: "57mm, 80mm, 82.5mm or custom" },
      { label: "Roll diameter", value: "40mm, 50mm, 70mm, 80mm and custom" },
      { label: "Core", value: "Plastic core, paper core or coreless options" },
      { label: "Packing", value: "Shrink wrap, 5-roll packs, cartons, pallets" },
    ],
    title: "Thermal Paper Rolls Wholesale",
  },
  {
    applications: [
      "Shipping labels and logistics waybills",
      "Barcode labels for warehouses",
      "Retail price labels and shelf labels",
      "Inventory identification and carton labels",
    ],
    description:
      "Direct thermal label rolls for logistics, retail and warehouse use, available with permanent or removable adhesive and custom die-cut sizes.",
    faqs: [
      {
        question: "What thermal label roll sizes can you supply?",
        answer:
          "Common sizes include 40x30mm, 50x30mm, 60x40mm and 100x150mm. Custom die-cut sizes can be quoted when artwork, label gap, roll direction and core size are confirmed.",
      },
      {
        question: "Can I choose adhesive type?",
        answer:
          "Yes. Permanent adhesive, removable adhesive and application-specific glue options can be discussed according to surface material and end-use environment.",
      },
      {
        question: "Do you support blank and printed labels?",
        answer:
          "Yes. Buyers can request blank thermal labels, preprinted labels, barcode-ready stock and private label packing.",
      },
    ],
    highlights: [
      "Blank or preprinted direct thermal labels",
      "Permanent, removable and custom adhesive options",
      "Barcode, shipping and warehouse label formats",
      "Stable die cutting and roll winding for automatic printers",
    ],
    keywords: [
      "thermal label rolls",
      "direct thermal labels supplier",
      "shipping label rolls wholesale",
      "barcode label rolls",
    ],
    slug: "thermal-label-rolls",
    specs: [
      { label: "Common sizes", value: "40x30mm, 50x30mm, 60x40mm, 100x150mm" },
      { label: "Adhesive", value: "Permanent, removable or custom glue" },
      { label: "Core", value: "25mm, 40mm, 76mm or custom" },
      { label: "Finish", value: "Blank, printed, perforated or special die-cut" },
    ],
    title: "Thermal Label Rolls Supplier",
  },
  {
    applications: [
      "Retail chain receipt branding",
      "Promotional back print for distributors",
      "Warning text and compliance messages",
      "OEM supply programs with private carton design",
    ],
    description:
      "Custom printed thermal paper rolls with logo printing, back print, warning text, color cores and private label packaging for brand owners and distributors.",
    faqs: [
      {
        question: "How many colors can be printed on thermal paper rolls?",
        answer:
          "Common projects use 1-4 color printing depending on artwork and volume. We can review logo files and print areas before quoting.",
      },
      {
        question: "Can you print on the back side of thermal receipt rolls?",
        answer:
          "Yes. Back print is common for brand messaging, coupons, terms, warning text and distributor information.",
      },
      {
        question: "What files are needed for custom printed rolls?",
        answer:
          "Vector artwork is preferred, such as AI, PDF or EPS. Buyers should also provide roll size, print color, packing quantity and target order volume.",
      },
    ],
    highlights: [
      "Logo, back print, warning text and coupon printing",
      "Private label carton and retail packing support",
      "Color core, custom roll size and brand specifications",
      "Pre-production sample confirmation available",
    ],
    keywords: [
      "custom printed thermal paper",
      "printed receipt rolls supplier",
      "logo thermal paper rolls",
      "private label thermal paper",
    ],
    slug: "custom-printed-thermal-paper",
    specs: [
      { label: "Printing", value: "1-4 colors, logo, back print or warning text" },
      { label: "Artwork", value: "AI, PDF, EPS or high-resolution print file" },
      { label: "Roll format", value: "POS rolls, ATM rolls or custom receipt rolls" },
      { label: "Packing", value: "Private label carton, retail pack, export pallet" },
    ],
    title: "Custom Printed Thermal Paper Rolls",
  },
];

export function getProductPage(slug: string) {
  return productPages.find((product) => product.slug === slug);
}
