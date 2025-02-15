// cart-slice/index.ts
import { Product } from "@/types/products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends Product {
  quantity: number;
  shippingProtection?: boolean;
  giftWrapping?: boolean;
  size: string;
  color: string;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean; // Thêm trạng thái loading
}

const initialState: CartState = {
  items: [],
  isLoading: false, // Khởi tạo trạng thái loading là false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product;
        quantity: number;
        size: string;
        color: string;
      }>
    ) => {
      state.isLoading = true; // Bắt đầu loading

      const { product, quantity, size, color } = action.payload; //Lấy product, quantity, size, color từ action

      const existingItem = state.items.find(
        (item) =>
          item._id === product._id && item.size === size && item.color === color
      ); //Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa

      if (existingItem) {
        existingItem.quantity += quantity; // Cộng dồn quantity
      } else {
        state.items.push({ ...product, quantity, size, color }); //Thêm mới sản phẩm với quantity, size, color
      }

      state.isLoading = false; // Kết thúc loading
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.isLoading = true; // Bắt đầu loading
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.isLoading = false; // Kết thúc loading
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        quantity?: number;
        shippingProtection?: boolean;
        giftWrapping?: boolean;
      }>
    ) => {
      state.isLoading = true; // Bắt đầu loading

      const item = state.items.find((item) => item._id === action.payload.id);
      if (item) {
        if (action.payload.quantity !== undefined) {
          item.quantity = action.payload.quantity;
        }
        if (action.payload.shippingProtection !== undefined) {
          item.shippingProtection = action.payload.shippingProtection;
        }
        if (action.payload.giftWrapping !== undefined) {
          item.giftWrapping = action.payload.giftWrapping;
        }
      }

      state.isLoading = false; // Kết thúc loading
    },
    // Thêm reducer để clear cart (ví dụ khi đặt hàng thành công)
    clearCart: (state) => {
      state.items = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setLoading,
} = cartSlice.actions;
export default cartSlice.reducer;
