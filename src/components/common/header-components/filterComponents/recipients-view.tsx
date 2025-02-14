import { CategoryGrid } from "./category-grid";
import { ActionButtons } from "./action-buttons";
import { recipients } from "@/constants/filter-data";
import { ViewHeader } from "./view-header";
import { COMMON } from "@/constants/textConstant";

interface RecipientsViewProps {
  selectedRecipients: number[];
  onRecipientSelect: (id: number) => void;
  onBack: () => void;
}

export function RecipientsView({
  selectedRecipients,
  onRecipientSelect,
  onBack,
}: RecipientsViewProps) {
  return (
    <div className="h-full flex flex-col">
      <ViewHeader title="Recipients" onBack={onBack} />

      <div className="flex-1 overflow-auto p-4">
        <CategoryGrid
          items={recipients}
          selectedIds={selectedRecipients}
          onSelect={onRecipientSelect}
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
