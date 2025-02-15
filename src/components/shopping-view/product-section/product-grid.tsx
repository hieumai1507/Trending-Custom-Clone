// product-grid.tsx
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/shopping-view/product-section/product-card/product-card";
import { Product } from "@/types/products";
import { Pagination } from "@/components/common/pagination";
import { getProducts } from "@/utils/products";

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    // Load products from the JSON file
    const productList = getProducts(); // Gọi hàm để đọc data
    setProducts(productList);
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="px-4 md:px-[72px]">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          totalPages={Math.ceil(products.length / productsPerPage)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
