import { COMMON } from "@/constants/textConstant";

export default function TitleWrapper() {
  return (
    <div>
      <div
        className="relative w-full bg-[#FDF6F0] py-12 md:py-16 bg-[url('https://trendingcustom.com/cdn/shop/t/57/assets/best-sellers-mobile.png?v=183578064170196121981691676939')] 
          md:bg-[url('https://trendingcustom.com/cdn/shop/t/57/assets/best-sellers-tablet.png?v=169280630438275693631691676940')] 
          lg:bg-[url('https://trendingcustom.com/cdn/shop/t/57/assets/best-sellers-pc.png?v=138456378624183897001691676940')] 
          bg-no-repeat bg-center bg-cover"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            {COMMON.BEST_SELLERS}
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Find the perfect personalized gift for your loved ones on our Best
            Sellers page!
          </p>
        </div>
      </div>
    </div>
  );
}
