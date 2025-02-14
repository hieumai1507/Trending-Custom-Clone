import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown } from "lucide-react";
import { CategoryGrid } from "./category-grid";
import { ActionButtons } from "./action-buttons";
import { occasions, recipients } from "@/constants/filter-data";
import type { CustomPriceRange } from "@/types/filter";
import { SectionHeader } from "./section-header";
import { PriceSection } from "./price-section";
import { ShippingSection } from "./shipping-section";
import { COMMON } from "@/constants/textConstant";

interface MainViewProps {
  selectedOccasions: number[];
  selectedRecipients: number[];
  expandedOccasions: boolean;
  expandedRecipients: boolean;
  selectedPrice: string;
  customPriceRange: CustomPriceRange;
  selectedShipping: string[];

  onOccasionSelect: (id: number) => void;
  onRecipientSelect: (id: number) => void;
  onExpandOccasions: () => void;
  onExpandRecipients: () => void;
  onViewOccasions: () => void;
  onViewRecipients: () => void;
  onViewProducts: () => void;
  onPriceChange: (value: string) => void;
  onCustomPriceChange: (field: "low" | "high", value: string) => void;
  onPriceInputFocus: () => void;
  onShippingChange: (value: string) => void;
  onClose: () => void;
}

export function MainView({
  selectedOccasions,
  selectedRecipients,
  expandedOccasions,
  expandedRecipients,
  selectedPrice,
  customPriceRange,
  selectedShipping,

  onOccasionSelect,
  onRecipientSelect,
  onExpandOccasions,
  onExpandRecipients,
  onViewOccasions,
  onViewRecipients,
  onViewProducts,
  onPriceChange,
  onCustomPriceChange,
  onPriceInputFocus,
  onShippingChange,
  onClose,
}: MainViewProps) {
  return (
    <div className="space-y-6 h-full flex flex-col ">
      <div className="flex-1 overflow-auto space-y-6 p-4 scrollbar-hide">
        <div>
          <SectionHeader title="Filters" />
          <div className="space-y-4">
            <p className="text-base font-bold">{COMMON.FILTER_BY_PRODUCT}</p>
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={onViewProducts}
            >
              {COMMON.ALL_PRODUCTS}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <SectionHeader title="Occasions" count={selectedOccasions.length} />
          <CategoryGrid
            items={occasions}
            selectedIds={selectedOccasions}
            onSelect={onOccasionSelect}
            limit={expandedOccasions ? undefined : 6}
          />
          {!expandedOccasions ? (
            <Button
              variant="link"
              className="mt-2 p-0 text-sm"
              onClick={onExpandOccasions}
            >
              {COMMON.SEE_MORE}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="link"
              className="mt-2 p-0 text-sm"
              onClick={onViewOccasions}
            >
              {COMMON.SEE_ALL}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>

        <div>
          <SectionHeader title="Recipients" count={selectedRecipients.length} />
          <CategoryGrid
            items={recipients}
            selectedIds={selectedRecipients}
            onSelect={onRecipientSelect}
            limit={expandedRecipients ? undefined : 6}
          />
          {!expandedRecipients ? (
            <Button
              variant="link"
              className="mt-2 p-0 text-sm"
              onClick={onExpandRecipients}
            >
              {COMMON.SEE_MORE}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="link"
              className="mt-2 p-0 text-sm"
              onClick={onViewRecipients}
            >
              {COMMON.SEE_ALL}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>

        <PriceSection
          selectedPrice={selectedPrice}
          customPriceRange={customPriceRange}
          onPriceChange={onPriceChange}
          onCustomPriceChange={onCustomPriceChange}
          onPriceInputFocus={onPriceInputFocus}
        />

        <ShippingSection
          selectedShipping={selectedShipping}
          onShippingChange={onShippingChange}
        />
      </div>

      <ActionButtons onCancel={onClose} onApply={onClose} />
    </div>
  );
}
