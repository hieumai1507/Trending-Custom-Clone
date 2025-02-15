// price-section.tsx
interface PriceSectionProps {
  currentPrice: number;
  originalPrice: number;
}

export function PriceSection({
  currentPrice,
  originalPrice,
}: PriceSectionProps) {
  const isSamePrice = currentPrice === originalPrice;
  const calculatedDiscount = isSamePrice
    ? 0
    : ((originalPrice - currentPrice) / originalPrice) * 100;

  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[#2BA346] font-medium text-[16px]">
        ${currentPrice.toFixed(2)} USD
      </span>
      {!isSamePrice && (
        <>
          <span className="text-gray-500 line-through text-sm">
            ${originalPrice.toFixed(2)} USD
          </span>
          {calculatedDiscount > 0 && (
            <div className="bg-[#fef1f1]">
              <span className="text-[#EE3124] text-[14px] rounded-[6px] font-bold py-[2px] px-[6px]">
                {calculatedDiscount.toFixed(0)}% OFF
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
