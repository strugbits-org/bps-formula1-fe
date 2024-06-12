import Gallery from "@/components/Gallery";
import {
  getCollectionsData,
  getGalleryPageData,
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
} from "@/services/scApiCalls";

export default async function Page() {
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
  return (
    <Gallery
      galleryPageData={galleryPageData}
      collectionsData={collectionsData}
      bottomLinks={homeBottomLeftLink}
      bottomSocialLinks={homeBottomRightSocialLinks}
    />
  );
}
