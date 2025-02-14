"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  image: string;
  alt: string;
}

const reviews: Review[] = [
  {
    id: 1,
    image:
      "https://trendingcustom.com/cdn/shop/files/BWCix-K0p_mid_200x.png?v=1732518020",
    alt: "Beach sunset scene with chairs",
  },
  {
    id: 2,
    image:
      "https://trendingcustom.com/cdn/shop/files/2_4704a7b3-6912-4c44-843c-7af2b85d3350_200x.png?v=1732518082",
    alt: "Custom ornament with silhouettes",
  },
  {
    id: 3,
    image:
      "https://trendingcustom.com/cdn/shop/files/6_e17493d0-dc5e-42af-882b-16319f76fe59_200x.png?v=1732518147",
    alt: "Live Simple Love Big photo",
  },
  {
    id: 4,
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34894_200x.png?v=1728357839",
    alt: "Scrabble style word art",
  },
  {
    id: 5,
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34895_200x.png?v=1728357839",
    alt: "Custom family sign with mug",
  },
  {
    id: 6,
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34896_200x.png?v=1728357839",
    alt: "Christmas ornament",
  },
  {
    id: 7,
    image:
      "https://trendingcustom.com/cdn/shop/files/image_c7389e35-c690-4db2-9eff-c7a2f9228649_200x.png?v=1728358245",
    alt: "Holiday themed number decoration",
  },
];

export default function ReviewCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.offsetWidth;
    const currentScroll = container.scrollLeft;

    container.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-4 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            See what people are saying!
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-primary hover:underline"
          >
            See all reviews →
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="flex-none w-[280px] sm:w-[200px] md:w-[250px] snap-center"
                >
                  <div className="aspect-square relative">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.alt}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-lg rounded-full hover:bg-accent"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-lg rounded-full hover:bg-accent"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
