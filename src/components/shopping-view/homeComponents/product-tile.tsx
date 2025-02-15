// product-tile.tsx
import { Product } from "@/types/products";

interface ProductTileProps {
  product: Product;
}

export function ProductTile({ product }: ProductTileProps) {
  return (
    <div className="group cursor-pointer">
      <a href={`/products/${product.product_name}?id=${product.product_id}`}>
        <div className="overflow-hidden rounded-lg flex text-left">
          <img
            src={product.sku_image || "/placeholder.svg"}
            alt={product.product_name}
            className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-sm truncate">{product.product_name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-[#4CAF50]">
              ${product.sale_price} USD
            </span>
            {product.original_price !== product.sale_price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.original_price} USD
              </span>
            )}
          </div>
          <div className="flex items-center gap-1"></div>
        </div>
      </a>
    </div>
  );
}
