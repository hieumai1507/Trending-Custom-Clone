import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { priceRanges } from "@/constants/filter-data";
import type { CustomPriceRange } from "@/types/filter";
import { SectionHeader } from "./section-header";
import { COMMON } from "@/constants/textConstant";

interface PriceSectionProps {
  selectedPrice: string;
  customPriceRange: CustomPriceRange;
  onPriceChange: (value: string) => void;
  onCustomPriceChange: (field: "low" | "high", value: string) => void;
  onPriceInputFocus: () => void;
}

export function PriceSection({
  selectedPrice,
  customPriceRange,
  onPriceChange,
  onCustomPriceChange,
  onPriceInputFocus,
}: PriceSectionProps) {
  return (
    <div>
      <SectionHeader title={COMMON.PRICE} />
      <RadioGroup value={selectedPrice} onValueChange={onPriceChange}>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center space-x-2">
              <RadioGroupItem value={range.value} id={range.value} />
              <Label htmlFor={range.value}>{range.label}</Label>
            </div>
          ))}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Custom</Label>
            </div>
            <div className="flex items-center space-x-2 ml-6">
              <Input
                type="number"
                placeholder="Low"
                value={customPriceRange.low}
                onChange={(e) => onCustomPriceChange("low", e.target.value)}
                onFocus={onPriceInputFocus}
                className="w-24 bg-gray-50"
              />
              <span className="text-sm text-gray-500">to</span>
              <Input
                type="number"
                placeholder={COMMON.HIGH}
                value={customPriceRange.high}
                onChange={(e) => onCustomPriceChange("high", e.target.value)}
                onFocus={onPriceInputFocus}
                className="w-24 bg-gray-50"
              />
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
