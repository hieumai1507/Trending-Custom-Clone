// contact-us-data.ts
export const concernOptions = [
  {
    value: "where-is-my-order",
    label: "Where is my order (and ETA delivery)?",
  },
  { value: "modify-order", label: "I want to modify my order" },
  { value: "cancel-order", label: "I want to cancel my order" },
  { value: "incorrect-order", label: "I received an incorrect/damaged order" },
  { value: "tracking-update", label: "Tracking doesn’t update" },
  {
    value: "tracking-delivered",
    label: "Tracking said delivered but I haven’t received my order",
  },
  { value: "discount-issue", label: "Discount code issue" },
  { value: "product-questions", label: "Questions about product(s)" },
  { value: "cart-issue", label: "I can’t add to the cart/checkout" },
  { value: "report-bug", label: "Report a website bug" },
];

export const helpLinks = [
  { label: "Track my order", link: "/pages/tracking-order" },
  { label: "Shipping & Delivery", link: "/" },
  { label: "FAQs", link: "/pages/faqs" },
  { label: "Returns & Refunds", link: "/pages/replacement-refund" },
  {
    label: "Cancellation & Modification",
    link: "/pages/cancellation-modification",
  },
];

export const contactEmail = "contact firefightershop.org";
export const responseTime = "24-48 hours";
