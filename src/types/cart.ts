import { Product } from "./products";

// types/cart.ts
export interface CartItem extends Product {
  quantity: number;
  shippingProtection?: boolean;
  giftWrapping?: boolean;
  size: string;
  color: string;
}

export interface CartSubtotal {
  subtotal: number;
  priorityProduction: boolean;
  total: number;
}
