import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./shop/cart-slice"; // Đảm bảo đường dẫn này đúng
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root", // Key cho localStorage
  storage,
  whitelist: ["cart"], // Chỉ persist reducer 'cart'
};

const rootReducer = combineReducers({
  cart: cartReducer,
  // Thêm các reducers khác của bạn ở đây nếu có
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra serializable (tùy chọn, có thể cần thiết tùy thuộc vào state của bạn)
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>; //  Sử dụng rootReducer ở đây
export type AppDispatch = typeof store.dispatch;
