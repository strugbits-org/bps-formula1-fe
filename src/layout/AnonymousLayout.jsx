import { Outlet } from "react-router-dom";
import SignedUserNavbar from "./Navbar";

const AnonymousLayout = () => {
  return (
    <>
      <SignedUserNavbar />
      <Outlet />
    </>
  );
};

export default AnonymousLayout;
