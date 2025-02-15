import React from "react";

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  description?: string; // optional, if you have a short description
  date: string;
  readMoreLink: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  title,
  date,
  readMoreLink,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="rounded-md shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>{" "}
          {/* line-clamp for title */}
          <p className="text-gray-600 text-sm mb-2">{date}</p>
          <a
            href={readMoreLink}
            className="text-orange-500 hover:underline text-sm ml-2"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
