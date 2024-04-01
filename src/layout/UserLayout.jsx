import { Outlet, useLocation } from "react-router-dom";

import Account from "../pages/Account/Index";
import Footer from "./Footer";
import Navbar from "./Navbar";

const UserLayout = () => {
  const location = useLocation();
  const pathname =
    location.pathname.trim() === "/" ? "home" : location.pathname.substring(1);
  const cleanPath = pathname.split("/")[0].trim();
  return (
    <>
      <Navbar />
      <Account />
      <div id="main-transition">
        <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
          <main>
            <Outlet />;
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserLayout;
