export default function Banner() {
  return (
    <div className="mx-4 my-4 max-w-[calc(100%-32px)] w-[calc(100%-32px)]">
      {/* mobile */}
      <div className="md:hidden block">
        <a className="relative">
          <img src="https://trendingcustom.com/cdn/shop/files/Group_35142_bbc22819-f760-438d-aabb-3ee4f1aafb73.png?v=1737710439&width=700" />
        </a>
      </div>
      {/* large screen */}
      <div className="md:block hidden">
        <a className="relative">
          <img src="https://trendingcustom.com/cdn/shop/files/Frame_33962_145800ea-66b4-4a71-a2ed-e9b98c3d0b51.png?v=1737710422&width=1920" />
        </a>
      </div>
    </div>
  );
}
