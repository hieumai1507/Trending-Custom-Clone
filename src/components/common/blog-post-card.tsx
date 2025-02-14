import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    image: string;
    date: string;
    slug: string;
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card
      key={post.id}
      className="group overflow-hidden transition-all hover:shadow-lg"
    >
      <CardHeader className="p-0">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="mb-2 line-clamp-2 text-[16px] font-bold text-[#0d0c22]">
          {post.title}
        </h3>
        <time className="text-sm text-[#aeaeb2] text-left">{post.date}</time>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          Read More
        </a>
      </CardFooter>
    </Card>
  );
}
