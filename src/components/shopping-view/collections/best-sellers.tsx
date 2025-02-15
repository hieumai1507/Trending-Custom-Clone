import FilterAndSortHeader from "@/components/common/header";
import { ProductGrid } from "../product-section/product-grid";

export default function BestSellers() {
  return (
    <div>
      <FilterAndSortHeader />
      <ProductGrid />
    </div>
  );
}
