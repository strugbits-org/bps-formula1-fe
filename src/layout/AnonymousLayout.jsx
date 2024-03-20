import { Outlet } from "react-router-dom";
import SignedUserNavbar from "./SignedUserNavbar";
import AnonymousNavbar from "./AnonymousNavbar";

const AnonymousLayout = () => {
  return (
    <>
      {/* <AnonymousNavbar /> */}
      <Outlet />;
    </>
  );
};

export default AnonymousLayout;
