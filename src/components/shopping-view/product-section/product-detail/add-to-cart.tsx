"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddToCartProps {
  onAddToCart: (quantity: number) => void;
}

export function AddToCart({ onAddToCart }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: string) => {
    setQuantity(Number.parseInt(value, 10));
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <Select
          value={quantity.toString()}
          onValueChange={handleQuantityChange}
        >
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Quantity" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline">Preview</Button>
      </div>

      <Button
        className="w-full bg-[#67B044] hover:bg-[#67B044]/90"
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>

      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://trendingcustom.com/cdn/shop/files/Group_34853_1149x.png?v=9272419069271462433"
            alt="Payment"
          />
        </div>
      </div>
    </div>
  );
}
