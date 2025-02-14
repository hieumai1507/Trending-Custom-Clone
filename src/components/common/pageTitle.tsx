import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Unique Personalized Gifts for All Occasions For Your Beloved One",
      "/products": "Products - TrendingCustom™",
      "/cart": "Your Shopping Cart - TrendingCustom™",
      "/collections": "Collections - TrendingCustom™",
      "/collections/best-sellers": "Best Sellers - TrendingCustom™",
      "/collections/new-arrivals": "New Arrivals - TrendingCustom™",
      "/pages": "Pages - TrendingCustom™",
      "/pages/tracking-order": "Tracking Order - TrendingCustom™",
      "/pages/privacy-policy": "Privacy Policy - TrendingCustom™",
      "/pages/cancellation-modification":
        "Cancellation & Modification - TrendingCustom™",
      "/pages/replacement-refund": "Replacement & Refund - TrendingCustom™",
      "/pages/terms-of-service": "Terms of Service - TrendingCustom™",
      "/pages/intellectual-property-claim":
        "Intellectual Property Claim - TrendingCustom™",
      "/pages/faqs": "Help Center - TrendingCustom™",
      "/pages/contact-us": "Contact Us - TrendingCustom™",
    };

    document.title =
      (titles as Record<string, string>)[location.pathname] ||
      "TrendingCustom™";
  }, [location.pathname]);

  return null;
};

export default PageTitle;
