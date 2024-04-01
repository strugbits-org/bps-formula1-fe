import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AnonymousLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AnonymousLayout;
