"use client";

import * as React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import type { ViewType } from "@/types/filter";
import { MainView } from "./filterComponents/main-view";
import { OccasionsView } from "./filterComponents/occasions-view";
import { RecipientsView } from "./filterComponents/recipients-view";
import { ProductsView } from "./filterComponents/products-view";

interface FilterDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterDialog({ isOpen, onClose }: FilterDialogProps) {
  const [view, setView] = React.useState<ViewType>("main");
  const [selectedPrice, setSelectedPrice] = React.useState("any");
  const [selectedOccasions, setSelectedOccasions] = React.useState<number[]>(
    []
  );
  const [selectedRecipients, setSelectedRecipients] = React.useState<number[]>(
    []
  );
  const [selectedProducts, setSelectedProducts] = React.useState<number[]>([]); // State mới cho selected products
  const [expandedOccasions, setExpandedOccasions] = React.useState(false);
  const [expandedRecipients, setExpandedRecipients] = React.useState(false);
  const [customPriceRange, setCustomPriceRange] = React.useState({
    low: "",
    high: "",
  });
  const [selectedShipping, setSelectedShipping] = React.useState<string[]>([]);

  const handleOccasionSelect = (id: number) => {
    setSelectedOccasions((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  // Handler mới cho việc chọn/bỏ chọn product
  const handleProductSelect = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleRecipientSelect = (id: number) => {
    setSelectedRecipients((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handlePriceInputFocus = () => {
    setSelectedPrice("custom");
  };

  const handleCustomPriceChange = (field: "low" | "high", value: string) => {
    setCustomPriceRange((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (selectedPrice !== "custom") {
      setSelectedPrice("custom");
    }
  };

  const handleShippingChange = (value: string) => {
    setSelectedShipping((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="p-0 w-full max-w-[400px] scrollbar-hide"
      >
        {view === "main" && (
          <MainView
            selectedOccasions={selectedOccasions}
            selectedRecipients={selectedRecipients}
            expandedOccasions={expandedOccasions}
            expandedRecipients={expandedRecipients}
            selectedPrice={selectedPrice}
            customPriceRange={customPriceRange}
            selectedShipping={selectedShipping}
            onOccasionSelect={handleOccasionSelect}
            onRecipientSelect={handleRecipientSelect}
            onExpandOccasions={() => setExpandedOccasions(true)}
            onExpandRecipients={() => setExpandedRecipients(true)}
            onViewOccasions={() => setView("occasions")}
            onViewRecipients={() => setView("recipients")}
            onViewProducts={() => setView("products")}
            onPriceChange={setSelectedPrice}
            onCustomPriceChange={handleCustomPriceChange}
            onPriceInputFocus={handlePriceInputFocus}
            onShippingChange={handleShippingChange}
            onClose={onClose}
          />
        )}

        {view === "occasions" && (
          <OccasionsView
            selectedOccasions={selectedOccasions}
            onOccasionSelect={handleOccasionSelect}
            onBack={() => setView("main")}
          />
        )}

        {view === "recipients" && (
          <RecipientsView
            selectedRecipients={selectedRecipients}
            onRecipientSelect={handleRecipientSelect}
            onBack={() => setView("main")}
          />
        )}

        {view === "products" && (
          <ProductsView
            onBack={() => setView("main")}
            selectedProducts={selectedProducts}
            onProductSelect={handleProductSelect}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
