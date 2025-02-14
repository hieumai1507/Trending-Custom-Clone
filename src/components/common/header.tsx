"use client";
import React from "react";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import TitleWrapper from "./header-components/title-wrapper";
import { SortDropdown } from "./header-components/sortComponents/sort-dropdown";
import { SortTabs } from "./header-components/sortComponents/sort-tabs";
import { FilterDialog } from "./header-components/filter-dialog";
import { COMMON } from "@/constants/textConstant";

export default function FilterAndSortHeader() {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [sortValue, setSortValue] = React.useState("featured");

  return (
    <div className="">
      <TitleWrapper />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            {COMMON.FILTERS}
          </Button>
          <div className="flex items-center">
            <SortDropdown value={sortValue} onValueChange={setSortValue} />
            <SortTabs value={sortValue} onValueChange={setSortValue} />
          </div>
        </div>

        {/* Products grid will go here */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {/* Product cards will go here */}
        </div>
      </div>

      <FilterDialog
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
