"use client";

import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Star } from "lucide-react";
import { ImageGallery } from "./product-detail/image-gallery";
import { PersonalizationForm } from "./product-detail/personalization-form";
import { AddToCart } from "./product-detail/add-to-cart";
import { ProductTabs } from "./product-detail/product-tabs";
import { addToCart } from "@/store/shop/cart-slice";
import { products } from "@/constants/products";
import { useToast } from "@/hooks/use-toast";

export function ProductDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const { toast } = useToast();
  const product = products.find((p) => p.id === productId);

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

  if (!product) {
    navigate("/products");
    return null;
  }

  const handleAddToCart = (quantity: number) => {
    dispatch(addToCart({ product, quantity }));
    navigate("/cart");
    toast({
      title: `${product.name} is added to cart`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px] text-left">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left column - Image Gallery */}
        <div className="relative">
          <div
            ref={imageGalleryRef}
            className={`lg:sticky lg:top-0 lg:left-0 lg:max-h-[calc(100vh - 2rem)] lg:overflow-y-auto scrollbar-hide ${
              imageGalleryScrollable ? "" : "lg:overflow-hidden"
            }`}
          >
            <ImageGallery
              images={product.images.map((url, index) => ({
                id: index.toString(),
                url,
                alt: product.title,
              }))}
            />
          </div>
        </div>

        {/* Right column - Product Information */}
        <div ref={infoRef} className={`space-y-6 ${infoScrollable ? "" : ""}`}>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              {product.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-current" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground text-[#6168ff]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold">
                ${product.currentPrice}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
              <span className="text-red-600 font-semibold">
                -{product.discount}% OFF
              </span>
            </div>
          </div>

          <PersonalizationForm sizes={product.sizes} />
          <AddToCart onAddToCart={handleAddToCart} />

          {/* Desktop Tabs */}
          <div className="hidden sm:block">
            <ProductTabs
              description={product.description}
              reviews={{ rating: product.rating, count: product.reviews }}
            />
          </div>

          {/* Mobile Accordion */}
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
                <div className="mt-2 px-4">{product.description}</div>
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
                  <p>
                    Rating: {product.rating} ({product.reviews} reviews)
                  </p>
                  {/* Add more review content here */}
                </div>
              )}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>{product.shippingInfo}</p>
            <p>{product.satisfactionGuarantee}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
