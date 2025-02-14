import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryGridProps {
  items: { id: number; title: string }[] | string[];
  selectedIds?: number[];
  onSelect?: (id: number) => void;
  limit?: number;
}

export function CategoryGrid({
  items,
  selectedIds = [],
  onSelect,
  limit,
}: CategoryGridProps) {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid grid-cols-2 gap-2">
      {displayItems.map((item, index) => {
        const isString = typeof item === "string";
        const id = isString ? index : (item as { id: number }).id;
        const title = isString ? item : (item as { title: string }).title;

        return (
          <Button
            key={id}
            variant="secondary"
            className={cn(
              "h-auto py-2 px-4 justify-start font-normal",
              !isString && selectedIds.includes(id)
                ? "bg-[#EE3124] text-white hover:bg-[#EE3124]/90"
                : "bg-gray-50 hover:bg-gray-100"
            )}
            onClick={() => onSelect?.(id)}
          >
            {title}
          </Button>
        );
      })}
    </div>
  );
}
