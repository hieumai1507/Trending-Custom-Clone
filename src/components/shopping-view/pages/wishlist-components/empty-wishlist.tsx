import React from "react";
import BrokenHeartIcon from "./broken-heart-icon";

const EmptyFavorites: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="rounded-full bg-gray-100 p-8">
        <BrokenHeartIcon className="w-20 h-20 text-red-400" />
      </div>
      <h2 className="text-2xl font-semibold mt-4 text-gray-700">
        Nothing here... yet.
      </h2>
      <p className="text-center text-gray-500 mt-2">
        These are a few of your favorite things...
        <br />
        or they will be, once you favorite something.
      </p>
    </div>
  );
};

export default EmptyFavorites;
