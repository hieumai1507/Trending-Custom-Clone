import { useEffect, useState } from "react";
import ArticleCard from "./article-card";
import { blogPosts } from "@/data/blogPost";
import { Pagination } from "@/components/common/pagination";

const itemsPerPage = 8; // Number of articles per page
export default function OurBlog() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll lên đầu trang
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component mount
  return (
    <div className="container mx-auto py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
      <div className="flex flex-wrap -mx-4">
        {currentPosts.map((post) => (
          <ArticleCard
            key={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            date={post.date}
            readMoreLink={post.readMoreLink}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
