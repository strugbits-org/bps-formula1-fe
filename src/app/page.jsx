import HomePage from "@/components/Home/Home";
import {
  getCreateAccountDropdown,
  getCreateAccountForm,
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
  getHomePageData,
  getSignInPage,
} from "@/services/apiServices";

export default async function Page() {
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
