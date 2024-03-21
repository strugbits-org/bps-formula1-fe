import { Outlet } from "react-router-dom";
import SignedUserNavbar from "./SignedUserNavbar";
import AnonymousNavbar from "./AnonymousNavbar";
import Home from "../pages/Home";

const AnonymousLayout = () => {
  return (
    <>
      {/* <AnonymousNavbar /> */}
      <SignedUserNavbar />
      <Outlet />;{/* <Home /> */}
    </>
  );
};

export default AnonymousLayout;
