"use client";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceSection } from "./price-section";
import { Rating } from "./rating";
import { Tag } from "./tag";
import { useState } from "react";
import { PreviewModal } from "./preview-modal";
import { Link } from "react-router-dom";
import { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const productImages = [product.image];

  return (
    <>
      <div className="group relative flex flex-col">
        <Link
          to={`/products/${product.name}?id=${product.id}`}
          className="relative aspect-square overflow-hidden rounded-lg"
        >
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
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
          <Link to={`/products/${product.title}`}>
            <h3 className="text-[16px] font-medium truncate">
              {product.title}
            </h3>
          </Link>

          <PriceSection
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            discount={product.discount}
          />

          <Rating rating={product.rating} reviews={product.reviews} />

          {product.tag && <Tag type={product.tag} />}
        </div>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        images={productImages}
        productTitle={product.title}
        productId={product.id}
        onViewProduct={() => {
          // Handle view product action
          console.log("View product:", product.id);
        }}
      />
    </>
  );
}
