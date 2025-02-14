interface PriceSectionProps {
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

export function PriceSection({
  currentPrice,
  originalPrice,
  discount,
}: PriceSectionProps) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[#2BA346] font-medium text-[16px]">
        ${currentPrice.toFixed(2)} USD
      </span>
      <span className="text-gray-500 line-through text-sm">
        ${originalPrice.toFixed(2)} USD
      </span>
      <div className="bg-[#fef1f1]">
        <span className="text-[#EE3124] text-[14px] rounded-[6px] font-bold py-[2px] px-[6px]">
          {discount}% OFF
        </span>
      </div>
    </div>
  );
}
