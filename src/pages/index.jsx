import HomePage from "@/components/Home/Home";
import {
  getHomeBottomRightSocialLinks,
  getCreateAccountDropdown,
  getHomeBottomLeftLink,
  getCreateAccountForm,
  getHomePageData,
  getSignInPage,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({
  homePageData,
  homeBottomLeftLink,
  homeBottomRightSocialLinks,
  signInPage,
  createAccountPage,
  createAccountDropdown,
}) {
  markPageLoaded();

  return (
    <HomePage
      homePageData={homePageData}
      leftSectionLinks={homeBottomLeftLink}
      rightSectionIcons={homeBottomRightSocialLinks}
      signInPage={signInPage}
      createAccountPage={createAccountPage}
      createAccountDropdown={createAccountDropdown}
    />
  );
}

export const getServerSideProps = async () => {
  const [
    homePageData,
    homeBottomLeftLink,
    homeBottomRightSocialLinks,
    signInPage,
    createAccountPage,
    createAccountDropdown,
  ] = await Promise.all([
    getHomePageData(),
    getHomeBottomLeftLink(),
    getHomeBottomRightSocialLinks(),
    getSignInPage(),
    getCreateAccountForm(),
    getCreateAccountDropdown(),
  ]);
  return {
    props: {
      homePageData,
      homeBottomLeftLink,
      homeBottomRightSocialLinks,
      signInPage,
      createAccountPage,
      createAccountDropdown,
    },
  };
};
