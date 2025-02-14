"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "New", value: "new" },
  { label: "Price low to high", value: "price-asc" },
  { label: "Price high to low", value: "price-desc" },
];

interface SortTabsProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function SortTabs({ value, onValueChange }: SortTabsProps) {
  return (
    <div className="hidden md:flex items-center gap-2">
      {sortOptions.map((option) => (
        <Button
          key={option.value}
          variant="ghost"
          onClick={() => onValueChange(option.value)}
          className={cn(
            "rounded-md px-4 py-2",
            value === option.value
              ? "bg-[#EE3124] text-white hover:bg-[#EE3124]/90 hover:text-white"
              : "bg-gray-100 hover:bg-gray-200"
          )}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
