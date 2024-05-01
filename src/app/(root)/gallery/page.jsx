import Gallery from "@/appPages/Gallery";
import createWixClient from "@/config/WixConfig";
const WixClient = createWixClient();

const getGalleryPageData = async () => {
  try {
    let options = {
      dataCollectionId: "GalleryPage_f1",
    };
    const { items: collectionsItemData } = await WixClient.items
      .queryDataItems(options)
      .find();

    return collectionsItemData[0].data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getCollectionsData = async () => {
  try {
    let options = {
      dataCollectionId: "Collections_f1",
    };
    const { items: collectionsItemData } = await WixClient.items
      .queryDataItems(options)
      .find();
    const desiredData = [];
    for (let i = 0; i < collectionsItemData.length; i++) {
      const element = collectionsItemData[i];
      desiredData.push(element.data);
    }

    return desiredData;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getHomeBottomRightSocialLinks = async () => {
  try {
    let options = {
      dataCollectionId: "HomeBottomRightSocialLinks_f1",
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
      dataCollectionId: "HomeBottomLeftLink_f1",
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

export default async function Page() {
  const galleryPageData = await getGalleryPageData();
  const collectionsData = await getCollectionsData();
  const homeBottomRightSocialLinks = await getHomeBottomRightSocialLinks();
  const homeBottomLeftLink = await getHomeBottomLeftLink();
  return (
    <Gallery
      galleryPageData={galleryPageData}
      collectionsData={collectionsData}
      bottomLinks={homeBottomLeftLink}
      bottomSocialLinks={homeBottomRightSocialLinks}
    />
  );
}
