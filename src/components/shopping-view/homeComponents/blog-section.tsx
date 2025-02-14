import { BlogPostCard } from "../../common/blog-post-card";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Reviews of the Week: What Our Customers Are Saying!",
    image:
      "https://trendingcustom.com/cdn/shop/articles/Title_717c45cd-cb4b-4f84-a26a-111fa52f1b58_400x.gif?v=1739135819",
    date: "February 09, 2025",
    slug: "top-10-reviews-week",
  },
  {
    id: 2,
    title:
      "A Love That Shines: Best Valentine's Day LED Light Gift Guide for Couples -Feb 6th",
    image:
      "https://trendingcustom.com/cdn/shop/articles/Banner_Gift_Guide_06.02_600x.png?v=1738660806",
    date: "February 06, 2025",
    slug: "valentines-led-guide",
  },
  {
    id: 3,
    title:
      "Top 10 Customer Reviews: Heartfelt Experiences with Our Personalized Gifts-Feb 3 2025",
    image:
      "https://trendingcustom.com/cdn/shop/articles/Banner_Blog_03.02_600x.png?v=1738556091",
    date: "February 02, 2025",
    slug: "customer-reviews-experiences",
  },
  {
    id: 4,
    title: "Love in Every Detail: Swoon-Worthy Gifts for Your Valentine!",
    image:
      "https://trendingcustom.com/cdn/shop/articles/Valentines_6_d894d20b-11e6-466c-9918-bf1b531758d8_400x.gif?v=1737580502",
    date: "January 22, 2025",
    slug: "valentine-gift-guide",
  },
];

export function BlogSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">Our Blog</h2>
          <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
            See all posts →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
