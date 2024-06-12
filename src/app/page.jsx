import HomePage from "@/components/Home/Home";
import {
  getConfirmEmailPageData,
  getCreateAccountDropdown,
  getCreateAccountForm,
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
  getHomePageData,
  getSignInPage,
} from "@/services/scApiCalls";

export default async function Page() {
  const [
    homePageData,
    homeBottomLeftLink,
    homeBottomRightSocialLinks,
    signInPage,
    createAccountPage,
    createAccountDropdown,
    confirmEmailPageData,
  ] = await Promise.all([
    getHomePageData(),
    getHomeBottomLeftLink(),
    getHomeBottomRightSocialLinks(),
    getSignInPage(),
    getCreateAccountForm(),
    getCreateAccountDropdown(),
    getConfirmEmailPageData(),
  ]);
  return (
    <HomePage
      homePageData={homePageData}
      leftSectionLinks={homeBottomLeftLink}
      rightSectionIcons={homeBottomRightSocialLinks}
      signInPage={signInPage}
      createAccountPage={createAccountPage}
      createAccountDropdown={createAccountDropdown}
      confirmEmailPageData={confirmEmailPageData}
    />
  );
}
