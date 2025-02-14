"use client";
import { Truck, Package, Gift } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabsProps {
  description: string;
  reviews: {
    rating: number;
    count: number;
  };
}

export function ProductTabs({ reviews }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="border-b rounded-none w-full justify-start h-auto p-0 bg-transparent">
        {[
          "Description",
          "Shipping Info",
          "Satisfaction Guarantee",
          "Reviews",
        ].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab.toLowerCase().replace(" ", "-")}
            className={cn(
              "rounded-none border-b-2 border-transparent px-0 pb-4 pt-2 font-medium text-muted-foreground mr-8",
              "data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            )}
          >
            {tab}
            {tab === "Reviews" && ` (${reviews.count})`}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="description" className="pt-6 text-left">
        <div className="space-y-4">
          <p>
            Elevate your moments with our exquisite Personalized Standing Wooden
            Plaque, a perfect blend of craftsmanship and sentimentality. Made
            from carefully selected material, each plaque is a testament to the
            beauty of personalized memories.
          </p>
          <p>
            Crafted from high-quality material, our plaque exudes natural warmth
            and elegance. The accompanying display stand, also crafted from
            wood, seamlessly complements the plaque, making it a stunning decor
            piece for any table or desk.
          </p>

          <div className="space-y-4">
            <h3 className="font-medium">Product details:</h3>
            <ul className="list-disc space-y-2 pl-5 flex flex-wrap">
              <li>Material: Plywood</li>
              <li>
                Size: Available in 3 sizes options: 5.5"/14cm, 8"/20.3cm and
                10"/25.4cm (depict the longest dimension including the base,
                please allow up to 1" difference).
              </li>
              <li>
                Please note that for custom-shaped designs, the actual
                dimensions of the product you receive may be slightly different
                from the default sizes. This is due to the nature of
                custom-shaped designs, which depend on the personalized options
                you choose.
              </li>
              <li>Thickness: 0.17 in / 0.45 cm</li>
              <li>
                Packaging: 1 x 1-Layer Wooden plaque + 1 x Wooden display base
              </li>
              <li>
                1-sided printing in modern technology, durable, and vivid color.
              </li>
              <li>
                Actual color may be slightly different from the image due to
                different monitor and light effects.
              </li>
              <li>Please allow 1" differences due to manual measurement.</li>
            </ul>
          </div>

          <p>
            Capture the essence of your most treasured moments with our
            Personalized Standing Wooden Plaque. Order yours today and let your
            memories take center stage in an artful display of love and meaning.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="shipping-info" className="pt-6">
        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Truck className="h-4 w-4" />
              Standard Shipping
            </div>
          </div>

          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-[22px] h-[2px] bg-gray-200" />

            {[
              { icon: Package, date: "Feb 11", label: "Order placed" },
              { icon: Truck, date: "Feb 13 - 15", label: "Order ships" },
              { icon: Gift, date: "Mar 5 - 12", label: "Delivered!" },
            ].map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="mt-2 text-sm font-medium">{step.date}</div>
                <div className="text-sm text-muted-foreground">
                  {step.label}
                </div>
              </div>
            ))}
          </div>

          <ul className="list-disc space-y-2 pl-5 flex flex-wrap">
            <li>
              The estimated delivery time provided is subject to potential
              variations due to shipping carrier processing and excludes
              weekends and holidays
            </li>
            <li>
              The provided time frame applies only to orders shipped within the
              US
            </li>
            <li>
              Orders can be cancelled or modified within 2 hours after being
              placed
            </li>
            <li>Free Shipping for all U.S. orders over $70</li>
            <li>
              Tracking Number: When available, we will send you the tracking
              number with the confirmation email so that you can track the
              package online.
            </li>
            <li>
              International orders: It may take additional days if orders have
              to go through customs.
            </li>
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="satisfaction-guarantee" className="pt-6 ">
        <div className="space-y-4">
          <p>We want you to be satisfied with the products you buy from us.</p>

          <ul className="list-disc space-y-2 pl-5 flex flex-wrap text-left">
            <li>Full-refund for faulty products, no question asked</li>
            <li>Full-refund if the item is not as described.</li>
            <li>
              In case of defective or damaged goods, we will send a replacement
              to you (No any extra fee) within 30 days since your purchase.
            </li>
          </ul>

          <p>
            We have 24/7/365 ticket and email support. Please contact us at{" "}
            <a
              href="mailto:support@trendingcustom.com"
              className="text-blue-600 hover:underline"
            >
              support@trendingcustom.com
            </a>{" "}
            if you need any assistance.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="pt-6">
        {/* Reviews content */}
      </TabsContent>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Share:</span>
        <div className="flex gap-2">
          {[
            { icon: "twitter.svg", label: "Share on Twitter" },
            {
              icon: "https://trendingcustom.com/cdn/shop/t/57/assets/facebook.svg?v=40076760842241353711684321067",
              label: "Share on Facebook",
            },
            {
              icon: "https://trendingcustom.com/cdn/shop/t/57/assets/pinterest.svg?v=32414446195036210561684321062",
              label: "Share on Pinterest",
            },
            {
              icon: "https://trendingcustom.com/cdn/shop/t/57/assets/google.svg?v=42231041703542086261684321061",
              label: "Share on Google",
            },
          ].map((social) => (
            <button
              key={social.label}
              className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
              aria-label={social.label}
            >
              <img
                src={social.icon || "/placeholder.svg"}
                alt=""
                className="h-5 w-5"
              />
            </button>
          ))}
        </div>
      </div>
    </Tabs>
  );
}
