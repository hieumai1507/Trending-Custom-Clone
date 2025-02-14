import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ViewHeaderProps {
  title: string;
  onBack: () => void;
}

export function ViewHeader({ title, onBack }: ViewHeaderProps) {
  return (
    <div className="flex items-center p-4 border-b">
      <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="font-semibold">{title}</span>
    </div>
  );
}
