import fetchData from "./fetchFunction";

// HOME PAGE APIS
export const getHomePageData = () => fetchData("HomePageContentF1");
export const getHomeBottomRightSocialLinks = () =>
  fetchData("SocialMediaLinksF1");
export const getHomeBottomLeftLink = () =>
  fetchData("HomePageBottomLeftLinksF1");

// REGISTRATION PAGE APIS
export const getSignInPage = () => fetchData("SignInPageF1");
export const getCreateAccountForm = () => fetchData("CreateAccountPageF11");
export const getCreateAccountDropdown = () =>
  fetchData("HospitalitySpaceLocatedOptionsF1");

// GALLERY PAGE APIS
export const getGalleryPageData = () => fetchData("GalleryPageF1");

// COLLECTIONS PAGE API
export const getCollectionsData = () => fetchData("Collectionsf1");

// TERMS AND CONDITIONS APIS
export const getTermsAndConditionsPageData = () =>
  fetchData("TermsandConditionsPageContentF1");

// PRIVACY AND POLICY APIS
export const getPrivacyAndPolicyPageData = () =>
  fetchData("PrivacyandPolicyPageContentF1");

// FOOTER APIS
export const getFooterData = () => fetchData("FooterDataF1");
export const getFooterLinksData = () => fetchData("FooterLinksDataF1");
