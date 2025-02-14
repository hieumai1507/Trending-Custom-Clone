import { MainHeader } from "../headerComponents/main-header";
import { Navigation } from "../headerComponents/navigation";
import { PromotionalBanner } from "../headerComponents/promotional-banner";

export default function ShoppingHeader() {
  return (
    <div className="">
      <PromotionalBanner />
      <MainHeader />
      <Navigation />
    </div>
  );
}
