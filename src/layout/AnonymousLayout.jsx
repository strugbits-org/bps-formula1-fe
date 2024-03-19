import { Outlet } from "react-router-dom";
import SignedUserNavbar from "./SignedUserNavbar";

const AnonymousLayout = () => {
  return (
    <>
      <SignedUserNavbar />
      <Outlet />;
    </>
  );
};

export default AnonymousLayout;
