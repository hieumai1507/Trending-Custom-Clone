// cart-item.tsx
// cart-item.tsx
"use client";

import { useState } from "react";
import { Minus, Plus, Eye, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { CartItem as CartItemType } from "@/types/cart";
import { PreviewModal } from "./preview-modal";

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (quantity: number) => void;
  onRemoveItem: () => void;
  onShippingProtectionChange: (checked: boolean) => void;
  onGiftWrappingChange: (checked: boolean) => void;
}

export function CartItem({
  item,
  onQuantityChange,
  onRemoveItem,
  onShippingProtectionChange,
  onGiftWrappingChange,
}: CartItemProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);

  const handleDecrease = () => {
    if (item.quantity === 1) {
      setShowRemoveConfirmation(true);
    } else {
      onQuantityChange(item.quantity - 1);
    }
  };

  const handleRemoveCancel = () => {
    setShowRemoveConfirmation(false);
  };

  const handleRemoveConfirm = () => {
    onRemoveItem();
    setShowRemoveConfirmation(false);
  };

  return (
    <>
      <div className="max-w-[755px] mx-auto rounded-2xl bg-white  border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-6 p-6">
          <div className="relative w-full sm:w-[180px] flex-shrink-0">
            <img
              src={item.sku_image || "/placeholder.svg"}
              alt={item.product_name}
              className="w-full aspect-square rounded-lg object-cover"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-[-20px] left-[100px] md:left-8 text-sm font-normal"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <div className="flex flex-col md:flex-row">
                <h3 className="text-base font-bold mb-2 max-w-[274px] text-left">
                  {item.product_name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#EE3124] text-lg font-semibold">
                    ${item.sale_price} USD
                  </span>
                  <span className="text-gray-400 text-sm line-through">
                    ${item.original_price} USD
                  </span>
                </div>
              </div>
              <div className="block text-left">
                <p className="block text-sm">Size: {item.size}</p>
                <p className="text-sm">Color: {item.color}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="text-sm font-normal flex items-center gap-2"
              >
                <Pencil className="h-4 w-4" />
                Edit Design
              </Button>
              {showRemoveConfirmation ? (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="bg-[#67B044] text-white hover:bg-[#67B044]/90"
                    onClick={handleRemoveCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#EE3124] text-white hover:bg-[#EE3124]/90"
                    onClick={handleRemoveConfirm}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-none border-r"
                    onClick={handleDecrease}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-12 text-center text-sm">
                    {item.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-none border-l"
                    onClick={() => onQuantityChange(item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3 p-4 rounded-lg">
            <Checkbox
              id="shipping-protection"
              checked={item.shippingProtection || false}
              onCheckedChange={onShippingProtectionChange}
              className="mt-1"
            />
            <div className="flex-1">
              <label
                htmlFor="shipping-protection"
                className="flex items-start justify-between gap-4"
              >
                <span className="font-bold text-sm">
                  Protect Your Item With Shipping Protection
                </span>
                <span className="text-[#EE3124] font-bold whitespace-nowrap">
                  $2.99 USD
                </span>
              </label>
              <p className="text-sm text-gray-500 mt-1">
                Protect your order from damage, loss, or theft during shipping.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-[#f2f2f7] rounded-lg">
            <Checkbox
              checked={item.giftWrapping || false}
              onCheckedChange={onGiftWrappingChange}
            />
            <div className="flex items-center gap-2 text-sm flex-wrap">
              <span className="font-bold">Gift Wrapping Service With</span>
              <span className="text-[#EE3124] font-bold">$6.99 USD</span>
              <Button variant="link" className="h-auto p-0 text-sm underline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        imageUrl={item.sku_image}
        title={item.product_name}
      />
    </>
  );
}
