import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onCancel: () => void;
  onApply: () => void;
  cancelText?: string;
  applyText?: string;
}

export function ActionButtons({
  onCancel,
  onApply,
  cancelText = "Cancel",
  applyText = "Apply",
}: ActionButtonsProps) {
  return (
    <div className="border-t p-4 flex gap-4">
      <Button variant="outline" className="flex-1" onClick={onCancel}>
        {cancelText}
      </Button>
      <Button
        className="flex-1 bg-[#EE3124] hover:bg-[#EE3124]/90"
        onClick={onApply}
      >
        {applyText}
      </Button>
    </div>
  );
}
