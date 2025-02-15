// product-card.tsx
"use client";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceSection } from "./price-section";
import { useState } from "react";
import { PreviewModal } from "./preview-modal";
import { Link } from "react-router-dom";
import { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const productImages = [product.sku_image]; // Use sku_image

  return (
    <>
      <div className="group relative flex flex-col ml-2 mb-2 border border-[#e9f0ff] rounded-bl-md rounded-br-md pb-4 ">
        <Link
          to={`/products/${product.product_name}?id=${product.product_id}`}
          className="relative aspect-square overflow-hidden rounded-lg"
        >
          <img
            src={product.sku_image || "/placeholder.svg"}
            alt={product.product_name}
            className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute right-2 top-2 transition-opacity rounded-[50%] opacity-80"
            onClick={(e) => {
              e.preventDefault();
              setIsPreviewOpen(true);
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </Link>

        <div className="mt-4 flex flex-col gap-2">
          <Link
            to={`/products/${product.product_name}?id=${product.product_id}`}
          >
            <h3 className="text-[16px] font-medium truncate">
              {product.product_name}
            </h3>
          </Link>
          <PriceSection
            currentPrice={parseFloat(product.sale_price)} // Ép kiểu về number
            originalPrice={parseFloat(product.original_price)} // Ép kiểu về number
          />
        </div>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        images={productImages}
        productTitle={product.product_name}
        productId={product.product_id}
        onViewProduct={() => {
          // Handle view product action
          console.log("View product:", product.product_id);
        }}
      />
    </>
  );
}
