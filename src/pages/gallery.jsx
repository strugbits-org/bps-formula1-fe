import Gallery from "@/components/Gallery";
import {
  getCollectionsData,
  getGalleryPageData,
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
} from "@/services/apiServices";

export default function Page({
  galleryPageData,
  collectionsData,
  homeBottomRightSocialLinks,
  homeBottomLeftLink,
}) {
  return (
    <Gallery
      galleryPageData={galleryPageData[0]}
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
