import Banner from "@/components/shopping-view/homeComponents/banner";
import { SectionProducts } from "@/components/shopping-view/homeComponents/SectionProducts";
import { CategorySlider } from "@/components/shopping-view/homeComponents/categorySlider";
import FeaturedCategoryList from "@/components/shopping-view/homeComponents/featured-category-list";
import ReviewCarousel from "@/components/shopping-view/homeComponents/review-carousel";
import SellingPointSection from "@/components/shopping-view/homeComponents/selling-point-section";
import ShopCategories from "@/components/shopping-view/homeComponents/shop-categories";
import { MediaLogos } from "@/components/shopping-view/homeComponents/media-logos";
import { BlogSection } from "@/components/shopping-view/homeComponents/blog-section";
import { useEffect } from "react";

export default function ShoppingHome() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll lên đầu trang
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component mount
  return (
    <div>
      <CategorySlider />
      <Banner />
      <SectionProducts />
      <FeaturedCategoryList />
      <ShopCategories />
      <SectionProducts giftOfCouple />
      <ReviewCarousel />
      <SellingPointSection />
      <MediaLogos />
      <BlogSection />
    </div>
  );
}
