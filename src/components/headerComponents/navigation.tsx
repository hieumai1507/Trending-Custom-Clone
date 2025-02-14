import { Gift } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface DropdownMenu {
  sections: MenuSection[];
}

const occasionsMenu: DropdownMenu = {
  sections: [
    {
      title: "ON GOING",
      items: [{ label: "Valentine's Day", href: "/occasions/valentines-day" }],
    },
    {
      title: "UPCOMING",
      items: [
        { label: "St. Patrick's Day", href: "/occasions/st-patricks-day" },
      ],
    },
    {
      title: "SPECIAL OCCASIONS",
      items: [
        { label: "Birthday", href: "/occasions/birthday" },
        { label: "Wedding", href: "/occasions/wedding" },
        { label: "Newborn", href: "/occasions/newborn" },
        { label: "Anniversary", href: "/occasions/anniversary" },
        { label: "Retirement", href: "/occasions/retirement" },
        { label: "Memorial", href: "/occasions/memorial" },
      ],
    },
    {
      title: "SEASONAL OCCASIONS",
      items: [
        { label: "Graduation", href: "/occasions/graduation" },
        { label: "Pride Month", href: "/occasions/pride-month" },
        { label: "Independence Day", href: "/occasions/independence-day" },
        { label: "Summer", href: "/occasions/summer" },
        { label: "Christmas in July", href: "/occasions/christmas-july" },
        { label: "Back to School", href: "/occasions/back-to-school" },
        { label: "Halloween", href: "/occasions/halloween" },
        { label: "Fall Season", href: "/occasions/fall" },
        { label: "Christmas", href: "/occasions/christmas" },
        { label: "Saint Patrick's Day", href: "/occasions/st-patricks" },
        { label: "Easter's Day", href: "/occasions/easter" },
      ],
    },
  ],
};

const recipientsMenu: DropdownMenu = {
  sections: [
    {
      title: "GIFT FOR HER",
      items: [
        { label: "Grandma", href: "/recipients/grandma" },
        { label: "Mom", href: "/recipients/mom" },
        { label: "Girlfriend", href: "/recipients/girlfriend" },
        { label: "Wife", href: "/recipients/wife" },
        { label: "Sisters", href: "/recipients/sisters" },
        { label: "Daughters", href: "/recipients/daughters" },
      ],
    },
    {
      title: "GIFT FOR HIM",
      items: [
        { label: "Grandpa", href: "/recipients/grandpa" },
        { label: "Dad", href: "/recipients/dad" },
        { label: "Uncle", href: "/recipients/uncle" },
        { label: "Husband", href: "/recipients/husband" },
        { label: "Boyfriend", href: "/recipients/boyfriend" },
        { label: "Brother", href: "/recipients/brother" },
        { label: "Son", href: "/recipients/son" },
      ],
    },
    {
      title: "GIFT FOR RELATIONSHIP",
      items: [
        { label: "Couples", href: "/recipients/couples" },
        { label: "Best Friends", href: "/recipients/best-friends" },
        { label: "Kids", href: "/recipients/kids" },
      ],
    },
    {
      title: "GIFT FOR PET LOVERS",
      items: [
        { label: "Dog Lovers", href: "/recipients/dog-lovers" },
        { label: "Cat Lovers", href: "/recipients/cat-lovers" },
        { label: "Horse Lovers", href: "/recipients/horse-lovers" },
      ],
    },
    {
      title: "OTHERS",
      items: [
        { label: "Fishing", href: "/recipients/fishing" },
        { label: "Camping", href: "/recipients/camping" },
        { label: "Autism Awareness", href: "/recipients/autism-awareness" },
        { label: "Breast Cancer Awareness", href: "/recipients/breast-cancer" },
      ],
    },
  ],
};

