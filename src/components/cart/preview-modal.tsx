"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export function PreviewModal({
  isOpen,
  onClose,
  imageUrl,
  title,
}: PreviewModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Preview Your Design</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full rounded-lg object-contain max-h-[500px]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
