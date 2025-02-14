import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "./section-header";
import { COMMON } from "@/constants/textConstant";

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
      <SectionHeader title={COMMON.SHIPPING} />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="standard"
            checked={selectedShipping.includes("standard")}
            onCheckedChange={() => onShippingChange("standard")}
          />
          <Label htmlFor="standard">{COMMON.STANDARD_SHIPPING}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="express"
            checked={selectedShipping.includes("express")}
            onCheckedChange={() => onShippingChange("express")}
          />
          <Label htmlFor="express">{COMMON.EXPRESS_SHIPPING}</Label>
        </div>
      </div>
    </div>
  );
}
