import { Outlet, useLocation } from "react-router-dom";

import Account from "../pages/Account/Index";
import SignedUserNavbar from "./Navbar";
import Footer from "./Footer";

const SignedUserLayout = () => {
  const location = useLocation();
  const pathname =
    location.pathname.trim() === "/" ? "home" : location.pathname.substring(1);
  const cleanPath = pathname.split("/")[0].trim();
  return (
    <>
      {/* <SecondLoader /> */}
      <SignedUserNavbar />
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

export default SignedUserLayout;
