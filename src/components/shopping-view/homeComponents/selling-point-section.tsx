import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    title: "Safe Payment",
    description:
      "We take your privacy seriously and protect it with complete security.",
    icon: (
      <img
        src="https://trendingcustom.com/cdn/shop/files/transaction_1_2eaee27c-2af9-4df1-8def-51d50e3854d8_100x.png?v=1728283255"
        alt="Safe Payment"
        className="max-w-[56px] max-h-[56px]"
      />
    ),
  },
  {
    title: "Secure Logistic",
    description:
      "Package safety - Full refund for your damaged or lost package.",
    icon: (
      <img
        src="https://trendingcustom.com/cdn/shop/files/arrow_1_3252f918-c202-426f-9796-f63ac5a91dbd_100x.png?v=1728283322"
        alt="Secure Logistic"
        className="max-w-[56px] max-h-[56px]"
      />
    ),
  },
  {
    title: "Secure Privacy",
    description:
      "We take all necessary precautions to protect your personal information.",
    icon: (
      <img
        src="https://trendingcustom.com/cdn/shop/files/insurance_1_1_4c25f3d4-543c-409e-923d-5fea976e6770_100x.png?v=1728283338"
        alt="Secure Privacy"
        className="max-w-[56px] max-h-[56px]"
      />
    ),
  },
  {
    title: "Express Shipping",
    description: "Available as Standard or Express delivery",
    icon: (
      <img
        src="https://trendingcustom.com/cdn/shop/files/global_1_1c58fac9-e205-4691-b6ed-4b38aae5f765_100x.png?v=1728283356"
        alt="Express Shipping"
        className="max-w-[56px] max-h-[56px]"
      />
    ),
  },
];

export default function SellingPointSection() {
  return (
    <section className="w-full py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-none shadow-none text-center group"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div>{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <a href="#" className="text-sm text-primary underline block">
                  Learn More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
