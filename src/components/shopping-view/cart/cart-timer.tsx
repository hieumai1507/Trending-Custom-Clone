"use client";

import { useState, useEffect } from "react";

export function CartTimer() {
  const [time, setTime] = useState(9 * 60 + 50); // Chuyển thành tổng số giây

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="mb-4 rounded-md bg-[#e9f0ff] px-[14px] py-3 text-[#5551ff] text-left border border-[#5551FF] text-[14px]">
      {time > 0 ? (
        <>
          Your cart will expire in{" "}
          <span className="font-semibold">
            {minutes}:{seconds.toString().padStart(2, "0")} minutes!
          </span>{" "}
          Checkout now before your items sell out
        </>
      ) : (
        <span className=" text-[#5551ff] text-left ">
          Forgot one final step? Place your order now and make the payment right
          away!
        </span>
      )}
    </div>
  );
}
