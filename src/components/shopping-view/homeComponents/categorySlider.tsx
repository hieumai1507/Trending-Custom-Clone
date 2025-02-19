"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: number;
  title: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "For Her",
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34541_200x.png?v=1735282942",
  },
  {
    id: 2,
    title: "For Him",
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34541_1_200x.png?v=1735282942",
  },
  {
    id: 3,
    title: "For Couples",
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34541_2_200x.png?v=1735282942",
  },
  {
    id: 4,
    title: "For Friends",
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34541_3_200x.png?v=1735282942",
  },
  {
    id: 5,
    title: "For Siblings",
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34541_4_200x.png?v=1735282941",
  },
  {
    id: 6,
    title: "For Pets",
    image:
      "https://trendingcustom.com/cdn/shop/files/Group_34541_5_200x.png?v=1735282942",
  },
];

export function CategorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative bg-[#F0F7F7] px-4 py-5 md:px-6 lg:px-8">
      <div className="container mx-[10px]">
        {/* Desktop View - All categories in one row */}
        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-4 ">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.title
                .toLowerCase()
                .replace(" ", "-")}`}
              className="group rounded-lg bg-white  transition-transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden rounded-lg rounded-bl-none rounded-br-none">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-2 text-center text-sm font-medium">
                {category.title}
              </h3>
            </a>
          ))}
        </div>

        {/* Tablet View - 3 items visible */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 33.33}%)`,
                }}
              >
                {categories.map((category) => (
                  <div key={category.id} className="w-1/3 flex-shrink-0 px-2">
                    <a
                      href={`/category/${category.title
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="group block rounded-lg bg-white  transition-transform hover:scale-105"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg rounded-bl-none rounded-br-none">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          className="h-full w-full object-cover  max-w-[238px]"
                        />
                      </div>
                      <h3 className="mt-2 text-center text-sm font-medium">
                        {category.title}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md",
                currentIndex === 0 && "hidden"
              )}
              onClick={slideLeft}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md",
                currentIndex >= categories.length - 3 && "hidden"
              )}
              onClick={slideRight}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile View - 2 items visible */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 50}%)`,
                }}
              >
                {categories.map((category) => (
                  <div key={category.id} className="w-1/2 flex-shrink-0 px-2">
                    <a
                      href={`/category/${category.title
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="group block rounded-lg bg-white  transition-transform hover:scale-105"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg rounded-bl-none rounded-br-none">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="mt-2 text-center text-sm font-medium">
                        {category.title}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md",
                currentIndex === 0 && "hidden"
              )}
              onClick={slideLeft}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-md",
                currentIndex >= categories.length - 2 && "hidden"
              )}
              onClick={slideRight}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
