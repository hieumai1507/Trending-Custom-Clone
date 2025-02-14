import { Card, CardContent, CardFooter } from "../../ui/card";

interface Category {
  title: string;
  image: string;
  alt: string;
}

const categories: Category[] = [
  {
    title: "Music Fridge Magnet",
    image:
      "https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a7675683e2a292c153233302915181833352476757775737675757076717e72183022256a76692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d3335322_400x.webp?v=1737437249",
    alt: "Custom music player magnet with artwork",
  },
  {
    title: "Wooden Plaque",
    image:
      "https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a7776683d25127708702f300d3d1818757377767674777176767f183022256a75692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352_400x.webp?v=1737437367",
    alt: "My Missing Piece wooden plaque",
  },
  {
    title: "LED Night Light",
    image:
      "https://trendingcustom.com/cdn/shop/files/image-2_a07b00ee-57ca-4c35-a52b-e304948d7eab_400x.png?v=1736498998",
    alt: "Decorative LED night light",
  },
  {
    title: "Poster",
    image:
      "https://trendingcustom.com/cdn/shop/files/3c652c223e657d65757775736a777168050a280034150305023618187573777577717270777672183022256a73692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352_400x.webp?v=1737437563",
    alt: "Custom couple poster artwork",
  },
];

export default function ShopCategories() {
  return (
    <section className="md:max-w-[calc(100%-144px)] md:w-[calc(100%-144px)]  md:mx-[72px] mx-[16px] max-w-[calc(100%-32px)] w-[calc(100%-32px)]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="md:text-3xl text-[20px] font-bold tracking-tight sm:text-4xl mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-[590px] mx-auto">
            Looking for custom ornaments or home decor? You'll find the perfect
            gift for any occasion right here!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                {" "}
                {/* Xóa padding để ảnh chạm viền */}
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  {" "}
                  {/* Chỉ bo góc trên */}
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.alt}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-2">
                {" "}
                {/* Giảm khoảng cách giữa ảnh và text */}
                <h3 className="font-bold text-[20px] text-center w-full">
                  {category.title}
                </h3>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
