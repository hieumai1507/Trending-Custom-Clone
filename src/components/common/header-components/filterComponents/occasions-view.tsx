import { CategoryGrid } from "./category-grid";
import { ActionButtons } from "./action-buttons";
import { occasions } from "@/constants/filter-data";
import { ViewHeader } from "./view-header";
import { COMMON } from "@/constants/textConstant";

interface OccasionsViewProps {
  selectedOccasions: number[];
  onOccasionSelect: (id: number) => void;
  onBack: () => void;
}

export function OccasionsView({
  selectedOccasions,
  onOccasionSelect,
  onBack,
}: OccasionsViewProps) {
  return (
    <div className="h-full flex flex-col">
      <ViewHeader title="Occasions" onBack={onBack} />

      <div className="flex-1 overflow-auto p-4">
        <CategoryGrid
          items={occasions}
          selectedIds={selectedOccasions}
          onSelect={onOccasionSelect}
        />
      </div>

      <ActionButtons
        onCancel={onBack}
        onApply={onBack}
        cancelText={COMMON.BACK}
      />
    </div>
  );
}
