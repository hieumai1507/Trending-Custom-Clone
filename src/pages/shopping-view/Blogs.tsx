import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll lên đầu trang
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component mount
  return (
    <div>
      <Outlet />
    </div>
  );
}
