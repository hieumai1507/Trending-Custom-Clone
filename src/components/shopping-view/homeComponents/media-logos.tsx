interface MediaLogo {
  id: number;
  name: string;
  image: string;
  width: string;
}

const mediaLogos: MediaLogo[] = [
  {
    id: 1,
    name: "RFDTV",
    image:
      "https://trendingcustom.com/cdn/shop/files/rfdtv_200x.png?v=1649814658",
    width: "w-24",
  },
  {
    id: 2,
    name: "FOX",
    image:
      "https://trendingcustom.com/cdn/shop/files/fox_200x.png?v=1649814488",
    width: "w-20",
  },
  {
    id: 3,
    name: "News",
    image:
      "https://trendingcustom.com/cdn/shop/files/newsnet_200x.png?v=1649814488",
    width: "w-20",
  },
  {
    id: 4,
    name: "TCN",
    image:
      "https://trendingcustom.com/cdn/shop/files/ncn_200x.png?v=1649814488",
    width: "w-16",
  },
  {
    id: 5,
    name: "NBC",
    image:
      "https://trendingcustom.com/cdn/shop/files/nbc_200x.png?v=1649814488",
    width: "w-24",
  },
];

export function MediaLogos() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
            As seen on
          </h2>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center md:gap-12 lg:gap-16">
            {mediaLogos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center">
                <img
                  src={logo.image || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  className={`h-auto max-h-12 ${logo.width} object-contain`}
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            And over 200 news sites
          </p>
        </div>
      </div>
    </section>
  );
}
