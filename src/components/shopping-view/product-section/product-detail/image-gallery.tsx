"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/types/product";

interface ImageGalleryProps {
  images: ProductImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <div className="relative">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={images[selectedIndex].url || "/placeholder.svg"}
          alt={images[selectedIndex].alt}
          className="h-full w-full object-cover"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 bg-white/80 hover:bg-white/90"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            className={cn(
              "h-5 w-5",
              isWishlisted && "fill-red-500 text-red-500"
            )}
          />
        </Button>
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg border-2",
              index === selectedIndex ? "border-primary" : "border-transparent"
            )}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
