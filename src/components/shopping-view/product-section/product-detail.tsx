// product-detail.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ImageGallery } from "./product-detail/image-gallery";
// import { PersonalizationForm } from "./product-detail/personalization-form";
import { AddToCart } from "./product-detail/add-to-cart";
// import { ProductTabs } from "./product-detail/product-tabs";
import { addToCart } from "@/store/shop/cart-slice";
import { getProductById } from "@/utils/products"; // Import getProductById
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [imageGalleryScrollable, setImageGalleryScrollable] = useState(true);
  const [infoScrollable, setInfoScrollable] = useState(true);
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageGalleryRef.current || !infoRef.current) return;

      const imageGalleryTop =
        imageGalleryRef.current.getBoundingClientRect().top;
      const infoBottom = infoRef.current.getBoundingClientRect().bottom;

      setImageGalleryScrollable(imageGalleryTop > 0);
      setInfoScrollable(infoBottom > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch product data based on productId
    if (productId) {
      const fetchedProduct = getProductById(productId); // Gọi hàm để lấy sản phẩm dựa vào ID
      setProduct(fetchedProduct);
    }
  }, [productId]);

  if (!product) {
    navigate("/products");
    return null;
  }

  const handleAddToCart = (quantity: number) => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select size and color",
        variant: "destructive",
      });
      return;
    }
    dispatch(
      addToCart({
        product,
        quantity,
        size: selectedSize,
        color: selectedColor,
      })
    );
    navigate("/cart");
    toast({
      title: `${product.product_name} is added to cart`,
    });
  };

  const calculateDiscountPercentage = () => {
    if (product.original_price && product.sale_price) {
      const discount = product.original_price - product.sale_price;
      const discountPercentage = (discount / product.original_price) * 100;
      return discountPercentage.toFixed(0); // làm tròn về số nguyên gần nhất
    }
    return null;
  };

  const discountPercentage = calculateDiscountPercentage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px] text-left">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative">
          <div
            ref={imageGalleryRef}
            className={`lg:sticky lg:top-0 lg:left-0 lg:max-h-[calc(100vh - 2rem)] lg:overflow-y-auto scrollbar-hide ${
              imageGalleryScrollable ? "" : "lg:overflow-hidden"
            }`}
          >
            <ImageGallery
              images={[
                {
                  id: "1",
                  url: product.sku_image,
                  alt: product.product_name,
                },
              ]}
            />
          </div>
        </div>

        <div ref={infoRef} className={`space-y-6 ${infoScrollable ? "" : ""}`}>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              {product.product_name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2"></div>
            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold">
                ${product.sale_price}
              </span>
              {product.sale_price !== product.original_price && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.original_price}
                  </span>
                  {discountPercentage && (
                    <span className="text-red-600 font-semibold">
                      -{discountPercentage}%
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <Select onValueChange={setSelectedColor}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select onValueChange={setSelectedSize}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* <PersonalizationForm sizes={product.sizes} /> */}
          <AddToCart onAddToCart={handleAddToCart} />

          <div className="hidden sm:block">
            {/* <ProductTabs
              description={product.description}
              reviews={{ rating: product.rating, count: product.reviews }}
            /> */}
          </div>

          <div className="sm:hidden space-y-4">
            <div>
              <button
                className="flex justify-between items-center w-full py-2 px-4 bg-gray-100 rounded-lg"
                onClick={() =>
                  setActiveTab(activeTab === "description" ? "" : "description")
                }
              >
                <span className="font-semibold">Description</span>
                <span>{activeTab === "description" ? "−" : "+"}</span>
              </button>
              {activeTab === "description" && (
                <div className="mt-2 px-4">{product.sku_name}</div>
              )}
            </div>
            <div>
              <button
                className="flex justify-between items-center w-full py-2 px-4 bg-gray-100 rounded-lg"
                onClick={() =>
                  setActiveTab(activeTab === "reviews" ? "" : "reviews")
                }
              >
                <span className="font-semibold">Reviews</span>
                <span>{activeTab === "reviews" ? "−" : "+"}</span>
              </button>
              {activeTab === "reviews" && (
                <div className="mt-2 px-4">
                  <p>{product.display_status}</p>
                </div>
              )}
            </div>
          </div>

          <div className="text-sm text-muted-foreground"></div>
        </div>
      </div>
    </div>
  );
}
