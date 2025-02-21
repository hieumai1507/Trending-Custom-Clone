"use client";

import { useState } from "react";
import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileMenu } from "./mobile-menu";
import { AuthDialog } from "../common/auth-dialog";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Main Header Row */}
        <div className="flex items-center justify-between px-4 md:px-[72px] py-3">
          <div className="md:flex md:items-center md:gap-4">
            {/* Only show on desktop */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetContent side="left" className="w-[300px] p-0">
                <MobileMenu onClose={() => setIsMenuOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>

          <a href="/" className="flex items-center gap-2 md:ml-0 mb-4 relative">
            <div className="absolute inset-0 bg-black bg-cover bg-center opacity-70 rounded-[5px]"></div>
            <p className="relative text-lg font-bold uppercase tracking-wide text-primary p-2 z-10 text-white ">
              fire fighter shop
            </p>
          </a>

          <div className="hidden flex-1 items-center justify-center px-6 md:flex">
            <div className="relative w-full max-w-2xl">
              <Input
                type="search"
                placeholder="Search for anything"
                className="pr-10"
              />
              <Search className="absolute right-3 top-[38%] h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex md:items-center md:gap-4">
              <a href="/reviews" className="hover:text-[#f13c20]">
                Reviews
              </a>
              <a href="/reward" className="hover:text-[#f13c20]">
                Reward
              </a>
              <a href="/pages/tracking-order" className="hover:text-[#f13c20]">
                Track Order
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

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:text-[#f13c20]"
            >
              <a href="/pages/my-wishlist">
                <Heart className="h-8 w-8 " />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:text-[#f13c20]"
              onClick={() => setIsUserDialogOpen(true)}
            >
              <User className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 hover:text-[#f13c20]"
            >
              <a href="/cart">
                <div className="flex relative">
                  <ShoppingCart className="h-8 w-8" />
                  <p className="bg-[#f13c20] rounded-[11px] pt-[2px] border border-white text-white min-w-[18px] h-[186x] absolute top-[-9px] left-[12px] px-[3px] font-bold">
                    {items.length}
                  </p>
                </div>
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar with Menu Icon */}
        <div className="flex items-center gap-2 p-2 md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 shrink-0"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </Sheet>

          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Search for anything"
              className="pr-10 w-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3"
            >
              <Search className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* Trust Badge - Mobile Only */}
        {typeof window !== "undefined" && window.location.pathname === "/" && (
          <div className="border-t p-2 text-center text-xs text-gray-600 md:hidden">
            Trusted by more than 2 Million Customers and 250K 5-Star Reviews
            <div className=" inline-flex justify-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  role="img"
                  aria-label="star"
                  className="text-yellow-400"
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Trust Badge - web large */}
        {typeof window !== "undefined" && window.location.pathname === "/" && (
          <div className="pb-2 text-center text-[16px] text-[#0d0c22] hidden md:block">
            Trusted by more than <strong>2 Million Customers</strong> and{" "}
            <strong>250K 5-Star Reviews</strong>
            <div className=" inline-flex justify-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  role="img"
                  aria-label="star"
                  className="text-yellow-400"
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <AuthDialog
        isOpen={isUserDialogOpen}
        onClose={() => setIsUserDialogOpen(false)}
      />
    </div>
  );
}
