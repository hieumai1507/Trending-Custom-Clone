// types/cart.ts
export interface CartItem {
  id: string;
  name?: string;
  title: string;
  image: string;
  images?: string[]; // Thêm mảng ảnh chi tiết
  currentPrice: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  tag?: "Daily Deals" | "Trending Item" | "Best Choice" | "Best Seller";
  sizes?: { value: string; label: string; isBestseller?: boolean }[];
  description?: string;
  shippingInfo?: string;
  satisfactionGuarantee?: string;
  shippingProtection?: boolean;
  giftWrapping?: boolean | undefined;
  material?: string; // Added material property
  size?: string; // Added size property
  quantity: number;
}

export interface CartSubtotal {
  subtotal: number;
  priorityProduction: boolean;
  total: number;
}
