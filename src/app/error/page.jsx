import {
  getHomeBottomLeftLink,
  getHomeBottomRightSocialLinks,
} from "@/services/apiServices";
import Error404Page from "@/components/Error404Page";

export default async function Page() {
  const [homeBottomLeftLink, homeBottomRightSocialLinks] = await Promise.all([
    getHomeBottomLeftLink(),
    getHomeBottomRightSocialLinks(),
  ]);
  return (
    <Error404Page
      leftSectionLinks={homeBottomLeftLink}
      rightSectionIcons={homeBottomRightSocialLinks}
    />
  );
}
