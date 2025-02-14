import { Product } from "@/types/products";
import { Star } from "lucide-react";

export default function ProductTile({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer">
      <a href={`/products/${product.name}?id=${product.id}`}>
        <div className="overflow-hidden rounded-lg flex text-left">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-sm line-clamp-2  truncate">{product.title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-[#4CAF50]">
              ${product.currentPrice} USD
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice} USD
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(6)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.reviews} reviews
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
