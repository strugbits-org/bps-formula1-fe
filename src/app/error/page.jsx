import {
  getBackgroundImages,
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
} from '@/services/scApiCalls';
import Error404Page from '@/components/Error404Page';

export default async function Page() {
  const [homeBottomLeftLink, homeBottomRightSocialLinks, backgroundData] =
    await Promise.all([
      getHomeBottomLeftLink(),
      getHomeBottomRightSocialLinks(),
      getBackgroundImages(),
    ]);
  return (
    <Error404Page
      leftSectionLinks={homeBottomLeftLink}
      rightSectionIcons={homeBottomRightSocialLinks}
      backgroundData={backgroundData}
    />
  );
}
