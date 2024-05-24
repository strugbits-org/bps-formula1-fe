import {
  getCollectionsData,
  getGalleryPageData,
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import Gallery from "@/components/Gallery";

export default function Page({
  galleryPageData,
  collectionsData,
  homeBottomRightSocialLinks,
  homeBottomLeftLink,
}) {
  markPageLoaded();
  return (
    <Gallery
      galleryPageData={galleryPageData}
      collectionsData={collectionsData}
      bottomLinks={homeBottomLeftLink}
      bottomSocialLinks={homeBottomRightSocialLinks}
    />
  );
}

export const getServerSideProps = async () => {
  const [
    galleryPageData,
    collectionsData,
    homeBottomLeftLink,
    homeBottomRightSocialLinks,
  ] = await Promise.all([
    getGalleryPageData(),
    getCollectionsData(),
    getHomeBottomLeftLink(),
    getHomeBottomRightSocialLinks(),
  ]);
  return {
    props: {
      galleryPageData,
      collectionsData,
      homeBottomLeftLink,
      homeBottomRightSocialLinks,
    },
  };
};