const productsMenu: DropdownMenu = {
  sections: [
    {
      title: "HOME DECOR",
      items: [
        { label: "Music Fridge Magnet", href: "/products/fridge-magnet" },
        { label: "Wooden Plaque", href: "/products/wooden-plaque" },
        { label: "Custom LED Night Light", href: "/products/led-night-light" },
        { label: "Posters", href: "/products/posters" },
        { label: "Crystal Heart LED", href: "/products/crystal-heart" },
        { label: "Jewelry Dish", href: "/products/jewelry-dish" },
        { label: "Shadow Box", href: "/products/shadow-box" },
        { label: "Acrylic Plaque", href: "/products/acrylic-plaque" },
        { label: "Doormat", href: "/products/doormat" },
        { label: "Acrylic Board Wall Art", href: "/products/wall-art" },
        { label: "Led Night Light", href: "/products/night-light" },
        { label: "Ornaments", href: "/products/ornaments" },
        { label: "Canvas Print", href: "/products/canvas" },
        { label: "Metal Sign", href: "/products/metal-sign" },
        { label: "Door Sign", href: "/products/door-sign" },
        { label: "Garden Flag", href: "/products/garden-flag" },
      ],
    },
    {
      title: "DRINKWARE",
      items: [
        { label: "Mugs", href: "/products/mugs" },
        { label: "Pottery Mug", href: "/products/pottery-mug" },
        { label: "Tumblers", href: "/products/tumblers" },
        { label: "Bullet Tumblers", href: "/products/bullet-tumblers" },
        { label: "Can Cooler", href: "/products/can-cooler" },
        { label: "Campfire Mugs", href: "/products/campfire-mugs" },
      ],
    },
    {
      title: "APPAREL",
      items: [
        { label: "Shirt", href: "/products/shirt" },
        { label: "Hoodie & Sweatshirt", href: "/products/hoodie" },
        { label: "Ugly Sweater", href: "/products/ugly-sweater" },
        { label: "Embroidered Sweatshirt", href: "/products/embroidered" },
        {
          label: "Sleeve Printed Sweatshirt",
          href: "/products/sleeve-printed",
        },
        { label: "Kid T-Shirt", href: "/products/kid-shirt" },
        { label: "Matching Shirts", href: "/products/matching-shirts" },
        { label: "Double Sided Sweatshirt", href: "/products/double-sided" },
        { label: "Raglan Shirt", href: "/products/raglan" },
        { label: "Sweatshirt", href: "/products/sweatshirt" },
      ],
    },
    {
      title: "ACCESSORIES",
      items: [
        { label: "Car Visor", href: "/products/car-visor" },
        { label: "Car Sunshade", href: "/products/car-sunshade" },
        { label: "Acrylic Keychain", href: "/products/keychain" },
        { label: "Classic Cap", href: "/products/cap" },
        { label: "Wooden Keychain", href: "/products/wooden-keychain" },
        { label: "Men's Wallet", href: "/products/wallet" },
        { label: "Jewelry", href: "/products/jewelry" },
        { label: "Metal Wallet Card", href: "/products/wallet-card" },
      ],
    },
    {
      title: "BED & BATH",
      items: [
        { label: "Pillows", href: "/products/pillows" },
        { label: "Fleece Blanket", href: "/products/blanket" },
        { label: "Beach Towel", href: "/products/towel" },
      ],
    },
  ],
};

export function Navigation() {
  return (
    <nav className="relative border-b-2">
      <div className="container mx-auto hidden md:flex items-center justify-center px-4">
        <ul className="flex items-center space-x-8">
          <li className="border-b-2 border-[white] hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a href="/" className="hover:text-[#f13c20]">
              Home
            </a>
          </li>
          <li className="border-b-2 border-[white] hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a
              href="/collections/best-sellers"
              className="hover:text-[#f13c20]"
            >
              Best Sellers
            </a>
          </li>
          <li className="border-b-2 border-[white] hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a
              href="/collections/new-arrivals"
              className="hover:text-[#f13c20]"
            >
              New Arrivals
            </a>
          </li>
          <li className="border-b-2 border-[white] group relative hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a href="/occasions" className="hover:text-[#f13c20]">
              Occasions
            </a>
            <div className="invisible absolute left-1/2 top-[calc(100%+2px)] z-50 w-screen max-w-4xl -translate-x-1/2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 flex flex-col">
              <div className="relative mt-2 rounded-lg bg-white p-6 shadow-lg">
                <div className="grid grid-cols-4 gap-6">
                  {occasionsMenu.sections.map((section) => (
                    <div
                      key={section.title}
                      className="min-w-[200px] flex flex-col"
                    >
                      <h3 className="mb-3 text-[16px] font-semibold text-gray-900 self-start">
                        {section.title}
                      </h3>
                      <ul className="space-y-2 flex flex-col items-start">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block  text-[#222] font-medium text-[16px] hover:text-[#f13c20]"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li className="border-b-2 border-[white] group relative hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a href="/recipients" className="hover:text-[#f13c20]">
              Recipients
            </a>
            <div className="invisible absolute left-1/2 top-[calc(100%+2px)] z-50 w-screen max-w-7xl -translate-x-1/2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="relative mt-2 rounded-lg bg-white p-6 shadow-lg">
                <div className="grid grid-cols-4 gap-4">
                  {" "}
                  {recipientsMenu.sections.map((section) => (
                    <div
                      key={section.title}
                      className="min-w-[160px] flex flex-col"
                    >
                      <h3 className="mb-3 text-[16px] font-semibold text-gray-900 self-start">
                        {section.title}
                      </h3>
                      <ul className="space-y-2 flex flex-col items-start">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block text-[#222] font-medium text-[16px] hover:text-[#f13c20]"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li className="border-b-2 border-[white] group relative hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a href="/products" className="hover:text-[#f13c20]">
              Products
            </a>
            <div className="invisible absolute left-1/2 top-[calc(100%+2px)] z-50 w-screen max-w-6xl -translate-x-1/2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="relative mt-2 rounded-lg bg-white p-6 shadow-lg">
                <div className="grid grid-cols-4 gap-6">
                  {" "}
                  {productsMenu.sections.map((section) => (
                    <div
                      key={section.title}
                      className="min-w-[200px] flex flex-col"
                    >
                      <h3 className="mb-3 text-[16px] font-semibold text-gray-900 self-start">
                        {section.title}
                      </h3>
                      <ul className="space-y-2 flex flex-col items-start">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block text-[#222] font-medium text-[16px] hover:text-[#f13c20]"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li className="border-b-2 border-[white] hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a href="/gift-cards" className="hover:text-[#f13c20]">
              Gift Cards
            </a>
          </li>
          <li className="border-b-2 border-[white] hover:border-b-2 hover:border-[#f13c20] hover:text-[#f13c20] py-[10px]">
            <a
              href="/gift-finder"
              className="flex items-center gap-2 text-[#f13c20]"
            >
              <Gift className="h-5 w-5" />
              Gift Finder
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
