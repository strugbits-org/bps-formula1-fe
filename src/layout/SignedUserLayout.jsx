import { Outlet, useLocation } from "react-router-dom";
import SignedUserNavbar from "./SignedUserNavbar";
import SignedUserFooter from "./SignedUserFooter";
import SecondLoader from "../components/loader copy";

const SignedUserLayout = () => {
  const location = useLocation();
  const pathname =
    location.pathname.trim() === "/" ? "home" : location.pathname.substring(1); // Remove leading slash
  const cleanPath = pathname.split("/")[0].trim();
  console.log(cleanPath, "cleanPath>>");
  return (
    <>
      {/* <SecondLoader /> */}
      <SignedUserNavbar />
      <div id="main-transition">
        <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
          <main>
            <Outlet />;
          </main>
        </div>
        <SignedUserFooter />
      </div>
    </>
  );
};

export default SignedUserLayout;
