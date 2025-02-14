import { Alert, AlertDescription } from "@/components/ui/alert";

export function PromotionalBanner() {
  return (
    <Alert className="rounded-none border-none bg-[#EE3124] text-white">
      <AlertDescription className="flex items-center justify-center gap-2">
        <span role="img" aria-label="celebration">
          🎉
        </span>
        Order 2+ items to SAVE 10% using code: TRC10
      </AlertDescription>
    </Alert>
  );
}
