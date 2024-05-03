import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Account from "../pages/Account/Index";

const AnonymousLayout = () => {
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

export default AnonymousLayout;
