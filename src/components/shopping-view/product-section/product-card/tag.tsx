interface TagProps {
  type: "Daily Deals" | "Trending Item" | "Best Choice" | "Best Seller";
}

export function Tag({ type }: TagProps) {
  const getTagStyle = () => {
    switch (type) {
      case "Daily Deals":
        return "bg-[#fcf5ee]";
      case "Trending Item":
        return "bg-[#e9f0ff]";
      case "Best Choice":
        return "bg-[#e8f6e9]";
    }
  };

  const getTagIcon = () => {
    switch (type) {
      case "Daily Deals":
        return "⚡";
      case "Trending Item":
        return "🔥";
      case "Best Choice":
        return "🌟";
    }
  };

  return (
    <div
      className={`inline-flex items-center px-2 py-1 rounded-md text-[14px] text-black font-medium ${getTagStyle()}`}
    >
      <span className="mr-1">{getTagIcon()}</span>
      {type}
    </div>
  );
}
