import FilterAndSortHeader from "@/components/common/header";
import { ProductGrid } from "../product-section/product-grid";
import { products } from "@/constants/products";

export default function BestSellers() {
  return (
    <div>
      <FilterAndSortHeader />
      <ProductGrid products={products} />
    </div>
  );
}
