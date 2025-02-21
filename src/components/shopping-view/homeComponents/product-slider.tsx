"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/types/products";
import { getProducts } from "@/utils/products";

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productList = getProducts(); // Lấy toàn bộ danh sách sản phẩm
    if (productList.length > 0) {
      // Chọn ngẫu nhiên 6 sản phẩm
      const shuffled = productList.sort(() => 0.5 - Math.random());
      setSelectedProducts(shuffled.slice(0, 6));
    }
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < selectedProducts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative bg-[#F0F7F7] px-4 py-5 md:px-6 lg:px-8">
      <div className="container mx-[10px]">
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-4 justify-center items-center ">
          {selectedProducts.map((product, index) => (
            <div
              key={index}
              className="group rounded-lg bg-white transition-transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <a
                  href={`/products/${product.product_name}?id=${product.product_id}`}
                >
                  <img
                    src={product.sku_image || "/placeholder.svg"}
                    alt={product.product_name}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {selectedProducts.map((product, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-2">
                  <div className="group block rounded-lg bg-white transition-transform hover:scale-105">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <a
                        href={`/products/${product.product_name}?id=${product.product_id}`}
                      >
                        <img
                          src={product.sku_image || "/placeholder.svg"}
                          alt={product.product_name}
                          className="h-full w-full object-cover"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={slideLeft}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 bg-white/80",
              currentIndex === 0 && "hidden"
            )}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={slideRight}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 bg-white/80",
              currentIndex >= selectedProducts.length - 3 && "hidden"
            )}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {selectedProducts.map((product, index) => (
                <div key={index} className="w-1/2 flex-shrink-0 px-2">
                  <div className="group block rounded-lg bg-white transition-transform hover:scale-105">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <a
                        href={`/products/${product.product_name}?id=${product.product_id}`}
                      >
                        <img
                          src={product.sku_image || "/placeholder.svg"}
                          alt={product.product_name}
                          className="h-full w-full object-cover"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={slideLeft}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 bg-white/80",
              currentIndex === 0 && "hidden"
            )}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={slideRight}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 bg-white/80",
              currentIndex >= selectedProducts.length - 2 && "hidden"
            )}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
