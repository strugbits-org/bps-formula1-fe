import { Outlet } from "react-router-dom";
import SignedUserNavbar from "./SignedUserNavbar";
import SignedUserFooter from "./SignedUserFooter";
import SecondLoader from "../components/loader copy";

const SignedUserLayout = () => {
  return (
    <>
      {/* <SecondLoader /> */}
      <SignedUserNavbar />
      <Outlet />;
      <SignedUserFooter />
    </>
  );
};

export default SignedUserLayout;
