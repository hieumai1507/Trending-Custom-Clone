import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { CartSubtotal } from "@/types/cart";

interface CartSubtotalProps {
  subtotal: CartSubtotal;
  onPriorityProductionChange: (checked: boolean) => void;
}

export function CartSubtotal({
  subtotal,
  onPriorityProductionChange,
}: CartSubtotalProps) {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4">
      <h2 className="text-lg font-semibold">Cart Subtotal</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.subtotal.toFixed(2)} USD</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes and shipping:</span>
          <span className="text-gray-500 max-w-[111px]">
            Calculated at checkout
          </span>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-3 text-left">
        <Checkbox
          id="priority-production"
          checked={subtotal.priorityProduction}
          onCheckedChange={onPriorityProductionChange}
        />
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <label htmlFor="priority-production" className="font-bold">
              Priority Production
            </label>
            <span className="font-bold">$2.99 USD</span>
          </div>
          <div className="text-left max-w-[175px]">
            <p className="text-sm text-[#565959] ">
              Move your order to the front of the line for faster processing
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span className="font-bold">${subtotal.total.toFixed(2)} USD</span>
        </div>
        <div className="text-sm inline">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
            alt="PayPal Credit"
            className="h-5"
          />
          <span>Pay in 4 interest-free payments of $8.25.</span>
          <Button
            variant="link"
            className="h-auto p-0 underline text-[#0070ba] text-[14px]"
          >
            Learn more
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Button className="w-full font-bold bg-[#67B044] hover:bg-[#67B044]/90 min-h-[45px] text-[16px]">
          🔒 Secure Checkout
        </Button>
        <Button
          variant="outline"
          className="w-full bg-[#FFC439] text-[#003087] hover:bg-[#FFC439]/90 min-h-[45px]"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
            alt="PayPal"
            className="h-5"
          />
        </Button>
      </div>

      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center gap-1 text-sm text-green-600"></div>
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://trendingcustom.com/cdn/shop/files/Group_34853_1149x.png?v=9272419069271462433"
            alt="Payment methods"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}
