import { Product } from "@/types/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends Product {
  quantity: number;
  shippingProtection?: boolean;
  giftWrapping?: boolean;
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
      action: PayloadAction<{ product: Product; quantity: number }> //Thay đổi kiểu dữ liệu của action
    ) => {
      state.isLoading = true; // Bắt đầu loading

      const { product, quantity } = action.payload; //Lấy product và quantity từ action

      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Cộng dồn quantity
      } else {
        state.items.push({ ...product, quantity: quantity }); //Thêm mới sản phẩm với quantity
      }

      state.isLoading = false; // Kết thúc loading
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.isLoading = true; // Bắt đầu loading
      state.items = state.items.filter((item) => item.id !== action.payload);
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

      const item = state.items.find((item) => item.id === action.payload.id);
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
