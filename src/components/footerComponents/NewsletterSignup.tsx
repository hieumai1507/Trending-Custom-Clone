"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  return (
    <div className="flex justify-center items-center my-4 p-6">
      <div className=" p-6 w-full max-w-[600px] text-center">
        <h2 className="text-[40px] font-semibold text-[#373f47] mb-2 leading-[130%] md:leading-[150%]">
          Unlock 10% OFF
        </h2>
        <h3 className="text-[40px] font-semibold text-[#373f47] mb-4 md:leading-[170%]">
          Your First Order
        </h3>
        <p className="mb-6 text-[#373f47] md:text-[14px] text-left leading-[150%] ">
          Find special gifts made just for you and get a cool 10% OFF your first
          buy! Make gift-giving super awesome with a sprinkle of extra love!
        </p>
        <div className="space-y-4 clear-both mt-4">
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="w-full bg-[#EE3124] hover:bg-[#d62b1f] py-6 text-xl font-bold">
            Claim Your 10% OFF
          </Button>
        </div>
      </div>
    </div>
  );
};
