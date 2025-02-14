import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  rating: number;
  reviews: number;
}

export function Rating({ rating, reviews }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex text-[#ff9500]">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-current" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
      <span className="text-sm text-gray-600 mt-2">{reviews} reviews</span>
    </div>
  );
}
