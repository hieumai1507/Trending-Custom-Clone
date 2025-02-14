import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingProducts from "./pages/shopping-view/products";
import ShoppingCollections from "./pages/shopping-view/collections";
import ShoppingPages from "./pages/shopping-view/pages";
import TrackingOrder from "./components/shopping-view/pages/tracking-order";
import BestSellers from "./components/shopping-view/collections/best-sellers";
import NewArrivals from "./components/shopping-view/collections/new-arrivals";
import { ShoppingCart } from "./pages/shopping-view/cart";
import { ProductDetails } from "./components/shopping-view/product-section/product-detail";
import { useEffect } from "react";
import PrivacyPolicy from "./components/shopping-view/pages/policies/privacy-policy";
import CancellationModification from "./components/shopping-view/pages/policies/cancellation-modification";
import ReplacementRefund from "./components/shopping-view/pages/policies/replacement-refund";
import TermsOfService from "./components/shopping-view/pages/policies/term-of-service";
import IntellectualPropertyClaim from "./components/shopping-view/pages/policies/intellectual-property-claim";
import HelpCenter from "./components/shopping-view/pages/help/help-center";
import PageTitle from "./components/common/pageTitle";
import ContactUs from "./components/shopping-view/pages/help/contact-us";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll lên đầu trang
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component mount
  return (
    <div className="flex flex-col overflow-hidden bg-[#fff]">
      <PageTitle />
      <Routes>
        <Route path="/" element={<ShoppingLayout />}>
          <Route index element={<ShoppingHome />} />
          <Route path="/products" element={<ShoppingProducts />}>
            <Route path=":product" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/collections" element={<ShoppingCollections />}>
            <Route path="best-sellers" element={<BestSellers />} />
            <Route path="new-arrivals" element={<NewArrivals />} />
          </Route>
          <Route path="/pages" element={<ShoppingPages />}>
            <Route path="tracking-order" element={<TrackingOrder />} />
            {/* Policies */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="cancellation-modification"
              element={<CancellationModification />}
            />
            <Route path="replacement-refund" element={<ReplacementRefund />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route
              path="intellectual-property-claim"
              element={<IntellectualPropertyClaim />}
            />
            {/* Help */}
            <Route path="faqs" element={<HelpCenter />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
