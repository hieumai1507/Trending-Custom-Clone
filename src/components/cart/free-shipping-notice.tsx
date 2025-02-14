interface FreeShippingNoticeProps {
  remainingAmount: number;
  threshold: number;
}

export function FreeShippingNotice({
  remainingAmount,
  threshold,
}: FreeShippingNoticeProps) {
  return (
    <div className="mb-4 space-y-2 border border-[#e5e5ea] text-left px-[14px] py-3 rounded-[4px]">
      <h3 className="text-orange-500 font-bold text-[14px]">Free Shipping</h3>
      <p className="text-[#222] text-[14px] ">
        Almost there! Spend ${remainingAmount.toFixed(2)} more to unlock free
        shipping on orders totalling ${threshold} or more.
      </p>
    </div>
  );
}
