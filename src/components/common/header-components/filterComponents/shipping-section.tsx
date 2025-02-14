import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "./section-header";

interface ShippingSectionProps {
  selectedShipping: string[];
  onShippingChange: (value: string) => void;
}

export function ShippingSection({
  selectedShipping,
  onShippingChange,
}: ShippingSectionProps) {
  return (
    <div>
      <SectionHeader title="Shipping" />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="standard"
            checked={selectedShipping.includes("standard")}
            onCheckedChange={() => onShippingChange("standard")}
          />
          <Label htmlFor="standard">Standard Shipping</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="express"
            checked={selectedShipping.includes("express")}
            onCheckedChange={() => onShippingChange("express")}
          />
          <Label htmlFor="express">Express Shipping</Label>
        </div>
      </div>
    </div>
  );
}
