import {
  Truck,
  Package,
  Edit,
  RotateCcw,
  ShoppingCart,
  Percent,
  CreditCard,
  MessageCircle,
} from "lucide-react";

export interface FaqItemContent {
  content?: string[];
  imageSrc?: string;
  imageAlt?: string;
  list?: string[];
}

export type FaqItemAnswer = string | FaqItemContent;

export interface FaqItem {
  id: string;
  question: string;
  answer: FaqItemAnswer[];
}

export const faqData: FaqItem[] = [
  {
    id: "1",
    question: "How long does the shipment take? When will I receive my order?",
    answer: [
      "Orders typically arrive within 10-25 business days from the day orders were placed, depending on factors such as the type of product, production/ shipping time, and any unforeseen circumstances. You can check the estimated shipping and delivery date on the product page:",

      "Besides, visit our Shipping Policy to check the estimated production and shipping time for a specific item: firefightershop.org. We strive to fulfill orders as quickly as possible and provide regular updates on the progress of your shipment.",
      "To get an accurate estimate for your specific order, we recommend visiting our tracking page. Simply go to 'Track order' on  firefightershop.org and enter your order number and email address. You'll be able to view all the details related to your order, including the estimated shipping time.",
      "If you require any further assistance or information, please don't hesitate to contact us. We're here to help!",
    ],
  },
  {
    id: "2",
    question: "How are my shirts sized?",
    answer: [
      "At present, we offer a variety of shirt types, including Classic Tee, Women's Tee, Sweatshirt, Hoodie, etc. All our shirts are pre-shrunk and available in American sizes. You can visit our size chart here to get more details: https:// firefightershop.org/pages/size-chart.",
      "Please note that there might be a ±1.0 inches difference due to manual measurement and production processes.",
    ],
  },
  {
    id: "3",
    question: "How can I modify my order?",
    answer: [
      "Please follow the instructions below:",
      "Step 1: Track your order. Click ",
      {
        content: [
          'Click "Track Order" in our website, fill in order number and your email address to track.',
          "Order 2+ items to SAVE 10% using code: TRC10",
        ],
      },
      "Step 2: At the order tracking page, you can modify the design by clicking on 'Edit personalized'. After finishing modification, click 'Save personalization' to update the design.",
      "If you are unable to do it, please click 'Edit order' at the bottom, we will assist you via email.",
    ],
  },
  {
    id: "4",
    question: "How can I request a replacement/refund?",
    answer: [
      "We stand behind our quality and offer a 100% quality guarantee on any items purchased from our store. If there is any problem with the item you received, please send a photo of the defective item to us via our contact form within 30 days since the delivery day. We'll make it right!",
    ],
  },
  {
    id: "5",
    question: "How can I change or remove items in my cart?",
    answer: [
      "If you want to edit your design right after adding the item to your shopping cart, please click in Edit design button. It will lead you to the product page where you can freely change the details you want. Click in Save Personalization to save the new design. Then you can continue to complete your purchase.",
      "If you cannot find the Edit Design button, you can just remove the incorrect item and redesign it to save time.",
      "To remove an item from your cart, you can either enter your wanted number in the quantity box or simply click on the button (-).",
      {
        imageSrc:
          "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/476381137_533954509134594_7064339534796344131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=gxSCTNNAP2kQ7kNvgE9Zwyb&_nc_oc=AdgKsNTbQXBQ8QAYBS3kTd5T4M55D0AkufanlMesFWIVOhBdyrayxPdhqoLc-Eeb0q4&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&oh=03_Q7cD1gFB19clLx15rD6SH8cvlf4A54Y4VY2ntni2Q2IrwIjw-w&oe=67D52105", //Using a placeholder.  Replace with a more relevant image if available
        imageAlt: "Remove item from cart",
      },
      {
        imageSrc:
          "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/476022313_942826604698133_23206008735888926_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EEmDu3JiCeQQ7kNvgGFhJuN&_nc_oc=AdifeTTLupfdm84zMOgKia8_EIR8epV0N-iyfNRC4pP_IzxQIhRNhXATAmNCYkjQqeU&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&oh=03_Q7cD1gF8Cz_G5sk0m-KHbizPTQMYeOyyZx5ePAphB0CXXMfugA&oe=67D5431C", //Using a placeholder.  Replace with a more relevant image if available
        imageAlt: "Remove item from cart",
      },
    ],
  },
  {
    id: "6",
    question: "How do I apply a discount code?",
    answer: [
      "After you have selected the item(s) you'd like to purchase, please proceed to the checkout page",
      "1. ON MOBILE BROWSER",
      " Fill out all shipping information > Click Continue Shipping",

      " Review your order details and click Continue to Payment",

      " Enter the coupon/discount code in the discount code box. Click the green arrow next to the box to check if the code is accepted.",

      " You can also check the order summary at the top of the page again to see if your total reflects the applied discount.",

      "2. ON COMPUTER/LAPTOP BROWSER",
      "On the Cart page, choose Secure Checkout, you will see the below page. You can enter the discount code in the instructed box > Click Apply.",

      "Click Continue to shipping once you're sure that the total price reflects the applied discount.",
    ],
  },
  {
    id: "7",
    question: "What payment methods and currency do you accept?",
    answer: [
      "Our payment methods include:",
      {
        list: [
          "Credit, debit, and prepaid cards",
          "Paypal",
          "Apple Pay is currently available, but it is only visible when you use Safari on iPhone, iPad or Mac.",
        ],
      },
      "You can click on the link below to get more information: firefightershop.org.",
      "Currently, currency accepted in our store is USD. Remember to check the exchange rate before completing your purchase.",
    ],
  },
  {
    id: "8",
    question: "How can I contact your customer service?",
    answer: [
      "Your complete satisfaction is our responsibility. Please contact us via our contact form. We're always here to get your concerns and issues sorted out.",
    ],
  },
];

export const helpTopics = [
  {
    icon: Truck,
    label: "Shipment & Delivery",
    link: "#",
  },
  {
    icon: Package,
    label: "Product Information",
    link: "#",
  },
  {
    icon: Edit,
    label: "Modification & Cancellation",
    link: "/pages/cancellation-modification",
  },
  {
    icon: RotateCcw,
    label: "Replacement & Refund",
    link: "/pages/replacement-refund",
  },
  {
    icon: ShoppingCart,
    label: "Order Placement",
    link: "#",
  },
  {
    icon: Percent,
    label: "Discount Code",
    link: "#",
  },
  {
    icon: CreditCard,
    label: "Payment",
    link: "#",
  },
  {
    icon: MessageCircle,
    label: "Additional Support",
    link: "#",
  },
];
