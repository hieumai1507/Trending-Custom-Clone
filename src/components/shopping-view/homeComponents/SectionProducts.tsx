import { useEffect, useState } from "react";
import ProductTile from "./product-tile";
import { Product } from "@/types/products";
import { products as allProducts } from "@/constants/products";
interface mainProps {
  giftOfCouple?: boolean;
  bestSellersProducts?: boolean;
}

export function SectionProducts(props: mainProps) {
  const { giftOfCouple } = props;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getRandomProducts = (arr: Product[], n: number): Product[] => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    };

    const randomProducts = getRandomProducts(allProducts, 6);
    setProducts(randomProducts);
  }, []);

  return (
    <section className="px-12 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 flex items-center justify-center gap-2 text-2xl font-semibold md:text-3xl lg:text-4xl">
            <span role="img" aria-label="gift">
              {giftOfCouple
                ? "Gifts for Couples"
                : "🎁Best Sellers - Customer Favorites"}
            </span>
          </h2>
          <p className="mb-4 text-gray-600">
            {giftOfCouple
              ? "Celebrate love with personalized gifts made for couples. From heartfelt keepsakes to custom creations, find the perfect way to cherish their bond and create lasting memories."
              : "Shop our most-loved personalized gifts, perfect for every occasion!"}
          </p>
          <a
            href="/products"
            className="block items-center text-gray-600 hover:text-gray-900"
          >
            See all products →
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-6">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
