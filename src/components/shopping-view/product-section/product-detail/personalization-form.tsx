"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import type { ProductSize } from "@/types/product";
import { cn } from "@/lib/utils";

interface PersonalizationFormProps {
  sizes: ProductSize[];
}

export function PersonalizationForm({ sizes }: PersonalizationFormProps) {
  return (
    <div className="space-y-6 max-w-[530px]">
      <div>
        <Label>Size</Label>
        <RadioGroup defaultValue={sizes[0].value} className="mt-2 flex gap-2">
          {sizes.map((size) => (
            <div
              key={size.value}
              className={cn(
                "relative flex items-center justify-center rounded-md border px-3 py-2",
                size.isBestseller && "bg-primary/5"
              )}
            >
              <RadioGroupItem
                value={size.value}
                id={size.value}
                className="sr-only"
              />
              <Label
                htmlFor={size.value}
                className="cursor-pointer text-sm font-medium"
              >
                {size.label}
                {size.isBestseller && (
                  <span className="ml-1 text-xs text-muted-foreground">
                    - Bestseller
                  </span>
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="manName" className="text-sm font-medium">
            Man Name <span className="text-red-500">*</span>
          </Label>
          <Input id="manName" placeholder="Type here" className="mt-1.5" />
          <p className="mt-1 text-xs text-muted-foreground">
            Please use standard English only and exclude emojis. If you don't
            want to include text, please hit a space bar.
          </p>
        </div>

        <div>
          <Label htmlFor="womanName" className="text-sm font-medium">
            Woman Name <span className="text-red-500">*</span>
          </Label>
          <Input id="womanName" placeholder="Type here" className="mt-1.5" />
          <p className="mt-1 text-xs text-muted-foreground">
            Please use standard English only and exclude emojis. If you don't
            want to include text, please hit a space bar.
          </p>
        </div>

        <div>
          <Label htmlFor="anniversary" className="text-sm font-medium">
            Enter Anniversary Year <span className="text-red-500">*</span>
          </Label>
          <Input
            id="anniversary"
            placeholder="Type here (Example: 1983)"
            className="mt-1.5"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Please use standard English only and exclude emojis. If you don't
            want to include text, please hit a space bar.
          </p>
        </div>
      </div>

      <div className="space-y-4 rounded-lg  p-4">
        <div className="flex items-start space-x-2">
          <Checkbox id="shipping-protection" />
          <div>
            <Label htmlFor="shipping-protection" className="font-bold">
              Protect Your Item With Shipping Protection
              <span className="ml-1 text-blue-600">(+ $2.99 USD)</span>
            </Label>
            <p className="text-sm text-muted-foreground block">
              Protect your order from damage, loss, or theft during shipping.
            </p>
          </div>
        </div>

        <div className="space-y-2  bg-[#f6f6f6] px-5 py-4 max-w-[500px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label>Elegant Gift Box - We'll box it for you</Label>
              <button className="text-sm text-blue-600 underline">
                (More Information)
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://trendingcustom.com/cdn/shop/files/giftbox-nhu-2.png?crop=center&height=400&v=1696230776&width=400"
              alt="Gift Box"
              className="max-w-[140px] rounded-lg border object-cover"
            />
            <div className="flex-1">
              <p className="text-sm">
                <span className="text-sm  ">
                  Only <span className="text-blue-600">$12.99 USD</span>
                </span>
                <span className="line-through"> $15.99 USD</span>
                <span className="ml-1 ">
                  extra - upgrade to our elegant gift box now
                </span>
              </p>
              <div className="block">
                <Checkbox id="gift-box" className="mt-1" />
                <Label htmlFor="gift-box" className="ml-2">
                  Choose to buy
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
