import HomePage from "@/appPages/Home/Home";
import createWixClient from "@/config/WixConfig";
const WixClient = createWixClient();

export const getHomePageData = async () => {
  try {
    let options = {
      dataCollectionId: "HomePageContentF1",
    };
    const { items: fetchHomeData } = await WixClient.items
      .queryDataItems(options)
      .find();

    return fetchHomeData[0].data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getHomeBottomRightSocialLinks = async () => {
  try {
    let options = {
      dataCollectionId: "SocialMediaLinksF1",
    };
    const { items: fetchHomeTopData } = await WixClient.items
      .queryDataItems(options)
      .find();
    const desiredData = [];
    for (let i = 0; i < fetchHomeTopData.length; i++) {
      const element = fetchHomeTopData[i];
      desiredData.push(element.data);
    }
    return desiredData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getHomeBottomLeftLink = async () => {
  try {
    let options = {
      dataCollectionId: "HomePageBottomLeftLinksF1",
    };
    const { items: fetchHomeData } = await WixClient.items
      .queryDataItems(options)
      .find();
    const desiredData = [];
    for (let i = 0; i < fetchHomeData.length; i++) {
      const element = fetchHomeData[i];
      desiredData.push(element.data);
    }

    return desiredData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSignInPage = async () => {
  try {
    let options = {
      dataCollectionId: "SignInPageF1",
    };
    const { items: fetchSignInPageData } = await WixClient.items
      .queryDataItems(options)
      .find();

    return fetchSignInPageData[0].data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCreateAccountForm = async () => {
  try {
    let options = {
      dataCollectionId: "CreateAccountPageF11",
    };
    const { items: fetchSignInPageData } = await WixClient.items
      .queryDataItems(options)
      .find();

    return fetchSignInPageData[0].data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCreateAccountDropdown = async () => {
  try {
    let options = {
      dataCollectionId: "HospitalitySpaceLocatedOptionsF1",
    };
    const { items: fetchSignInPageData } = await WixClient.items
      .queryDataItems(options)
      .find();
    const desiredData = [];
    for (let i = 0; i < fetchSignInPageData.length; i++) {
      const element = fetchSignInPageData[i];
      desiredData.push(element.data);
    }

    return desiredData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default async function Page() {
  const homePageData = await getHomePageData();
  const homeBottomRightSocialLinks = await getHomeBottomRightSocialLinks();
  const homeBottomLeftLink = await getHomeBottomLeftLink();
  const signInPage = await getSignInPage();
  const createAccountPage = await getCreateAccountForm();
  const createAccountDropdown = await getCreateAccountDropdown(0);

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
