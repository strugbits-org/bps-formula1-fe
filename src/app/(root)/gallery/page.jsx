import { getCollectionsData } from "@/app/(protected)/collections/page";
import {
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
} from "@/app/page";
import Gallery from "@/appPages/Gallery";
import createWixClient from "@/config/WixConfig";
const WixClient = createWixClient();

const getGalleryPageData = async () => {
  try {
    let options = {
      dataCollectionId: "GalleryPageF1",
    };
    const { items: collectionsItemData } = await WixClient.items
      .queryDataItems(options)
      .find();

    return collectionsItemData[0].data;
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
