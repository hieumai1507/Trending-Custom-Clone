"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  onViewProduct: () => void;
  productTitle: string;
  productId: string;
}

export function PreviewModal({
  isOpen,
  onClose,
  images,
  onViewProduct,
  productId,
  productTitle,
}: PreviewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-y-auto scrollbar-hide">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Preview</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt="Product preview"
            className="w-full h-full object-contain"
          />
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
        <div className="p-4 border-t">
          <Link to={`/products/${productTitle}?id=${productId}`}>
            <Button
              className="w-full bg-[#67B044] hover:bg-[#67B044]/90"
              onClick={onViewProduct}
            >
              View Product
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
