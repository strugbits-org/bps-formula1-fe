import HomePage from "@/components/Home/Home";
import { pageLoadFinished } from "@/utils/AnimationFunctions";
import {
  getCreateAccountDropdown,
  getCreateAccountForm,
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
  getHomePageData,
  getSignInPage,
} from "@/services/apiServices";

export default function Page({
  homePageData,
  homeBottomLeftLink,
  homeBottomRightSocialLinks,
  signInPage,
  createAccountPage,
  createAccountDropdown,
}) {
  return (
    <HomePage
      homePageData={homePageData[0]}
      leftSectionLinks={homeBottomLeftLink}
      rightSectionIcons={homeBottomRightSocialLinks}
      signInPage={signInPage[0]}
      createAccountPage={createAccountPage[0]}
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
  pageLoadFinished();

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
