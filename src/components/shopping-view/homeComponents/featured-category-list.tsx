export default function FeaturedCategoryList() {
  return (
    <section className="px-16 ">
      <div className="container mx-auto">
        {/* Featured Banners */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* New Arrivals Banner */}
          <a>
            <img src="https://trendingcustom.com/cdn/shop/files/Group_35144_1.png?v=1737023126&width=1170" />
          </a>

          {/* Create Your Story Banner */}
          <a>
            <img src="https://trendingcustom.com/cdn/shop/files/Group_35118_5737a383-59d5-4934-bd30-08d94872b47c.png?v=1729331223&width=1170" />
          </a>
        </div>
      </div>
    </section>
  );
}
