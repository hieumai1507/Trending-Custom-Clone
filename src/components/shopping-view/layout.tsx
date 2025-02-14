import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import { ShoppingFooter } from "./footer";
function ShoppingLayout() {
  return (
    <div className="">
      <main>
        <ShoppingHeader />
        <Outlet />
        <ShoppingFooter />
      </main>
    </div>
  );
}

export default ShoppingLayout;
