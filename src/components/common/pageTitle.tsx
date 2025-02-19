import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Unique Personalized Gifts for All Occasions For Your Beloved One",
      "/products": "Products -  IAN P GREINER LLC",
      "/cart": "Your Shopping Cart -  IAN P GREINER LLC",
      "/collections": "Collections -  IAN P GREINER LLC",
      "/collections/best-sellers": "Best Sellers -  IAN P GREINER LLC",
      "/collections/new-arrivals": "New Arrivals -  IAN P GREINER LLC",
      "/pages": "Pages -  IAN P GREINER LLC",
      "/pages/tracking-order": "Tracking Order -  IAN P GREINER LLC",
      "/pages/privacy-policy": "Privacy Policy -  IAN P GREINER LLC",
      "/pages/cancellation-modification":
        "Cancellation & Modification -  IAN P GREINER LLC",
      "/pages/replacement-refund": "Replacement & Refund -  IAN P GREINER LLC",
      "/pages/terms-of-service": "Terms of Service -  IAN P GREINER LLC",
      "/pages/intellectual-property-claim":
        "Intellectual Property Claim -  IAN P GREINER LLC",
      "/pages/faqs": "Help Center -  IAN P GREINER LLC",
      "/pages/contact-us": "Contact Us -  IAN P GREINER LLC",
    };

    document.title =
      (titles as Record<string, string>)[location.pathname] ||
      " IAN P GREINER LLC";
  }, [location.pathname]);

  return null;
};

export default PageTitle;
