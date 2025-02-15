interface Product {
  id: string;
  name: string;
  title: string;
  image: string;
  images: string[]; // Thêm mảng ảnh chi tiết
  currentPrice: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  tag: "Daily Deals" | "Trending Item" | "Best Choice" | "Best Seller";
  sizes: { value: string; label: string; isBestseller?: boolean }[];
  description: string;
  shippingInfo: string;
  satisfactionGuarantee: string;
  shippingProtection: boolean;
  giftWrapping: boolean;
  material: string; // Added material property
  size: string; // Added size property
}

const tags: (
  | "Daily Deals"
  | "Trending Item"
  | "Best Choice"
  | "Best Seller"
)[] = ["Daily Deals", "Trending Item", "Best Choice", "Best Seller"];

function getRandomTag():
  | "Daily Deals"
  | "Trending Item"
  | "Best Choice"
  | "Best Seller" {
  return tags[Math.floor(Math.random() * tags.length)];
}

function getRandomBoolean(): boolean {
  return Math.random() < 0.5;
}

export const products: Product[] = [
  {
    id: "1",
    name: "y2k-couple-frame",
    title:
      "Y2K Couple Frame Personalized 2-layer Wooden Plaque, Gift for Him, Gift for Her",
    image:
      "https://cdn.shopify.com/s/files/1/0638/0811/0834/files/c4tPqKPs0l__kgkkgfoygq__w1_large.jpg?v=1738661232",
    images: [
      "https://cdn.shopify.com/s/files/1/0638/0811/0834/files/c4tPqKPs0l__kgkkgfoygq__w1_large.jpg?v=1738661232",
      "https://cdn.shopify.com/s/files/1/0638/0811/0834/files/c4tPqKPs0l__kgkkgfoygq__w1_large.jpg?v=1738661232",
      "https://cdn.shopify.com/s/files/1/0638/0811/0834/files/c4tPqKPs0l__kgkkgfoygq__w1_large.jpg?v=1738661232",
    ],
    currentPrice: 27.99,
    originalPrice: 37.99,
    discount: 26,
    rating: 4.8,
    reviews: 886,
    tag: getRandomTag(),
    sizes: [
      { value: "5.5", label: '5.5"' },
      { value: "8", label: '8"', isBestseller: true },
      { value: "10", label: '10"' },
    ],
    description:
      "Khung ảnh đôi Y2K khắc tên theo yêu cầu. Món quà ý nghĩa dành tặng người yêu.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Đảm bảo hài lòng 100%",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Wood",
    size: "8 inches",
  },
  {
    id: "2",
    name: "minimalist-wall-art",
    title: "Minimalist Line Art Print, Abstract Wall Decor, Modern Home Art",
    image:
      "https://livingsimplyhouse.com/cdn/shop/products/abstract-minimalist-wall-artwall-decorliving-simply-house-990085_1800x1800.jpg?v=1686850270",
    images: [
      "https://livingsimplyhouse.com/cdn/shop/products/abstract-minimalist-wall-artwall-decorliving-simply-house-990085_1800x1800.jpg?v=1686850270",
      "https://images.thdstatic.com/productImages/ac7c106f-c2fd-4e04-8803-cddd32c7bc52/svn/black-wall-sculptures-avw773f8-64_600.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStfTZB5qlXnQGVvOy_qhQaJCUfMYyrOjdWQ&s",
      "https://i.etsystatic.com/27080234/r/il/4ba423/3662550127/il_570xN.3662550127_h3dt.jpg",
      "https://m.media-amazon.com/images/I/81XHgDDrBlL.jpg",
      "https://minimalistarts.com/cdn/shop/articles/choosing-the-perfect-minimalist-wall-art-for-your-space_1782x.png?v=1688478029",
    ],
    currentPrice: 19.99,
    originalPrice: 24.99,
    discount: 20,
    rating: 4.6,
    reviews: 520,
    tag: getRandomTag(),
    sizes: [
      { value: "S", label: "Small" },
      { value: "M", label: "Medium", isBestseller: true },
      { value: "L", label: "Large" },
    ],
    description: "Tranh trừu tượng tối giản, phù hợp trang trí mọi không gian.",
    shippingInfo: "Giao hàng trong 3-5 ngày",
    satisfactionGuarantee: "Hoàn tiền nếu không hài lòng",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Paper",
    size: "M",
  },
  {
    id: "3",
    name: "ceramic-coffee-mug",
    title: "Handmade Ceramic Coffee Mug, Unique Glaze, Gift for Coffee Lovers",
    image: "https://images-na.ssl-images-amazon.com/images/I/61Wj+0TjQOL.jpg",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61Wj+0TjQOL.jpg",
      "https://femora.in/cdn/shop/files/FMBNNSHBLKMRL_1.jpg?v=1719041481",
      "https://market99.com/cdn/shop/files/ceramic-coffee-mug-330ml-sea-green-mugs-1-29021595762858.jpg?v=1737464621",
      "https://koskela.com.au/cdn/shop/collections/Mugs.jpg?v=1663136951",
    ],
    currentPrice: 14.5,
    originalPrice: 18.0,
    discount: 19,
    rating: 4.9,
    reviews: 950,
    tag: getRandomTag(),
    sizes: [
      { value: "12oz", label: "12 oz" },
      { value: "16oz", label: "16 oz" },
    ],
    description:
      "Cốc cà phê gốm thủ công với lớp men độc đáo. Món quà hoàn hảo cho người yêu cà phê.",
    shippingInfo: "Giao hàng trong 1-3 ngày",
    satisfactionGuarantee: "Đổi trả dễ dàng",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Ceramic",
    size: "12oz",
  },
  {
    id: "4",
    name: "leather-wallet-men",
    title: "Genuine Leather Wallet for Men, Slim Design, RFID Blocking",
    image:
      "https://craftandglory.in/cdn/shop/products/DSC07927_1.jpg?v=1660802328&width=1946",
    images: [
      "https://craftandglory.in/cdn/shop/products/DSC07927_1.jpg?v=1660802328&width=1946",
      "https://buffalojackson.com/cdn/shop/files/denver_leather_trifold_wallet_autumn_brown_3_of_3_2000x.jpg?v=1711116886",
    ],
    currentPrice: 39.99,
    originalPrice: 49.99,
    discount: 20,
    rating: 4.7,
    reviews: 780,
    tag: getRandomTag(),
    sizes: [{ value: "One Size", label: "One Size" }],
    description: "Ví da thật cho nam, thiết kế mỏng, chống RFID.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Bảo hành 1 năm",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Leather",
    size: "One Size",
  },
  {
    id: "5",
    name: "scented-candles-set",
    title: "Scented Candles Gift Set, Natural Soy Wax, Aromatherapy Candles",
    image:
      "https://m.media-amazon.com/images/I/81uG9hIQuvL._AC_UF894,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81uG9hIQuvL._AC_UF894,1000_QL80_.jpg",
      "https://sosacandlesstore.com/cdn/shop/files/Set-4-2_1.jpg?v=1724945263",
    ],
    currentPrice: 29.99,
    originalPrice: 35.0,
    discount: 14,
    rating: 4.8,
    reviews: 620,
    tag: getRandomTag(),
    sizes: [
      { value: "Set of 3", label: "Set of 3" },
      { value: "Set of 6", label: "Set of 6" },
    ],
    description:
      "Bộ nến thơm làm từ sáp đậu nành tự nhiên, dùng cho liệu pháp hương thơm.",
    shippingInfo: "Giao hàng trong 3-5 ngày",
    satisfactionGuarantee: "Đảm bảo hương thơm",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Soy Wax",
    size: "Set of 3",
  },
  {
    id: "6",
    name: "boho-throw-blanket",
    title: "Boho Throw Blanket, Soft Knitted Blanket, Decorative Fringe",
    image: "https://m.media-amazon.com/images/I/81evsZSrJCL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81evsZSrJCL.jpg",
      "https://m.media-amazon.com/images/I/71lQaikjKyS.jpg",
    ],
    currentPrice: 45.0,
    originalPrice: 55.0,
    discount: 18,
    rating: 4.7,
    reviews: 480,
    tag: getRandomTag(),
    sizes: [
      { value: "50x60", label: "50x60 inches" },
      { value: "60x80", label: "60x80 inches" },
    ],
    description: "Chăn đắp phong cách boho, mềm mại, có tua rua trang trí.",
    shippingInfo: "Giao hàng trong 4-6 ngày",
    satisfactionGuarantee: "Đảm bảo sự ấm áp",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Cotton",
    size: "50x60 inches",
  },
  {
    id: "7",
    name: "wooden-serving-tray",
    title: "Wooden Serving Tray with Handles, Rustic Farmhouse Style",
    image:
      "https://www.tylermorriswoodworking.com/cdn/shop/products/Cherry_serving_tray_1024x1024.JPG?v=1607099150",
    images: [
      "https://www.tylermorriswoodworking.com/cdn/shop/products/Cherry_serving_tray_1024x1024.JPG?v=1607099150",
      "https://m.media-amazon.com/images/I/71UVHN79KrL._AC_SL1500_.jpg",
    ],
    currentPrice: 32.5,
    originalPrice: 40.0,
    discount: 19,
    rating: 4.6,
    reviews: 350,
    tag: getRandomTag(),
    sizes: [
      { value: "Medium", label: "Medium" },
      { value: "Large", label: "Large" },
    ],
    description: "Khay gỗ phục vụ có tay cầm, phong cách trang trại mộc mạc.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Đảm bảo chất lượng gỗ",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Wood",
    size: "Medium",
  },
  {
    id: "8",
    name: "yoga-mat-non-slip",
    title: "Non-Slip Yoga Mat, Eco-Friendly Material, Exercise Mat",
    image:
      "https://m.media-amazon.com/images/I/81chpv2CQLL._AC_UF1000,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81chpv2CQLL._AC_UF1000,1000_QL80_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81CCvULy-UL.jpg",
    ],
    currentPrice: 24.0,
    originalPrice: 30.0,
    discount: 20,
    rating: 4.8,
    reviews: 510,
    tag: getRandomTag(),
    sizes: [{ value: "Standard", label: "Standard" }],
    description:
      "Thảm tập yoga chống trượt, chất liệu thân thiện với môi trường.",
    shippingInfo: "Giao hàng trong 1-3 ngày",
    satisfactionGuarantee: "Đảm bảo độ bám dính",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Eco-Friendly Material",
    size: "Standard",
  },
  {
    id: "9",
    name: "bluetooth-speaker-portable",
    title: "Portable Bluetooth Speaker, Waterproof, Loud Sound",
    image: "https://images-na.ssl-images-amazon.com/images/I/718yxonHN8L.jpg",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/718yxonHN8L.jpg",
      "https://antien.vn/uploaded/Bose%20Home%20Speaker%20Portable/loa-bluetooth-Bose-Home-Speaker-Portable-den.jpg",
    ],
    currentPrice: 49.99,
    originalPrice: 59.99,
    discount: 17,
    rating: 4.7,
    reviews: 680,
    tag: getRandomTag(),
    sizes: [{ value: "One Size", label: "One Size" }],
    description: "Loa Bluetooth di động, chống nước, âm thanh lớn.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Đảm bảo chất lượng âm thanh",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Plastic, Metal",
    size: "One Size",
  },
  {
    id: "10",
    name: "air-purifier-home",
    title: "Air Purifier for Home, HEPA Filter, Removes Allergens",
    image:
      "https://img.gigadigital.vn/image/1725608957432-may-loc-khong-khi-smartmi-air-purifier-3.jpg",
    images: [
      "https://img.gigadigital.vn/image/1725608957432-may-loc-khong-khi-smartmi-air-purifier-3.jpg",
      "https://media.wired.com/photos/674786180dabf1e9f09fed88/master/w_320%2Cc_limit/Bosch-Air-6000-Air-Purifier-Reviewer-Photo-SOURCE-Kat-Merck.jpg",
    ],
    currentPrice: 79.0,
    originalPrice: 99.0,
    discount: 20,
    rating: 4.6,
    reviews: 420,
    tag: getRandomTag(),
    sizes: [
      { value: "Small Room", label: "Small Room" },
      { value: "Large Room", label: "Large Room" },
    ],
    description:
      "Máy lọc không khí cho gia đình, bộ lọc HEPA, loại bỏ chất gây dị ứng.",
    shippingInfo: "Giao hàng trong 3-5 ngày",
    satisfactionGuarantee: "Đảm bảo chất lượng không khí",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Plastic",
    size: "Small Room",
  },
  {
    id: "11",
    name: "personalized-name-necklace",
    title: "Personalized Name Necklace, Custom Jewelry Gift for Her",
    image:
      "https://www.babygold.com/cdn/shop/products/IMG_2746.jpg?v=1725559412",
    images: [
      "https://www.babygold.com/cdn/shop/products/IMG_2746.jpg?v=1725559412",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeB82og8khfY3XlP_M3CV3fldMhnp-KVR-g&s",
    ],
    currentPrice: 34.99,
    originalPrice: 45.0,
    discount: 22,
    rating: 4.9,
    reviews: 920,
    tag: getRandomTag(),
    sizes: [
      { value: "16 inches", label: "16 inches" },
      { value: "18 inches", label: "18 inches" },
    ],
    description:
      "Dây chuyền khắc tên theo yêu cầu, món quà trang sức ý nghĩa dành tặng bạn gái.",
    shippingInfo: "Giao hàng trong 5-7 ngày",
    satisfactionGuarantee: "Đảm bảo chất lượng vàng",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Gold",
    size: "16 inches",
  },
  {
    id: "12",
    name: "desk-organizer-accessories",
    title: "Desk Organizer Accessories, Office Supplies Storage",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUR_wz0-BBBfOVbFSH7sSzOOoKtOO65kfvVQ&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUR_wz0-BBBfOVbFSH7sSzOOoKtOO65kfvVQ&s",
      "https://i.etsystatic.com/14386622/r/il/03ec1a/5967736559/il_570xN.5967736559_7arg.jpg",
    ],
    currentPrice: 21.5,
    originalPrice: 26.0,
    discount: 17,
    rating: 4.7,
    reviews: 580,
    tag: getRandomTag(),
    sizes: [{ value: "One Size", label: "One Size" }],
    description: "Bộ phụ kiện sắp xếp bàn làm việc, đựng đồ dùng văn phòng.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Đảm bảo không gian gọn gàng",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Plastic",
    size: "One Size",
  },
  {
    id: "13",
    name: "essential-oil-diffuser",
    title:
      "Essential Oil Diffuser, Aromatherapy Diffuser, Ultrasonic Humidifier",
    image:
      "https://cdn.lifestylepackaging.com/wp-content/uploads/shutterstock_1087497845-scaled.jpg",
    images: [
      "https://cdn.lifestylepackaging.com/wp-content/uploads/shutterstock_1087497845-scaled.jpg",
      "https://www.nowfoods.com/sites/default/files/styles/cloudzoom_image/public/sku-images/ultrasonic-faux-wood-diffuser.jpg?itok=J9lmcmkD",
    ],
    currentPrice: 38.0,
    originalPrice: 48.0,
    discount: 21,
    rating: 4.8,
    reviews: 710,
    tag: getRandomTag(),
    sizes: [
      { value: "100ml", label: "100ml" },
      { value: "300ml", label: "300ml" },
    ],
    description: "Máy khuếch tán tinh dầu, tạo ẩm không khí bằng sóng siêu âm.",
    shippingInfo: "Giao hàng trong 3-5 ngày",
    satisfactionGuarantee: "Đảm bảo hương thơm",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Plastic, Glass",
    size: "100ml",
  },
  {
    id: "14",
    name: "gardening-tool-set",
    title: "Gardening Tool Set, Heavy Duty Garden Tools, Gardening Gifts",
    image: "https://m.media-amazon.com/images/I/81eQgJDPEJL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81eQgJDPEJL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71c-ziM7s8L.jpg",
    ],
    currentPrice: 42.99,
    originalPrice: 52.0,
    discount: 17,
    rating: 4.6,
    reviews: 490,
    tag: getRandomTag(),
    sizes: [{ value: "Set of 10", label: "Set of 10" }],
    description:
      "Bộ dụng cụ làm vườn chất lượng cao, món quà ý nghĩa cho người yêu cây cảnh.",
    shippingInfo: "Giao hàng trong 4-6 ngày",
    satisfactionGuarantee: "Đảm bảo độ bền",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Metal, Wood",
    size: "Set of 10",
  },
  {
    id: "15",
    name: "kitchen-knife-set",
    title: "Kitchen Knife Set, Stainless Steel Knives, Chef Knife Set",
    image: "https://m.media-amazon.com/images/I/718iZVcnVEL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/718iZVcnVEL.jpg",
      "https://sithimy.s3.ap-southeast-1.amazonaws.com/sithimy/media/OAedshXGS4e8CPH52gCVOcdRRZupYjDdDk4rEaQz.jpg",
    ],
    currentPrice: 69.0,
    originalPrice: 85.0,
    discount: 19,
    rating: 4.8,
    reviews: 650,
    tag: getRandomTag(),
    sizes: [{ value: "Set of 15", label: "Set of 15" }],
    description: "Bộ dao nhà bếp bằng thép không gỉ, bao gồm dao đầu bếp.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Đảm bảo độ sắc bén",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Stainless Steel",
    size: "Set of 15",
  },
  {
    id: "16",
    name: "women's-running-shoes",
    title: "Women's Running Shoes, Lightweight Sneakers, Athletic Shoes",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2253.jpg?auto=webp&quality=75&width=1024",
    images: [
      "https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2253.jpg?auto=webp&quality=75&width=1024",
      "https://www.womensrunning.co.uk/wp-content/uploads/2024/01/Asics-Novablast-4.png",
    ],
    currentPrice: 55.0,
    originalPrice: 70.0,
    discount: 21,
    rating: 4.7,
    reviews: 720,
    tag: getRandomTag(),
    sizes: [
      { value: "6", label: "6" },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
    ],
    description: "Giày chạy bộ nữ, nhẹ, thích hợp cho các hoạt động thể thao.",
    shippingInfo: "Giao hàng trong 3-5 ngày",
    satisfactionGuarantee: "Đảm bảo sự thoải mái",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Mesh, Rubber",
    size: "6",
  },
  {
    id: "17",
    name: "smartwatch-fitness-tracker",
    title: "Smartwatch Fitness Tracker, Heart Rate Monitor, Sleep Tracking",
    image: "https://images-na.ssl-images-amazon.com/images/I/71JU-bUt-sL.jpg",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71JU-bUt-sL.jpg",
      "https://m.media-amazon.com/images/I/71R3wk0QavL.jpg",
    ],
    currentPrice: 89.99,
    originalPrice: 110.0,
    discount: 18,
    rating: 4.6,
    reviews: 540,
    tag: getRandomTag(),
    sizes: [{ value: "One Size", label: "One Size" }],
    description:
      "Đồng hồ thông minh theo dõi sức khỏe, đo nhịp tim, theo dõi giấc ngủ.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Đảm bảo tính năng chính xác",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Metal, Plastic",
    size: "One Size",
  },
  {
    id: "18",
    name: "bluetooth-headphones-noise-cancelling",
    title:
      "Bluetooth Headphones Noise Cancelling, Wireless Over-Ear Headphones",
    image:
      "https://i5.walmartimages.com/seo/Bose-QuietComfort-Ultra-Wireless-Noise-Cancelling-Bluetooth-Headphones-Black_4a17732c-c548-4d96-af9c-ebb490efd56b.24ccd50051e17a63c1b4ed144ba13956.jpeg",
    images: [
      "https://i5.walmartimages.com/seo/Bose-QuietComfort-Ultra-Wireless-Noise-Cancelling-Bluetooth-Headphones-Black_4a17732c-c548-4d96-af9c-ebb490efd56b.24ccd50051e17a63c1b4ed144ba13956.jpeg",
      "https://i.rtings.com/assets/pages/Km6uApc9/best-noise-cancelling-headphones-20230906-medium.jpg?format=auto",
    ],
    currentPrice: 75.0,
    originalPrice: 92.0,
    discount: 18,
    rating: 4.8,
    reviews: 680,
    tag: getRandomTag(),
    sizes: [{ value: "One Size", label: "One Size" }],
    description: "Tai nghe Bluetooth chống ồn, không dây, trùm đầu.",
    shippingInfo: "Giao hàng trong 3-5 ngày",
    satisfactionGuarantee: "Đảm bảo chất lượng âm thanh",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Plastic, Metal",
    size: "One Size",
  },
  {
    id: "19",
    name: "laptop-backpack-waterproof",
    title: "Laptop Backpack Waterproof, Travel Backpack, Business Backpack",
    image: "https://m.media-amazon.com/images/I/51qv8aK9usL._AC_UL1321_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51qv8aK9usL._AC_UL1321_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71TPTB-rXiL.jpg",
    ],
    currentPrice: 48.5,
    originalPrice: 60.0,
    discount: 19,
    rating: 4.7,
    reviews: 490,
    tag: getRandomTag(),
    sizes: [
      { value: "Medium", label: "Medium" },
      { value: "Large", label: "Large" },
    ],
    description: "Ba lô đựng laptop chống nước, thích hợp du lịch và công tác.",
    shippingInfo: "Giao hàng trong 2-4 ngày",
    satisfactionGuarantee: "Đảm bảo độ bền",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Nylon",
    size: "Medium",
  },
  {
    id: "20",
    name: "digital-camera-4k",
    title: "Digital Camera 4K, Vlog Camera, Camera for Photography",
    image: "https://images-na.ssl-images-amazon.com/images/I/712T6VYeaWL.jpg",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/712T6VYeaWL.jpg",
      "https://m.media-amazon.com/images/I/81ub66qWvlL.jpg",
    ],
    currentPrice: 399.0,
    originalPrice: 450.0,
    discount: 11,
    rating: 4.5,
    reviews: 380,
    tag: getRandomTag(),
    sizes: [{ value: "One Size", label: "One Size" }],
    description: "Máy ảnh kỹ thuật số 4K, thích hợp quay vlog và chụp ảnh.",
    shippingInfo: "Giao hàng trong 3-5 ngày",
    satisfactionGuarantee: "Đảm bảo chất lượng hình ảnh",
    shippingProtection: getRandomBoolean(),
    giftWrapping: getRandomBoolean(),
    material: "Plastic, Metal",
    size: "One Size",
  },
];
