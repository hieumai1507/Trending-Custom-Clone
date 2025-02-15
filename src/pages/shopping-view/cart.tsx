// ShoppingCart.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CartTimer } from "@/components/shopping-view/cart/cart-timer";
import { CartItem } from "@/components/shopping-view/cart/cart-item";
import { CartSubtotal } from "@/components/shopping-view/cart/cart-subtotal";
import { removeFromCart, updateQuantity } from "@/store/shop/cart-slice";
import { RootState } from "@/store/store";
import { FreeShippingNotice } from "@/components/shopping-view/cart/free-shipping-notice";
import { CartItem as CartItemType } from "@/types/cart"; // Import CartItem type

export function ShoppingCart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const [priorityProduction, setPriorityProduction] = useState(false);

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity }));
  };

  const handleShippingProtectionChange = (
    itemId: string,
    shippingProtection: boolean
  ) => {
    dispatch(
      updateQuantity({ id: itemId, shippingProtection: shippingProtection })
    );
  };

  const handleGiftWrappingChange = (itemId: string, giftWrapping: boolean) => {
    dispatch(updateQuantity({ id: itemId, giftWrapping: giftWrapping }));
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const salePrice = Number(item.sale_price);
      const quantity = Number(item.quantity);
      const shippingProtection = !!item.shippingProtection; // Ensure boolean
      const giftWrapping = !!item.giftWrapping; // Ensure boolean

      if (isNaN(salePrice) || isNaN(quantity)) {
        console.error("Invalid salePrice or quantity:", item);
        return total; // Skip this item
      }

      let itemTotal = salePrice * quantity;
      if (shippingProtection) itemTotal += 2.99;
      if (giftWrapping) itemTotal += 6.99;
      return total + itemTotal;
    }, 0);
  };

  const calculateTotal = () => {
    let total = calculateSubtotal();
    if (priorityProduction) total += 2.99;
    return total;
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll lên đầu trang
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component mount

  return (
    <>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
          <p className="text-lg">There are no items in your cart.</p>
          <a
            href="/collections/best-sellers"
            className="inline-flex h-10 items-center min-h-[50px] min-w-[300px] justify-center rounded-md border border-black px-8 text-sm transition-colors hover:bg-black hover:text-white font-bold"
          >
            CONTINUE SHOPPING
          </a>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 max-w-[1200px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">
              Shopping Cart ({items.length})
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <CartTimer />
              <FreeShippingNotice remainingAmount={43.01} threshold={70} />
              {items.map((item: CartItemType) => (
                // Add type annotation here
                <CartItem
                  key={item._id}
                  item={item}
                  onQuantityChange={(quantity) =>
                    handleQuantityChange(item._id, quantity)
                  }
                  onRemoveItem={() => handleRemoveItem(item._id)}
                  onShippingProtectionChange={(checked) =>
                    handleShippingProtectionChange(item._id, checked)
                  }
                  onGiftWrappingChange={(checked) =>
                    handleGiftWrappingChange(item._id, checked)
                  }
                />
              ))}
            </div>

            <div>
              <CartSubtotal
                subtotal={{
                  subtotal: calculateSubtotal(),
                  priorityProduction,
                  total: calculateTotal(),
                }}
                onPriorityProductionChange={setPriorityProduction}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
