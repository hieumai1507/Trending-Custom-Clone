import { CategoryGrid } from "./category-grid";
import { ActionButtons } from "./action-buttons";
import { productTypes } from "@/constants/filter-data";
import { ViewHeader } from "./view-header";

interface ProductsViewProps {
  selectedProducts: number[];
  onProductSelect: (id: number) => void;
  onBack: () => void;
}

export function ProductsView({
  selectedProducts,
  onProductSelect,
  onBack,
}: ProductsViewProps) {
  return (
    <div className="h-full flex flex-col">
      <ViewHeader title="Product types" onBack={onBack} />

      <div className="flex-1 overflow-auto p-4">
        <CategoryGrid
          items={productTypes}
          selectedIds={selectedProducts}
          onSelect={onProductSelect}
        />
      </div>

      <ActionButtons onCancel={onBack} onApply={onBack} cancelText="Back" />
    </div>
  );
}
