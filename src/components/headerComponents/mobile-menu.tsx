import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Button } from "../ui/button";
interface MenuItem {
  title: string;
  items?: {
    title: string;
    link?: string;
    items?: { title: string; link: string }[];
  }[];
  link?: string;
}

const menuData: MenuItem[] = {
  occasions: {
    title: "Occasions",
    items: [
      {
        title: "On Going",
        items: [
          { title: "Valentine's Day", link: "/occasions/valentines-day" },
        ],
      },
      {
        title: "Upcoming",
        items: [
          { title: "St. Patrick's Day", link: "/occasions/st-patricks-day" },
        ],
      },
      {
        title: "Special Occasions",
        items: [
          { title: "Birthday", link: "/occasions/birthday" },
          { title: "Wedding", link: "/occasions/wedding" },
          { title: "Newborn", link: "/occasions/newborn" },
          { title: "Anniversary", link: "/occasions/anniversary" },
          { title: "Retirement", link: "/occasions/retirement" },
          { title: "Memorial", link: "/occasions/memorial" },
        ],
      },
      {
        title: "Seasonal Occasions",
        items: [
          { title: "Graduation", link: "/occasions/graduation" },
          { title: "Pride Month", link: "/occasions/pride-month" },
          { title: "Independence Day", link: "/occasions/independence-day" },
          { title: "Summer", link: "/occasions/summer" },
          { title: "Christmas in July", link: "/occasions/christmas-in-july" },
          { title: "Back to School", link: "/occasions/back-to-school" },
          { title: "Halloween", link: "/occasions/halloween" },
          { title: "Fall Season", link: "/occasions/fall-season" },
          { title: "Christmas", link: "/occasions/christmas" },
          {
            title: "Saint Patrick's Day",
            link: "/occasions/saint-patricks-day",
          },
          { title: "Easter's Day", link: "/occasions/easter" },
        ],
      },
    ],
  },
  recipients: {
    title: "Recipients",
    items: [
      {
        title: "Gift For Her",
        items: [
          { title: "Grandma", link: "/recipients/grandma" },
          { title: "Mom", link: "/recipients/mom" },
          { title: "Girlfriend", link: "/recipients/girlfriend" },
          { title: "Wife", link: "/recipients/wife" },
          { title: "Sisters", link: "/recipients/sisters" },
          { title: "Daughters", link: "/recipients/daughters" },
        ],
      },
      {
        title: "Gift For Him",
        items: [
          { title: "Grandpa", link: "/recipients/grandpa" },
          { title: "Dad", link: "/recipients/dad" },
          { title: "Uncle", link: "/recipients/uncle" },
          { title: "Husband", link: "/recipients/husband" },
          { title: "Boyfriend", link: "/recipients/boyfriend" },
          { title: "Brother", link: "/recipients/brother" },
          { title: "Son", link: "/recipients/son" },
        ],
      },
      {
        title: "Gift For Relationship",
        items: [
          { title: "Couples", link: "/recipients/couples" },
          { title: "Best Friends", link: "/recipients/best-friends" },
          { title: "Kids", link: "/recipients/kids" },
        ],
      },
      {
        title: "Gift For Pet Lovers",
        items: [
          { title: "Dog Lovers", link: "/recipients/dog-lovers" },
          { title: "Cat Lovers", link: "/recipients/cat-lovers" },
          { title: "Horse Lovers", link: "/recipients/horse-lovers" },
        ],
      },
      {
        title: "Others",
        items: [
          { title: "Fishing", link: "/recipients/fishing" },
          { title: "Camping", link: "/recipients/camping" },
          { title: "Autism Awareness", link: "/recipients/autism-awareness" },
          {
            title: "Breast Cancer Awareness",
            link: "/recipients/breast-cancer-awareness",
          },
        ],
      },
    ],
  },
  products: {
    title: "Products",
    items: [
      {
        title: "Home Decor",
        items: [
          {
            title: "Music Fridge Magnet",
            link: "/products/music-fridge-magnet",
          },
          { title: "Wooden Plaque", link: "/products/wooden-plaque" },
          {
            title: "Custom LED Night Light",
            link: "/products/custom-led-night-light",
          },
          { title: "Posters", link: "/products/posters" },
          { title: "Crystal Heart LED", link: "/products/crystal-heart-led" },
          { title: "Jewelry Dish", link: "/products/jewelry-dish" },
          { title: "Shadow Box", link: "/products/shadow-box" },
          { title: "Acrylic Plaque", link: "/products/acrylic-plaque" },
          { title: "Doormat", link: "/products/doormat" },
          {
            title: "Acrylic Board Wall Art",
            link: "/products/acrylic-board-wall-art",
          },
          { title: "Led Night Light", link: "/products/led-night-light" },
          { title: "Ornaments", link: "/products/ornaments" },
          { title: "Canvas Print", link: "/products/canvas-print" },
          { title: "Metal Sign", link: "/products/metal-sign" },
          { title: "Door Sign", link: "/products/door-sign" },
          { title: "Garden Flag", link: "/products/garden-flag" },
        ],
      },
      {
        title: "Drinkware",
        items: [
          { title: "Mugs", link: "/products/mugs" },
          { title: "Pottery Mug", link: "/products/pottery-mug" },
          { title: "Tumblers", link: "/products/tumblers" },
          { title: "Bullet Tumblers", link: "/products/bullet-tumblers" },
          { title: "Can Cooler", link: "/products/can-cooler" },
          { title: "Campfire Mugs", link: "/products/campfire-mugs" },
        ],
      },
      {
        title: "Apparel",
        items: [
          { title: "Shirt", link: "/products/shirt" },
          { title: "Hoodie & Sweatshirt", link: "/products/hoodie-sweatshirt" },
          { title: "Ugly Sweater", link: "/products/ugly-sweater" },
          {
            title: "Embroidered Sweatshirt",
            link: "/products/embroidered-sweatshirt",
          },
          {
            title: "Sleeve Printed Sweatshirt",
            link: "/products/sleeve-printed-sweatshirt",
          },
          { title: "Kid T-Shirt", link: "/products/kid-tshirt" },
          { title: "Matching Shirts", link: "/products/matching-shirts" },
          {
            title: "Double Sided Sweatshirt",
            link: "/products/double-sided-sweatshirt",
          },
          { title: "Raglan Shirt", link: "/products/raglan-shirt" },
          { title: "Sweatshirt", link: "/products/sweatshirt" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { title: "Car Visor", link: "/products/car-visor" },
          { title: "Car Sunshade", link: "/products/car-sunshade" },
          { title: "Acrylic Keychain", link: "/products/acrylic-keychain" },
          { title: "Classic Cap", link: "/products/classic-cap" },
          { title: "Wooden Keychain", link: "/products/wooden-keychain" },
          { title: "Men's Wallet", link: "/products/mens-wallet" },
          { title: "Jewelry", link: "/products/jewelry" },
          { title: "Metal Wallet Card", link: "/products/metal-wallet-card" },
        ],
      },
      {
        title: "Bed & Bath",
        items: [
          { title: "Pillows", link: "/products/pillows" },
          { title: "Fleece Blanket", link: "/products/fleece-blanket" },
          { title: "Beach Towel", link: "/products/beach-towel" },
        ],
      },
    ],
  },
};
interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const renderSubmenu = (data: MenuItem) => {
    return (
      <div className="flex flex-col">
        <div className="flex items-center p-4 border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentMenu(null)}
            className="mr-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-semibold">{data.title}</span>
        </div>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="p-4">
            {data.items?.map((item) => (
              <div key={item.title}>
                <Button
                  variant="ghost"
                  className="w-full justify-between font-normal ml-0 pl-0"
                  onClick={() =>
                    item.items
                      ? setExpandedSection(
                          expandedSection === item.title ? null : item.title
                        )
                      : null
                  }
                >
                  {item.title}
                  {item.items && <ChevronRight className="h-4 w-4" />}
                </Button>
                {expandedSection === item.title && item.items && (
                  <div className=" border-l  mt-2">
                    {item.items.map((subItem) => (
                      <Button
                        key={subItem.title}
                        variant="ghost"
                        className="w-full justify-start font-normal"
                        onClick={() => subItem.link && setCurrentMenu(null)}
                      >
                        {subItem.title}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };
  const renderMainMenu = () => {
    return (
      <ScrollArea className="h-full">
        <div className="flex flex-col p-4">
          <div className="flex justify-between mx-4">
            <a
              href="/pages/tracking-order"
              className="flex items-center py-2 font-bold underline"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M7.90008 9.29167C8.10721 9.37836 8.32205 9.44532 8.54175 9.49167V17.425C8.40701 17.3903 8.27586 17.3428 8.15008 17.2833L3.15008 15.0583C2.70861 14.8618 2.33355 14.5416 2.07029 14.1363C1.80703 13.7311 1.66687 13.2582 1.66675 12.775V7.225C1.66741 7.00242 1.69825 6.78096 1.75841 6.56667L7.90008 9.29167ZM15.9417 5.46667C15.7249 5.24475 15.4675 5.06652 15.1834 4.94167L10.1834 2.71667C9.86388 2.57247 9.51732 2.49789 9.16675 2.49789C8.81618 2.49789 8.46962 2.57247 8.15008 2.71667L3.15008 4.94167C2.86603 5.06652 2.6086 5.24475 2.39175 5.46667L8.40008 8.14167C8.64148 8.2488 8.90265 8.30415 9.16675 8.30415C9.43085 8.30415 9.69202 8.2488 9.93342 8.14167L15.9417 5.46667ZM13.9167 9.91084C14.7155 9.71845 15.5526 9.75864 16.3292 10.0267C16.3665 10.0399 16.4064 10.044 16.4455 10.0388C16.4847 10.0336 16.5221 10.0192 16.5546 9.99676C16.5872 9.97431 16.6139 9.94448 16.6327 9.9097C16.6514 9.87491 16.6617 9.83618 16.6626 9.79667V7.225C16.6619 7.00242 16.6311 6.78096 16.5709 6.56667L10.4292 9.29167C10.2208 9.37461 10.0063 9.44148 9.78758 9.49167V17.425L9.81758 17.445L11.2284 16.815C11.2611 16.7995 11.2901 16.7771 11.3133 16.7493C11.3365 16.7216 11.3534 16.6891 11.3629 16.6542C11.3723 16.6192 11.374 16.5826 11.3679 16.547C11.3618 16.5113 11.3481 16.4773 11.3276 16.4475C10.9483 15.8718 10.7133 15.2132 10.6423 14.5274C10.5714 13.8416 10.6666 13.1488 10.92 12.5076C11.1734 11.8664 11.5775 11.2957 12.0981 10.8437C12.6187 10.3917 13.2405 10.0717 13.9109 9.91084H13.9167ZM18.7742 17.9408C18.7163 17.999 18.6475 18.0451 18.5717 18.0766C18.4959 18.1081 18.4147 18.1243 18.3326 18.1243C18.2505 18.1243 18.1692 18.1081 18.0935 18.0766C18.0177 18.0451 17.9488 17.999 17.8909 17.9408L16.5992 16.6492C16.1046 16.9753 15.5251 17.1491 14.9326 17.1492C14.2496 17.1518 13.5853 16.9263 13.045 16.5085C12.5047 16.0907 12.1193 15.5045 11.95 14.8428C11.7806 14.1812 11.837 13.4819 12.1102 12.8559C12.3834 12.2299 12.8578 11.7131 13.458 11.3873C14.0583 11.0615 14.7502 10.9454 15.4239 11.0574C16.0977 11.1694 16.7147 11.5032 17.1773 12.0057C17.6398 12.5082 17.9214 13.1508 17.9773 13.8315C18.0332 14.5122 17.8603 15.1921 17.4859 15.7633L18.7767 17.055C18.8351 17.1131 18.8813 17.1822 18.9128 17.2583C18.9443 17.3344 18.9605 17.4159 18.9603 17.4983C18.9601 17.5806 18.9437 17.6621 18.9119 17.7381C18.8801 17.814 18.8336 17.8829 18.7751 17.9408H18.7742ZM16.7351 14.0967C16.7352 13.7394 16.6295 13.3902 16.4311 13.0931C16.2327 12.796 15.9507 12.5644 15.6207 12.4276C15.2907 12.2908 14.9275 12.255 14.5772 12.3247C14.2268 12.3943 13.9049 12.5663 13.6523 12.8189C13.3997 13.0715 13.2277 13.3934 13.1581 13.7437C13.0884 14.0941 13.1243 14.4573 13.261 14.7873C13.3978 15.1173 13.6294 15.3993 13.9265 15.5977C14.2236 15.796 14.5729 15.9018 14.9301 15.9017C15.4087 15.9012 15.8677 15.7109 16.2062 15.3726C16.5448 15.0342 16.7344 14.5753 16.7351 14.0967Z"
                  fill="#222222"
                ></path>
              </svg>
              Track Your Order
            </a>
            <Select defaultValue="USD">
              <SelectTrigger className="w-[70px] hover:text-[#f13c20]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="CAD">CAD</SelectItem>
                <SelectItem value="AUD">AUD</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className="my-2" />

          <a
            href="/collections/best-sellers"
            className="bg-[#EE3124] py-2 px-4 text-white rounded-md my-1 text-center inline-flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              {" "}
              <path
                d="M19 9.5C19 10.3821 18.3638 11.0522 17.804 11.6375C17.4817 11.9683 17.1509 12.3161 17.0237 12.6129C16.8964 12.9098 16.9049 13.3509 16.8964 13.8004C16.8879 14.6232 16.871 15.5647 16.2179 16.2179C15.5647 16.871 14.6232 16.8879 13.8004 16.8964C13.3509 16.9049 12.8929 16.9134 12.6129 17.0237C12.333 17.1339 11.9683 17.4817 11.6375 17.804C11.0522 18.3638 10.3821 19 9.5 19C8.61786 19 7.94777 18.3638 7.3625 17.804C7.0317 17.4817 6.68393 17.1509 6.38705 17.0237C6.09018 16.8964 5.64911 16.9049 5.19955 16.8964C4.37679 16.8879 3.43527 16.871 2.78214 16.2179C2.12902 15.5647 2.11205 14.6232 2.10357 13.8004C2.09509 13.3509 2.08661 12.8929 1.97634 12.6129C1.86607 12.333 1.5183 11.9683 1.19598 11.6375C0.636161 11.0522 0 10.3821 0 9.5C0 8.61786 0.636161 7.94777 1.19598 7.3625C1.5183 7.0317 1.84911 6.68393 1.97634 6.38705C2.10357 6.09018 2.09509 5.64911 2.10357 5.19955C2.11205 4.37679 2.12902 3.43527 2.78214 2.78214C3.43527 2.12902 4.37679 2.11205 5.19955 2.10357C5.64911 2.09509 6.10714 2.08661 6.38705 1.97634C6.66696 1.86607 7.0317 1.5183 7.3625 1.19598C7.94777 0.636161 8.61786 0 9.5 0C10.3821 0 11.0522 0.636161 11.6375 1.19598C11.9683 1.5183 12.3161 1.84911 12.6129 1.97634C12.9098 2.10357 13.3509 2.09509 13.8004 2.10357C14.6232 2.11205 15.5647 2.12902 16.2179 2.78214C16.871 3.43527 16.8879 4.37679 16.8964 5.19955C16.9049 5.64911 16.9134 6.10714 17.0237 6.38705C17.1339 6.66696 17.4817 7.0317 17.804 7.3625C18.3638 7.94777 19 8.61786 19 9.5Z"
                fill="white"
              ></path>{" "}
              <path
                d="M14.0126 7.57987C13.9194 7.50325 13.8061 7.45398 13.6857 7.43767C13.5654 7.42136 13.4428 7.43867 13.3319 7.48762L11.2693 8.39003L10.0709 6.26435C10.0136 6.16511 9.9306 6.08258 9.83036 6.02516C9.73011 5.96775 9.61619 5.9375 9.50019 5.9375C9.3842 5.9375 9.27028 5.96775 9.17003 6.02516C9.06978 6.08258 8.98679 6.16511 8.92951 6.26435L7.73108 8.39003L5.66848 7.48762C5.55741 7.43874 5.43465 7.42141 5.31408 7.43759C5.19352 7.45376 5.07996 7.5028 4.98624 7.57916C4.89252 7.65551 4.82238 7.75614 4.78375 7.86967C4.74511 7.98319 4.73953 8.10509 4.76762 8.22158L5.803 12.5652C5.8228 12.6493 5.85974 12.7285 5.91159 12.7982C5.96344 12.8678 6.02912 12.9263 6.10465 12.9703C6.2069 13.0305 6.32381 13.0624 6.44298 13.0625C6.50091 13.0624 6.55854 13.0543 6.61418 13.0384C8.50143 12.5251 10.4949 12.5251 12.3821 13.0384C12.5544 13.083 12.7377 13.0585 12.8917 12.9703C12.9677 12.9269 13.0337 12.8685 13.0856 12.7988C13.1375 12.7291 13.1742 12.6495 13.1933 12.5652L14.2328 8.22158C14.2605 8.10506 14.2547 7.98322 14.2158 7.86982C14.1769 7.75643 14.1065 7.65599 14.0126 7.57987Z"
                fill="#FC7C7C"
              ></path>
            </svg>
            Best Sellers
          </a>
          <a
            href="/collections/new-arrivals"
            className="bg-[#4CAF50] py-2 px-4 text-white rounded-md my-1 items-center flex justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              {" "}
              <path
                d="M19 9.44311C19 10.32 18.3638 10.9861 17.804 11.5678C17.4817 11.8966 17.1509 12.2423 17.0237 12.5374C16.8964 12.8325 16.9049 13.2709 16.8964 13.7178C16.8879 14.5357 16.871 15.4715 16.2179 16.1207C15.5647 16.77 14.6232 16.7868 13.8004 16.7953C13.3509 16.8037 12.8929 16.8121 12.6129 16.9217C12.333 17.0313 11.9683 17.377 11.6375 17.6974C11.0522 18.2539 10.3821 18.8862 9.5 18.8862C8.61786 18.8862 7.94777 18.2539 7.3625 17.6974C7.0317 17.377 6.68393 17.0482 6.38705 16.9217C6.09018 16.7953 5.64911 16.8037 5.19955 16.7953C4.37679 16.7868 3.43527 16.77 2.78214 16.1207C2.12902 15.4715 2.11205 14.5357 2.10357 13.7178C2.09509 13.2709 2.08661 12.8157 1.97634 12.5374C1.86607 12.2592 1.5183 11.8966 1.19598 11.5678C0.636161 10.9861 0 10.32 0 9.44311C0 8.56625 0.636161 7.90018 1.19598 7.31841C1.5183 6.98959 1.84911 6.64391 1.97634 6.34881C2.10357 6.05371 2.09509 5.61528 2.10357 5.16842C2.11205 4.35058 2.12902 3.4147 2.78214 2.76548C3.43527 2.11627 4.37679 2.09941 5.19955 2.09098C5.64911 2.08254 6.10714 2.07411 6.38705 1.9645C6.66696 1.8549 7.0317 1.50921 7.3625 1.18882C7.94777 0.632351 8.61786 0 9.5 0C10.3821 0 11.0522 0.632351 11.6375 1.18882C11.9683 1.50921 12.3161 1.83803 12.6129 1.9645C12.9098 2.09098 13.3509 2.08254 13.8004 2.09098C14.6232 2.09941 15.5647 2.11627 16.2179 2.76548C16.871 3.4147 16.8879 4.35058 16.8964 5.16842C16.9049 5.61528 16.9134 6.07057 17.0237 6.34881C17.1339 6.62704 17.4817 6.98959 17.804 7.31841C18.3638 7.90018 19 8.56625 19 9.44311Z"
                fill="white"
              ></path>{" "}
              <path
                d="M9.9638 4.99518L11.0214 6.99654C11.0993 7.14154 11.248 7.24224 11.4195 7.26462L13.795 7.59042C13.9338 7.60877 14.0597 7.67769 14.1447 7.78286C14.2288 7.88669 14.2649 8.01826 14.2445 8.1476C14.2278 8.25501 14.1742 8.35436 14.092 8.43044L12.3707 10.0017C12.2448 10.1114 12.1878 10.2738 12.2182 10.4327L12.642 12.6417C12.6871 12.9085 12.4994 13.16 12.2182 13.2105C12.1022 13.228 11.9835 13.2096 11.8789 13.1595L9.75999 12.1199C9.60273 12.0452 9.41696 12.0452 9.2597 12.1199L7.14075 13.1595C6.88039 13.2898 6.5578 13.2011 6.41289 12.9595C6.35921 12.8633 6.3402 12.7536 6.35778 12.6466L6.78157 10.4372C6.81198 10.2788 6.75449 10.1154 6.62906 10.0058L4.90777 8.43536C4.703 8.24919 4.69682 7.94263 4.89399 7.74974C4.89827 7.74571 4.90302 7.74124 4.90777 7.73676C4.98949 7.65844 5.09686 7.60877 5.21278 7.59579L7.58829 7.26954C7.75933 7.24671 7.90804 7.14691 7.98643 7.00102L9.006 4.99518C9.09674 4.82332 9.28488 4.71636 9.48918 4.72084H9.55284C9.73005 4.74098 9.88446 4.84436 9.9638 4.99518Z"
                fill="#78BE50"
              ></path>
            </svg>
            New Arrivals
          </a>

          <div className="py-2">
            {Object.entries(menuData).map(([key, section]) => (
              <Button
                key={key}
                variant="ghost"
                className="w-full justify-between"
                onClick={() => setCurrentMenu(key)}
              >
                {section.title}
                <ChevronRight className="h-4 w-4" />
              </Button>
            ))}
            <a href="/gift-cards" className="block py-1">
              Gift Card
            </a>
          </div>

          <div className="py-2">
            <h3 className="font-semibold mb-2">For Customers</h3>
            <a href="/rewards" className="block py-1">
              Rewards
            </a>
            <a href="/reviews" className="block py-1">
              Reviews
            </a>
            <a href="/gift-finder" className="block py-1">
              Gift Finder
            </a>
          </div>

          <div className="py-2">
            <h3 className="font-semibold mb-2">By TrendingCustom</h3>
            <a href="/shipping" className="block py-1">
              Shipping Info
            </a>
            <a href="/contact" className="block py-1">
              Contact Us
            </a>
            <a href="/help" className="block py-1">
              Help Center
            </a>
            <a href="/about" className="block py-1">
              About Us
            </a>
            <a href="/blog" className="block py-1">
              Our Blog
            </a>
          </div>

          <div className="flex gap-4 py-4 border-b-2 border-[#F2F2F7]">
            <a href="#" className="text-blue-600">
              <img
                src="https://trendingcustom.com/cdn/shop/t/57/assets/facebook.svg?v=40076760842241353711684321067"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="text-red-600">
              <img
                src="https://trendingcustom.com/cdn/shop/t/57/assets/youtube.svg?v=6638661724601410251684321061"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="text-pink-600">
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 py-4">
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/mcafee.svg?v=60147985054043600351684321072"
              alt="Visa"
              className="h-3"
            />
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/applepay.svg?v=28520863370749705221684321065"
              alt="Mastercard"
              className="h-3"
            />
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/paypal.svg?v=144439452253569997431684321056"
              alt="PayPal"
              className="h-3"
            />
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/visa.svg?v=13516842236769147801684321059"
              alt="Apple Pay"
              className="h-3"
            />
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/mastercard.svg?v=127634395552011532221684321069"
              alt="Apple Pay"
              className="h-3"
            />
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/americanexpress.svg?v=154218857946696951621684321064"
              alt="Apple Pay"
              className="h-3"
            />
          </div>

          <p className="text-sm text-gray-500 pt-4">
            © 2025 TrendingCustom™. Powered by Shopify
          </p>
        </div>
      </ScrollArea>
    );
  };
  return (
    <div className="h-screen bg-white">
      {currentMenu
        ? renderSubmenu(menuData[currentMenu as keyof typeof menuData])
        : renderMainMenu()}
    </div>
  );
}
