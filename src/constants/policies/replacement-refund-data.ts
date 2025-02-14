// policyData.js
const ReplacementReFundData = {
  fullRefund: {
    description:
      "The following reasons are covered by our 30-day FULL Refund/ FREE Replacement Policy. If you are offered a refund or a replacement order, there will be no need to return the received item since our products are customized.",
    reasons: [
      "Item received is different from the description or the product customization information.",
      "Item received is defective/damaged/broken/does not work properly.",
      "Incorrect or mismatched size.",
      "Lost/missing items.",
    ],
  },
  noRefund: {
    title: "No Refund & Replacement",
    description:
      "The following reasons are NOT covered by our 30-day Refund & Replacement Policy, and we are not liable for these issues. Additionally, please allow for differences of up to 20% between advertised images and the actual item due to lighting during photo shoots or variations in monitor displays.",
    reasons: [
      "Request for a refund/replacement is after 30 days of product delivery.",
      "Pick the wrong size, product, address, custom information, etc.",
      "Product damaged by misuse, mishandling, or poor maintenance.",
      "Items that have been washed, worn, or soiled and damaged resulting from the customer's handling.",
      "Personal Reasons due to personal taste, change of mind, etc.",
      "Products purchased during a sale or any promotion.",
    ],
  },
  procedure: {
    title: "Refund and Replacement Service Procedure",
    steps: [
      {
        title: "Step 1",
        description: "Contact Customer Service",
        link: {
          text: "Here",
          url: "#",
        },
      },
      {
        title: "Step 2",
        description:
          "Provide video/ photos of the defective product you received and the package's cover including the detailed shipping label to best assist you.",
      },
      {
        title: "Step 3",
        description: "Get Refund or Replacement after we received your ticket.",
      },
    ],
  },
  refundTime: {
    title: "Refund Time",
    description:
      "If your refund is approved, the funds are applied to the same payment method that you used to buy the item. Here's how long it takes for a refund to appear on your account or statement:",
    methods: [
      {
        title: "Credit/Debit Card",
        time: "5-14 business days",
      },
      {
        title: "Paypal",
        time: "3-5 business days (up to 30 days if pay with card)",
      },
    ],
  },
};

export default ReplacementReFundData;
